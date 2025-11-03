import { Trophy, TrendingUp, Crown, Medal, Zap, Target } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import { Avatar, AvatarFallback } from './ui/avatar';
import '../styles/leaderboard.css';

export default function LeaderboardPage() {
  const guildLeaderboard = [
    { rank: 1, name: 'IT Innovators', color: '#3B82F6', countries: 52, points: 15420, members: 34 },
    { rank: 2, name: 'HR Heroes', color: '#8B5CF6', countries: 48, points: 14890, members: 28 },
    { rank: 3, name: 'Finance Falcons', color: '#10B981', countries: 45, points: 13200, members: 31 },
    { rank: 4, name: 'Admissions Avengers', color: '#F59E0B', countries: 42, points: 12100, members: 25 },
  ];

  const playerLeaderboard = [
    { rank: 1, name: 'Sarah Chen', guild: 'HR Heroes', guildColor: '#8B5CF6', points: 2340, tasksCompleted: 156 },
    { rank: 2, name: 'Alex Kumar', guild: 'IT Innovators', guildColor: '#3B82F6', points: 2280, tasksCompleted: 148 },
    { rank: 3, name: 'Emily Watson', guild: 'Finance Falcons', guildColor: '#10B981', points: 2150, tasksCompleted: 142 },
    { rank: 4, name: 'David Chang', guild: 'Admissions Avengers', guildColor: '#F59E0B', points: 1980, tasksCompleted: 134 },
    { rank: 5, name: 'Marcus Rivera', guild: 'HR Heroes', guildColor: '#8B5CF6', points: 1890, tasksCompleted: 128 },
    { rank: 6, name: 'Rachel Foster', guild: 'IT Innovators', guildColor: '#3B82F6', points: 1820, tasksCompleted: 125 },
    { rank: 7, name: 'James Park', guild: 'Finance Falcons', guildColor: '#10B981', points: 1750, tasksCompleted: 119 },
    { rank: 8, name: 'Nina Patel', guild: 'Admissions Avengers', guildColor: '#F59E0B', points: 1680, tasksCompleted: 115 },
  ];

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
                  {guildLeaderboard.map((guild) => (
                    <div
                      key={guild.rank}
                      className={`leaderboard-guild-item ${
                        guild.rank === 1 
                          ? 'leaderboard-guild-item-first' 
                          : guild.rank === 2
                          ? 'leaderboard-guild-item-second'
                          : guild.rank === 3
                          ? 'leaderboard-guild-item-third'
                          : 'leaderboard-guild-item-default'
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-4">
                          <div className="w-12 text-center">
                            {getRankIcon(guild.rank)}
                          </div>
                          <div className="flex items-center gap-3">
                            <div 
                              className="w-5 h-5 rounded-full shadow-md" 
                              style={{ backgroundColor: guild.color }} 
                            />
                            <div>
                              <div className="flex items-center gap-2">
                                <span className="text-gray-900">{guild.name}</span>
                                {guild.rank === 1 && (
                                  <TrendingUp className="w-4 h-4 text-emerald-400" />
                                )}
                              </div>
                              <p className="text-sm text-gray-700">{guild.members} members</p>
                            </div>
                          </div>
                        </div>
                        <div className="text-right">
                          <div className="text-gray-900">{guild.points.toLocaleString()} pts</div>
                          <p className="text-sm text-gray-700">{guild.countries} countries</p>
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
