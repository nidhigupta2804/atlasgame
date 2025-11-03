import { Trophy, TrendingUp, Crown, Medal, Zap, Target } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import { Avatar, AvatarFallback } from './ui/avatar';
import '../styles/leaderboard.css';
import { useSelectors } from '../state/store';

export default function LeaderboardPage() {
  const { guildLeaderboard, state } = useSelectors();
  const playerLeaderboard = state.users
    .map(u => ({
      name: u.name,
      points: u.totalPoints,
      guild: state.guilds.find(g => g.id === u.guildId)?.name || 'Unknown',
      guildColor: state.guilds.find(g => g.id === u.guildId)?.color || '#9CA3AF',
    }))
    .sort((a, b) => b.points - a.points)
    .slice(0, 8)
    .map((p, idx) => ({ rank: idx + 1, tasksCompleted: 0, ...p }));

  const getRankIcon = (rank: number) => {
    switch (rank) {
      case 1:
        return <Crown className="w-5 h-5 text-yellow-500" />;
      case 2:
        return <Medal className="w-5 h-5 text-slate-400" />;
      case 3:
        return <Medal className="w-5 h-5 text-amber-600" />;
      default:
        return <span className="text-gray-500">#{rank}</span>;
    }
  };

  return (
    <div className="leaderboard-page">
      {/* Animated Background Orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-indigo-600/10 rounded-full blur-3xl animate-pulse-slow" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl animate-pulse-slow animation-delay-2000" />
      </div>
      <div className="leaderboard-container">
        {/* Page Header */}
        <div className="leaderboard-header">
          <div className="leaderboard-header-icon">
            <Trophy className="w-8 h-8 text-white" />
          </div>
          <div>
            <h2 className="text-white">Leaderboards</h2>
            <p className="text-gray-300">See who's leading the conquest</p>
          </div>
        </div>

        {/* Tabs */}
        <Tabs defaultValue="guilds" className="w-full">
          <TabsList className="leaderboard-tabs grid grid-cols-2">
            <TabsTrigger value="guilds" className="data-[state=active]:bg-indigo-600 data-[state=active]:text-white">
              Guild Rankings
            </TabsTrigger>
            <TabsTrigger value="players" className="data-[state=active]:bg-indigo-600 data-[state=active]:text-white">
              Top Players
            </TabsTrigger>
          </TabsList>

          {/* Guild Rankings */}
          <TabsContent value="guilds" className="space-y-4">
            <Card className="leaderboard-main-card">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-white">
                  <Trophy className="w-5 h-5 text-indigo-400" />
                  Guild Control Leaderboard
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {guildLeaderboard.map((entry, index) => (
                    <div
                      key={entry.guild.id}
                      className={`leaderboard-guild-item ${
                        index + 1 === 1 
                          ? 'leaderboard-guild-item-first' 
                          : index + 1 === 2
                          ? 'leaderboard-guild-item-second'
                          : index + 1 === 3
                          ? 'leaderboard-guild-item-third'
                          : 'leaderboard-guild-item-default'
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-4">
                          <div className="w-12 text-center">
                            {getRankIcon(index + 1)}
                          </div>
                          <div className="flex items-center gap-3">
                            <div 
                              className="w-5 h-5 rounded-full shadow-md" 
                              style={{ backgroundColor: entry.guild.color }} 
                            />
                            <div>
                              <div className="flex items-center gap-2">
                                <span className="text-gray-900">{entry.guild.name}</span>
                                {index + 1 === 1 && (
                                  <TrendingUp className="w-4 h-4 text-emerald-400" />
                                )}
                              </div>
                              <p className="text-sm text-gray-700">{state.users.filter(u => u.guildId === entry.guild.id).length} members</p>
                            </div>
                          </div>
                        </div>
                        <div className="text-right">
                          <div className="text-gray-900">{entry.points.toLocaleString()} pts</div>
                          <p className="text-sm text-gray-700">{entry.countries} countries</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Stats Cards */}
            <div className="leaderboard-stats-grid">
              <Card className="leaderboard-stat-card leaderboard-stat-card-blue">
                <CardHeader className="pb-3">
                  <CardTitle className="flex items-center gap-2 text-blue-700">
                    <Zap className="w-4 h-4" />
                    Most Active Guild
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-blue-600" />
                    <span className="text-gray-900">IT Innovators</span>
                  </div>
                  <p className="text-sm text-gray-500 mt-1">342 tasks this week</p>
                </CardContent>
              </Card>

              <Card className="leaderboard-stat-card leaderboard-stat-card-indigo">
                <CardHeader className="pb-3">
                  <CardTitle className="flex items-center gap-2 text-indigo-700">
                    <TrendingUp className="w-4 h-4" />
                    Fastest Growing
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-purple-600" />
                    <span className="text-gray-900">HR Heroes</span>
                  </div>
                  <p className="text-sm text-gray-500 mt-1">+8 countries this week</p>
                </CardContent>
              </Card>

              <Card className="leaderboard-stat-card leaderboard-stat-card-cyan">
                <CardHeader className="pb-3">
                  <CardTitle className="flex items-center gap-2 text-cyan-700">
                    <Target className="w-4 h-4" />
                    Most Contested
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <span className="text-gray-900">Brazil</span>
                  <p className="text-sm text-gray-500 mt-1">4 guilds competing</p>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Player Rankings */}
          <TabsContent value="players" className="space-y-4">
            <Card className="leaderboard-main-card">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-gray-900">
                  <Trophy className="w-5 h-5 text-indigo-600" />
                  Top Players This Month
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  {playerLeaderboard.map((player) => (
                    <div
                      key={player.rank}
                      className={`leaderboard-player-item ${
                        player.rank === 1 
                          ? 'leaderboard-player-item-first' 
                          : player.rank === 2
                          ? 'leaderboard-player-item-second'
                          : player.rank === 3
                          ? 'leaderboard-player-item-third'
                          : 'leaderboard-player-item-default'
                      }`}
                    >
                      <div className="flex items-center gap-4">
                        <div className="w-10 text-center">
                          {getRankIcon(player.rank)}
                        </div>
                        <Avatar className="leaderboard-avatar">
                          <AvatarFallback className="leaderboard-avatar-fallback">
                            {player.name.split(' ').map(n => n[0]).join('')}
                          </AvatarFallback>
                        </Avatar>
                        <div>
                          <div className="text-gray-900">{player.name}</div>
                          <div className="flex items-center gap-2 text-sm text-gray-500">
                            <div 
                              className="w-2 h-2 rounded-full" 
                              style={{ backgroundColor: player.guildColor }} 
                            />
                            <span>{player.guild}</span>
                          </div>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="text-gray-900">{player.points.toLocaleString()} pts</div>
                        <p className="text-sm text-gray-500">{player.tasksCompleted} tasks</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
