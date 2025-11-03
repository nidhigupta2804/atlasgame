import { Globe, Trophy, Target, Users, TrendingUp, Zap } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import '../styles/dashboard.css';

export default function DashboardPage() {
  const mockCountries = [
    { name: 'United States', guild: 'HR Heroes', color: '#8B5CF6', points: 1250 },
    { name: 'Canada', guild: 'Finance Falcons', color: '#10B981', points: 890 },
    { name: 'United Kingdom', guild: 'IT Innovators', color: '#3B82F6', points: 1100 },
    { name: 'France', guild: 'HR Heroes', color: '#8B5CF6', points: 760 },
    { name: 'Germany', guild: 'Admissions Avengers', color: '#F59E0B', points: 950 },
    { name: 'Japan', guild: 'IT Innovators', color: '#3B82F6', points: 1400 },
  ];

  const guildStats = [
    { name: 'HR Heroes', color: '#8B5CF6', countries: 2, points: 2010 },
    { name: 'Finance Falcons', color: '#10B981', countries: 1, points: 890 },
    { name: 'IT Innovators', color: '#3B82F6', countries: 2, points: 2500 },
    { name: 'Admissions Avengers', color: '#F59E0B', countries: 1, points: 950 },
  ];

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
              <div className="text-3xl text-white">195</div>
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
              <div className="text-3xl text-white">48</div>
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
              <div className="text-3xl text-white">#2</div>
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
          {/* Map Placeholder */}
          <Card className="dashboard-map-card">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-white">
                <Globe className="w-5 h-5 text-indigo-400" />
                World Map
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="dashboard-map-placeholder">
                <div className="text-center">
                  <Globe className="w-16 h-16 mx-auto mb-4 text-indigo-400" />
                  <p className="text-white">Interactive World Map</p>
                  <p className="text-sm text-gray-300 mt-1">(Leaflet.js integration coming soon)</p>
                </div>
              </div>
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
                {guildStats
                  .sort((a, b) => b.points - a.points)
                  .map((guild, idx) => (
                  <div key={idx} className="dashboard-guild-item">
                    <div className="flex items-center gap-3">
                      <div className="flex items-center justify-center w-8 h-8 rounded-full bg-white/10 border-2" style={{ borderColor: guild.color }}>
                        <span className="text-sm text-white">#{idx + 1}</span>
                      </div>
                      <div>
                        <div className="text-sm text-white">{guild.name}</div>
                        <div className="text-xs text-gray-300">
                          {guild.countries} {guild.countries === 1 ? 'country' : 'countries'}
                        </div>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-sm text-white">{guild.points}</div>
                      <div className="text-xs text-gray-300">points</div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Recent Activity */}
        <Card className="dashboard-activity-card mt-6">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-white">
              <Zap className="w-5 h-5 text-indigo-400" />
              Recently Conquered Countries
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              {mockCountries.map((country, idx) => (
                <div key={idx} className="dashboard-activity-item">
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 rounded-full shadow-md" style={{ backgroundColor: country.color }} />
                    <span className="text-white">{country.name}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Badge 
                      variant="secondary" 
                      className="bg-indigo-500/30 text-white hover:bg-indigo-500/40 border border-white/20"
                    >
                      {country.guild}
                    </Badge>
                    <span className="text-sm text-gray-300">{country.points} points</span>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
