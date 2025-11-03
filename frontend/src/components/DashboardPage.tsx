import { Globe, Trophy, Target, Users, TrendingUp, Zap } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import '../styles/dashboard.css';
import { useSelectors } from '../state/store';
import CountriesList from './CountriesList';
import WorldMap from './WorldMap';

export default function DashboardPage() {
  const { state, currentGuild, guildLeaderboard } = useSelectors();
  const totalCountries = state.countries.length;
  const controlledTotal = state.countries.filter(c => c.ownerGuildId).length;
  const currentRank = currentGuild ? guildLeaderboard.findIndex(e => e.guild.id === currentGuild.id) + 1 : 0;

  return (
    <div className="dashboard-page">
      {/* Animated Background Orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-indigo-600/10 rounded-full blur-3xl animate-pulse-slow" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl animate-pulse-slow animation-delay-2000" />
      </div>
      
      <div className="dashboard-container relative z-10">
        {/* Page Header */}
        <div className="dashboard-header">
          <h2 className="dashboard-header-title">Command Center</h2>
          <p className="dashboard-header-subtitle">Monitor global conquest progress and guild standings</p>
        </div>

        {/* Stats Overview */}
        <div className="dashboard-stats-grid">
          <Card className="dashboard-stat-card">
            <CardHeader className="pb-3">
              <CardTitle className="flex items-center gap-2 text-white">
                <div className="dashboard-stat-icon-wrapper dashboard-stat-icon-indigo">
                  <Globe className="w-4 h-4 text-indigo-400" />
                </div>
                Total Countries
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl text-white">{totalCountries}</div>
              <p className="text-sm text-gray-300 mt-1">Available territories</p>
            </CardContent>
          </Card>

          <Card className="dashboard-stat-card">
            <CardHeader className="pb-3">
              <CardTitle className="flex items-center gap-2 text-white">
                <div className="dashboard-stat-icon-wrapper dashboard-stat-icon-blue">
                  <Target className="w-4 h-4 text-blue-400" />
                </div>
                Controlled
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl text-white">{controlledTotal}</div>
              <p className="text-sm text-gray-300 mt-1">Countries claimed</p>
            </CardContent>
          </Card>

          <Card className="dashboard-stat-card">
            <CardHeader className="pb-3">
              <CardTitle className="flex items-center gap-2 text-white">
                <div className="dashboard-stat-icon-wrapper dashboard-stat-icon-cyan">
                  <Trophy className="w-4 h-4 text-cyan-400" />
                </div>
                Your Guild Rank
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl text-white">{currentGuild ? `#${currentRank || '-'}` : '-'}</div>
              <p className="text-sm text-gray-300 mt-1">
                <TrendingUp className="w-3 h-3 inline mr-1" />
                Moving up
              </p>
            </CardContent>
          </Card>

          <Card className="dashboard-stat-card">
            <CardHeader className="pb-3">
              <CardTitle className="flex items-center gap-2 text-white">
                <div className="dashboard-stat-icon-wrapper dashboard-stat-icon-indigo">
                  <Users className="w-4 h-4 text-indigo-400" />
                </div>
                Active Players
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl text-white">127</div>
              <p className="text-sm text-gray-300 mt-1">
                <Zap className="w-3 h-3 inline mr-1 text-green-400" />
                Online now
              </p>
            </CardContent>
          </Card>
        </div>

        <div className="dashboard-main-grid">
          {/* Map */}
          <Card className="dashboard-map-card">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-white">
                <Globe className="w-5 h-5 text-indigo-400" />
                World Map
              </CardTitle>
            </CardHeader>
            <CardContent>
              <WorldMap />
            </CardContent>
          </Card>

          {/* Guild Rankings */}
          <Card className="dashboard-guild-card">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-white">
                <Trophy className="w-5 h-5 text-indigo-400" />
                Guild Control
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {guildLeaderboard.map((entry, idx) => (
                  <div key={idx} className="dashboard-guild-item">
                    <div className="flex items-center gap-3">
                      <div className="flex items-center justify-center w-8 h-8 rounded-full bg-white/10 border-2" style={{ borderColor: entry.guild.color }}>
                        <span className="text-sm text-white">#{idx + 1}</span>
                      </div>
                      <div>
                        <div className="text-sm text-white">{entry.guild.name}</div>
                        <div className="text-xs text-gray-300">
                          {entry.countries} {entry.countries === 1 ? 'country' : 'countries'}
                        </div>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-sm text-white">{entry.points}</div>
                      <div className="text-xs text-gray-300">points</div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Countries List */}
        <div className="mt-6">
          <CountriesList />
        </div>
      </div>
    </div>
  );
}
