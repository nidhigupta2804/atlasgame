import React, { useMemo, useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { useStore } from '../state/store';
import InvestModal from './modals/InvestModal';

export default function CountriesList() {
  const { state } = useStore();
  const [query, setQuery] = useState('');
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedCountry, setSelectedCountry] = useState<{ id: string; name: string } | null>(
    null
  );

  const countries = useMemo(() => {
    const q = query.trim().toLowerCase();
    return state.countries
      .filter(c => (q ? c.name.toLowerCase().includes(q) : true))
      .sort((a, b) => a.name.localeCompare(b.name));
  }, [state.countries, query]);

  const ownerFor = (guildId: string | null) => (guildId ? (state.guilds.find(g => g.id === guildId) || null) : null);

  const openInvest = (id: string, name: string) => {
    setSelectedCountry({ id, name });
    setModalOpen(true);
  };

  return (
    <Card className="border-white/20 bg-white/5">
      <CardHeader>
        <CardTitle className="flex items-center justify-between text-white">
          <span>Countries</span>
          <input
            className="px-3 py-1.5 rounded-md bg-white/80 text-gray-900 text-sm"
            placeholder="Search countries..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-2">
          {countries.map(c => {
            const owner = ownerFor(c.ownerGuildId);
            return (
              <div key={c.id} className="flex items-center justify-between p-3 rounded-md bg-white/10 border border-white/10">
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 rounded-full" style={{ backgroundColor: owner?.color || '#9CA3AF' }} />
                  <span className="text-white">{c.name}</span>
                </div>
                <div className="flex items-center gap-3">
                  {owner ? (
                    <Badge className="bg-indigo-500/30 text-white border border-white/20">{owner.name}</Badge>
                  ) : (
                    <Badge variant="outline" className="text-white border-white/30">Unclaimed</Badge>
                  )}
                  <Button size="sm" onClick={() => openInvest(c.id, c.name)}>
                    Invest
                  </Button>
                </div>
              </div>
            );
          })}
        </div>
      </CardContent>

      <InvestModal
        open={modalOpen}
        onOpenChange={setModalOpen}
        countryId={selectedCountry?.id || null}
        countryName={selectedCountry?.name || null}
      />
    </Card>
  );
}


