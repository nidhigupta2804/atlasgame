import { Users, Trophy, Target, TrendingUp, Coins, Zap, Shield } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Avatar, AvatarFallback } from './ui/avatar';
import { Badge } from './ui/badge';
import { Progress } from './ui/progress';
import '../styles/guild.css';

export default function GuildPage() {
  const guildInfo = {
    name: 'HR Heroes',
    color: '#8B5CF6',
    rank: 2,
    totalPoints: 14890,
    countries: 48,
    members: 28,
    weeklyGrowth: 12,
  };

  const members = [
    { name: 'Sarah Chen', role: 'Guild Leader', points: 2340, status: 'online', tasksThisWeek: 24 },
    { name: 'Marcus Rivera', role: 'Member', points: 1890, status: 'online', tasksThisWeek: 18 },
    { name: 'Jennifer Lee', role: 'Member', points: 1650, status: 'offline', tasksThisWeek: 15 },
    { name: 'Robert Johnson', role: 'Member', points: 1420, status: 'online', tasksThisWeek: 12 },
    { name: 'Michelle Davis', role: 'Member', points: 1380, status: 'online', tasksThisWeek: 14 },
    { name: 'Kevin Brown', role: 'Member', points: 1210, status: 'offline', tasksThisWeek: 11 },
  ];

  const topCountries = [
    { name: 'United States', points: 1250, status: 'secure' },
    { name: 'France', points: 760, status: 'secure' },
    { name: 'Australia', points: 890, status: 'contested' },
    { name: 'India', points: 650, status: 'contested' },
    { name: 'Brazil', points: 540, status: 'at-risk' },
  ];

  const recentActivity = [
    { player: 'Sarah Chen', action: 'completed task', task: 'Process Applications', points: 50, time: '5m ago' },
    { player: 'Marcus Rivera', action: 'invested in', task: 'Canada', points: 100, time: '12m ago' },
    { player: 'Jennifer Lee', action: 'completed task', task: 'Update Records', points: 30, time: '1h ago' },
    { player: 'Robert Johnson', action: 'invested in', task: 'Mexico', points: 75, time: '2h ago' },
  ];

  return (
    <div className="guild-page">
      {/* Animated Background Orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-indigo-600/10 rounded-full blur-3xl animate-pulse-slow" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl animate-pulse-slow animation-delay-2000" />
      </div>
      
      <div className="guild-container relative z-10">
        {/* Guild Header */}
        <Card className="guild-header-card">
          <CardContent className="pt-6">
            <div className="guild-header-content">
              <div className="flex items-center gap-4">
                <div 
                  className="guild-icon-wrapper" 
                  style={{ backgroundColor: guildInfo.color + '20', border: `2px solid ${guildInfo.color}40` }}
                >
                  <Users className="w-10 h-10" style={{ color: guildInfo.color }} />
                </div>
                <div>
                  <div className="flex items-center gap-3 mb-2">
                    <h2 className="text-white">{guildInfo.name}</h2>
                    <Badge className="bg-gradient-to-r from-indigo-600 to-blue-600 text-white">
                      Rank #{guildInfo.rank}
                    </Badge>
                  </div>
                  <p className="text-gray-600">{guildInfo.members} members conquering the world</p>
                </div>
              </div>
              <div className="text-left md:text-right">
                <div className="flex items-center gap-2 md:justify-end text-indigo-700">
                  <Coins className="w-5 h-5" />
                  <span className="text-2xl">{guildInfo.totalPoints.toLocaleString()}</span>
                </div>
                <p className="text-sm text-emerald-600 flex items-center gap-1 md:justify-end mt-1">
                  <TrendingUp className="w-4 h-4" />
                  +{guildInfo.weeklyGrowth}% this week
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Stats Grid */}
        <div className="guild-stats-grid">
          <Card className="guild-stat-card guild-stat-card-indigo">
            <CardHeader className="pb-3">
              <CardTitle className="flex items-center gap-2 text-indigo-700 text-sm">
                <div className="guild-stat-icon-wrapper guild-stat-icon-indigo">
                  <Target className="w-4 h-4 text-indigo-600" />
                </div>
                Countries
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl text-gray-900">{guildInfo.countries}</div>
              <p className="text-sm text-gray-500">24% of world</p>
            </CardContent>
          </Card>

          <Card className="guild-stat-card guild-stat-card-blue">
            <CardHeader className="pb-3">
              <CardTitle className="flex items-center gap-2 text-blue-700 text-sm">
                <div className="guild-stat-icon-wrapper guild-stat-icon-blue">
                  <Trophy className="w-4 h-4 text-blue-600" />
                </div>
                Total Points
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl text-gray-900">{guildInfo.totalPoints.toLocaleString()}</div>
              <p className="text-sm text-emerald-600">+1,240 this week</p>
            </CardContent>
          </Card>

          <Card className="guild-stat-card guild-stat-card-cyan">
            <CardHeader className="pb-3">
              <CardTitle className="flex items-center gap-2 text-cyan-700 text-sm">
                <div className="guild-stat-icon-wrapper guild-stat-icon-cyan">
                  <Users className="w-4 h-4 text-cyan-600" />
                </div>
                Members
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl text-gray-900">{guildInfo.members}</div>
              <p className="text-sm text-emerald-600">
                <span className="inline-block w-2 h-2 bg-emerald-500 rounded-full mr-1"></span>
                18 online now
              </p>
            </CardContent>
          </Card>

          <Card className="guild-stat-card guild-stat-card-indigo">
            <CardHeader className="pb-3">
              <CardTitle className="flex items-center gap-2 text-indigo-700 text-sm">
                <div className="guild-stat-icon-wrapper guild-stat-icon-indigo">
                  <Zap className="w-4 h-4 text-indigo-600" />
                </div>
                Avg per Member
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl text-gray-900">{Math.round(guildInfo.totalPoints / guildInfo.members)}</div>
              <p className="text-sm text-gray-500">points contributed</p>
            </CardContent>
          </Card>
        </div>

        <div className="guild-main-grid">
          {/* Members List */}
          <Card className="guild-members-card">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-gray-900">
                <Users className="w-5 h-5 text-indigo-600" />
                Guild Members
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {members.map((member, idx) => (
                  <div key={idx} className="guild-member-item">
                    <div className="flex items-center gap-3">
                      <Avatar className="guild-member-avatar">
                        <AvatarFallback className="guild-member-avatar-fallback">
                          {member.name.split(' ').map(n => n[0]).join('')}
                        </AvatarFallback>
                      </Avatar>
                      <div>
                        <div className="flex items-center gap-2">
                          <span className="text-gray-900">{member.name}</span>
                          <div className={member.status === 'online' ? 'guild-member-online' : 'guild-member-offline'} />
                        </div>
                        <p className="text-sm text-gray-500">{member.role}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-gray-900">{member.points.toLocaleString()} pts</div>
                      <p className="text-sm text-gray-500">{member.tasksThisWeek} tasks/week</p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Controlled Countries */}
          <Card className="guild-countries-card">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-gray-900">
                <Shield className="w-5 h-5 text-indigo-600" />
                Top Countries
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {topCountries.map((country, idx) => (
                  <div key={idx} className="guild-country-item">
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-900">{country.name}</span>
                      <Badge 
                        variant="outline" 
                        className={
                          country.status === 'secure' 
                            ? 'text-emerald-600 border-emerald-300 bg-emerald-50' 
                            : country.status === 'contested' 
                            ? 'text-amber-600 border-amber-300 bg-amber-50' 
                            : 'text-rose-600 border-rose-300 bg-rose-50'
                        }
                      >
                        {country.status}
                      </Badge>
                    </div>
                    <div className="flex items-center gap-2">
                      <Progress 
                        value={country.status === 'secure' ? 100 : country.status === 'contested' ? 60 : 40} 
                        className="flex-1 h-2" 
                      />
                      <span className="text-sm text-gray-500 min-w-[60px] text-right">{country.points} pts</span>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Recent Activity */}
        <Card className="guild-activity-card">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-gray-900">
              <Zap className="w-5 h-5 text-indigo-600" />
              Recent Guild Activity
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {recentActivity.map((activity, idx) => (
                <div key={idx} className="guild-activity-item">
                  <div className="flex items-center gap-3">
                    <Avatar className="guild-activity-avatar">
                      <AvatarFallback className="guild-activity-avatar-fallback">
                        {activity.player.split(' ').map(n => n[0]).join('')}
                      </AvatarFallback>
                    </Avatar>
                    <div className="text-sm">
                      <span className="text-gray-900">{activity.player}</span>
                      <span className="text-gray-500"> {activity.action} </span>
                      <span className="text-gray-900">{activity.task}</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-sm text-indigo-600">+{activity.points}</span>
                    <span className="text-sm text-gray-500">{activity.time}</span>
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
