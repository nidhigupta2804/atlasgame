import React from 'react';
import { MapContainer, TileLayer, Popup, GeoJSON } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import { useSelectors } from '../state/store';
import { useEffect, useMemo, useState } from 'react';

const countryCoords: Record<string, [number, number]> = {
  usa: [37.0902, -95.7129],
  can: [56.1304, -106.3468],
  gbr: [55.3781, -3.4360],
  fra: [46.2276, 2.2137],
  deu: [51.1657, 10.4515],
  jpn: [36.2048, 138.2529],
  ind: [20.5937, 78.9629],
  bra: [-14.2350, -51.9253],
};

export default function WorldMap() {
  const { state } = useSelectors();
  const [geojson, setGeojson] = useState<any | null>(null);
  const AnyMap = MapContainer as any;
  const AnyGeoJSON = GeoJSON as any;

  useEffect(() => {
    (async () => {
      try {
        const res = await fetch('https://unpkg.com/geojson-world-countries@3.0.0/countries.geo.json');
        if (res.ok) {
          const data = await res.json();
          setGeojson(data);
        }
      } catch {}
    })();
  }, []);

  return (
    <div className="w-full rounded-lg overflow-hidden border border-white/10" style={{ height: 480 }}>
      <style>
        {`
          .leaflet-popup-content-wrapper {
            background-color: #111827 !important;
            color: #ffffff !important;
          }
          .leaflet-popup-tip {
            background-color: #111827 !important;
          }
          .leaflet-popup-content { color: #ffffff !important; }
          .leaflet-popup-close-button { color: #ffffff !important; }
          .leaflet-container .leaflet-control-zoom a,
          .leaflet-control-zoom-in,
          .leaflet-control-zoom-out {
            background: #111827 !important;
            color: #ffffff !important;
            border: 1px solid #374151 !important;
          }
          .leaflet-container .leaflet-control-zoom a:hover,
          .leaflet-control-zoom-in:hover,
          .leaflet-control-zoom-out:hover {
            background: #1f2937 !important;
            color: #ffffff !important;
          }
          .country-label-tooltip {
            background: transparent !important;
            border: none !important;
            box-shadow: none !important;
            color: #ffffff !important;
            font-weight: 600;
            text-shadow: 0 1px 2px rgba(0,0,0,0.6);
          }
        `}
      </style>
      <AnyMap center={[20, 0]} zoom={2} scrollWheelZoom={false} style={{ height: '100%', width: '100%' }}>
        {/* Minimal basemap without labels for cleaner look */}
        <TileLayer url="https://{s}.basemaps.cartocdn.com/light_nolabels/{z}/{x}/{y}{r}.png" />
        {geojson && (
          <AnyGeoJSON
            key="countries"
            data={geojson as any}
            style={(feature: any) => {
              const props: any = feature?.properties || {};
              const iso3 = (props.ISO_A3 || props.iso_a3 || '').toLowerCase();
              const name = (props.name || props.ADMIN || props.admin || '') as string;
              const byIso: Record<string, string> = {
                usa: 'usa', can: 'can', gbr: 'gbr', fra: 'fra', deu: 'deu', jpn: 'jpn', ind: 'ind', bra: 'bra',
              };
              const byName: Record<string, string> = {
                'United States': 'usa', 'Canada': 'can', 'United Kingdom': 'gbr', 'France': 'fra', 'Germany': 'deu', 'Japan': 'jpn', 'India': 'ind', 'Brazil': 'bra',
              };
              const id = byIso[iso3] || byName[name] || '';
              const country = state.countries.find(c => c.id === id);
              const owner = country?.ownerGuildId ? state.guilds.find(g => g.id === country.ownerGuildId) : null;
              const color = owner?.color || '#9CA3AF';
              return {
                color,
                weight: 1,
                fillColor: color,
                fillOpacity: 0.9,
              } as any;
            }}
            onEachFeature={(feature, layer) => {
              const props: any = (feature as any)?.properties || {};
              const iso3 = (props.ISO_A3 || props.iso_a3 || '').toLowerCase();
              const name = (props.name || props.ADMIN || props.admin || '') as string;
              const byIso: Record<string, string> = {
                usa: 'usa', can: 'can', gbr: 'gbr', fra: 'fra', deu: 'deu', jpn: 'jpn', ind: 'ind', bra: 'bra',
              };
              const byName: Record<string, string> = {
                'United States': 'usa', 'Canada': 'can', 'United Kingdom': 'gbr', 'France': 'fra', 'Germany': 'deu', 'Japan': 'jpn', 'India': 'ind', 'Brazil': 'bra',
              };
              const id = byIso[iso3] || byName[name] || '';
              const country = state.countries.find(c => c.id === id);
              const owner = country?.ownerGuildId ? state.guilds.find(g => g.id === country.ownerGuildId) : null;
              const html = `<div><div style="font-weight:600;">${name}</div><div>${owner ? `Owned by ${owner.name}` : 'Unclaimed'}</div></div>`;
              layer.bindPopup(html);
              // Always-visible centered label
              layer.bindTooltip(name, { permanent: true, direction: 'center', className: 'country-label-tooltip' });
              // Hover effects for clarity
              layer.on('mouseover', function (e: any) { (e.target as any).bringToFront(); });
              layer.on('mouseout', function (e: any) { (e.target as any).bringToBack(); });
            }}
          />
        )}
      </AnyMap>
    </div>
  );
}


