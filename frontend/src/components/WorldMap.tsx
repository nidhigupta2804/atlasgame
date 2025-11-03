import React from 'react';
import { MapContainer, TileLayer, CircleMarker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import { useSelectors } from '../state/store';

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

  return (
    <div className="w-full rounded-lg overflow-hidden border border-white/10" style={{ height: 480 }}>
      <MapContainer center={[20, 0]} zoom={2} scrollWheelZoom={false} style={{ height: '100%', width: '100%' }}>
        <TileLayer
          attribution='&copy; OpenStreetMap contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {state.countries.map(c => {
          const coord = countryCoords[c.id];
          if (!coord) return null;
          const owner = c.ownerGuildId ? state.guilds.find(g => g.id === c.ownerGuildId) : null;
          const color = owner?.color || '#9CA3AF';
          return (
            <CircleMarker
              key={c.id}
              center={coord}
              radius={10}
              pathOptions={{ color, fillColor: color, fillOpacity: 0.7 }}
            >
              <Popup>
                <div style={{ color: '#111827' }}>
                  <div style={{ fontWeight: 600 }}>{c.name}</div>
                  <div>{owner ? `Owned by ${owner.name}` : 'Unclaimed'}</div>
                </div>
              </Popup>
            </CircleMarker>
          );
        })}
      </MapContainer>
    </div>
  );
}


