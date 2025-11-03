import { User, Trophy, Clock, Target, Coins, TrendingUp, Calendar, Zap, Award } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Avatar, AvatarFallback } from './ui/avatar';
import { Badge } from './ui/badge';
import { Progress } from './ui/progress';
import '../styles/profile.css';

export default function ProfilePage() {
  const userProfile = {
    name: 'Sarah Chen',
    email: 'sarah.chen@university.edu',
    guild: 'HR Heroes',
    guildColor: '#8B5CF6',
    rank: 1,
    totalPoints: 2340,
    level: 12,
    joinedDate: 'Jan 2025',
  };

  const stats = {
    tasksCompleted: 156,
    countriesContributed: 23,
    timeInvested: '42.5 hours',
    weeklyPoints: 280,
    averageTaskPoints: 15,
    streak: 14,
  };

  const achievements = [
    { name: 'First Blood', description: 'Complete your first task', earned: true, icon: '🎯' },
    { name: 'Century Club', description: 'Complete 100 tasks', earned: true, icon: '💯' },
    { name: 'Week Warrior', description: '7 day streak', earned: true, icon: '🔥' },
    { name: 'Point Master', description: 'Earn 2000 points', earned: true, icon: '⭐' },
    { name: 'Globe Trotter', description: 'Contribute to 50 countries', earned: false, icon: '🌍' },
    { name: 'Legend', description: 'Reach level 20', earned: false, icon: '👑' },
  ];

  const recentTasks = [
    { name: 'Process Applications', category: 'Admissions', points: 50, completed: '2 hours ago' },
    { name: 'Update Employee Records', category: 'HR', points: 30, completed: '5 hours ago' },
    { name: 'Review Budget Report', category: 'Finance', points: 100, completed: '1 day ago' },
    { name: 'IT Help Desk Tickets', category: 'IT', points: 40, completed: '1 day ago' },
  ];

  const pointsHistory = [
    { week: 'Week 1', points: 240 },
    { week: 'Week 2', points: 310 },
    { week: 'Week 3', points: 280 },
    { week: 'Week 4', points: 350 },
  ];

  return (
    <div className="profile-page">
      <div className="profile-container">
        {/* Profile Header */}
        <Card className="profile-header-card">
          <CardContent className="pt-6">
            <div className="profile-header-content">
              <div className="flex items-center gap-4">
                <Avatar className="profile-avatar">
                  <AvatarFallback className="profile-avatar-fallback">
                    {userProfile.name.split(' ').map(n => n[0]).join('')}
                  </AvatarFallback>
                </Avatar>
                <div>
                  <h2 className="text-gray-900">{userProfile.name}</h2>
                  <p className="text-gray-600">{userProfile.email}</p>
                  <div className="flex items-center gap-2 mt-2 flex-wrap">
                    <div className="flex items-center gap-1.5">
                      <div className="w-3 h-3 rounded-full" style={{ backgroundColor: userProfile.guildColor }} />
                      <span className="text-sm text-gray-700">{userProfile.guild}</span>
                    </div>
                    <Badge variant="outline" className="border-indigo-300 text-indigo-700 bg-indigo-50">
                      Level {userProfile.level}
                    </Badge>
                  </div>
                </div>
              </div>
              <div className="text-left md:text-right">
                <div className="flex items-center gap-2 text-indigo-700 md:justify-end">
                  <Coins className="w-6 h-6" />
                  <span className="text-3xl">{userProfile.totalPoints.toLocaleString()}</span>
                </div>
                <p className="text-sm text-gray-500 mt-1">Total Points</p>
                <Badge className="mt-2 bg-gradient-to-r from-indigo-600 to-blue-600 text-white">
                  Rank #{userProfile.rank}
                </Badge>
              </div>
            </div>

            {/* Level Progress */}
            <div className="profile-level-progress">
              <div className="flex justify-between text-sm">
                <span className="text-gray-700">Level {userProfile.level}</span>
                <span className="text-indigo-600">780/1000 XP to Level {userProfile.level + 1}</span>
              </div>
              <Progress value={78} className="h-3" />
            </div>
          </CardContent>
        </Card>

        {/* Stats Grid */}
        <div className="profile-stats-grid">
          <Card className="profile-stat-card profile-stat-card-indigo">
            <CardHeader className="pb-3">
              <CardTitle className="flex items-center gap-2 text-indigo-700 text-sm">
                <div className="profile-stat-icon-wrapper profile-stat-icon-indigo">
                  <Trophy className="w-4 h-4 text-indigo-600" />
                </div>
                Tasks Done
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl text-gray-900">{stats.tasksCompleted}</div>
              <p className="text-sm text-gray-500">All time</p>
            </CardContent>
          </Card>

          <Card className="profile-stat-card profile-stat-card-blue">
            <CardHeader className="pb-3">
              <CardTitle className="flex items-center gap-2 text-blue-700 text-sm">
                <div className="profile-stat-icon-wrapper profile-stat-icon-blue">
                  <Target className="w-4 h-4 text-blue-600" />
                </div>
                Countries
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl text-gray-900">{stats.countriesContributed}</div>
              <p className="text-sm text-gray-500">Contributed to</p>
            </CardContent>
          </Card>

          <Card className="profile-stat-card profile-stat-card-cyan">
            <CardHeader className="pb-3">
              <CardTitle className="flex items-center gap-2 text-cyan-700 text-sm">
                <div className="profile-stat-icon-wrapper profile-stat-icon-cyan">
                  <Clock className="w-4 h-4 text-cyan-600" />
                </div>
                Time
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl text-gray-900">{stats.timeInvested}</div>
              <p className="text-sm text-gray-500">Invested</p>
            </CardContent>
          </Card>

          <Card className="profile-stat-card profile-stat-card-indigo">
            <CardHeader className="pb-3">
              <CardTitle className="flex items-center gap-2 text-indigo-700 text-sm">
                <div className="profile-stat-icon-wrapper profile-stat-icon-indigo">
                  <Zap className="w-4 h-4 text-indigo-600" />
                </div>
                Streak
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl text-gray-900">{stats.streak} days</div>
              <p className="text-sm text-emerald-600">🔥 Keep it up!</p>
            </CardContent>
          </Card>
        </div>

        <div className="profile-main-grid">
          {/* Recent Activity */}
          <Card className="profile-tasks-card">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-gray-900">
                <Zap className="w-5 h-5 text-indigo-600" />
                Recent Tasks
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {recentTasks.map((task, idx) => (
                  <div key={idx} className="profile-task-item">
                    <div>
                      <div className="text-gray-900">{task.name}</div>
                      <p className="text-sm text-gray-500">{task.category}</p>
                    </div>
                    <div className="text-right">
                      <div className="text-indigo-600">+{task.points}</div>
                      <p className="text-sm text-gray-500">{task.completed}</p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Weekly Performance */}
          <Card className="profile-weekly-card">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-gray-900">
                <Calendar className="w-5 h-5 text-indigo-600" />
                This Week
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="profile-weekly-stat">
                <div className="text-sm text-gray-500">Points Earned</div>
                <div className="flex items-baseline gap-2">
                  <span className="text-2xl text-gray-900">{stats.weeklyPoints}</span>
                  <span className="text-sm text-emerald-600">+12%</span>
                </div>
              </div>
              <div className="profile-weekly-stat">
                <div className="text-sm text-gray-500">Tasks Completed</div>
                <div className="text-2xl text-gray-900">24</div>
              </div>
              <div className="profile-weekly-stat">
                <div className="text-sm text-gray-500">Avg Points/Task</div>
                <div className="text-2xl text-gray-900">{stats.averageTaskPoints}</div>
              </div>
              <div className="profile-weekly-rank-change">
                <div className="text-sm text-gray-500">Rank Change</div>
                <div className="flex items-center gap-1 text-emerald-600">
                  <TrendingUp className="w-5 h-5" />
                  <span className="text-lg">↑ 3 positions</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Achievements */}
        <Card className="profile-achievements-card">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-gray-900">
              <Award className="w-5 h-5 text-indigo-600" />
              Achievements
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="profile-achievements-grid">
              {achievements.map((achievement, idx) => (
                <div
                  key={idx}
                  className={`profile-achievement-item ${
                    achievement.earned
                      ? 'profile-achievement-earned'
                      : 'profile-achievement-locked'
                  }`}
                >
                  <div className="flex items-start gap-3">
                    <div className="text-3xl">{achievement.icon}</div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2">
                        <span className="text-gray-900">{achievement.name}</span>
                        {achievement.earned && (
                          <Badge variant="outline" className="text-xs border-indigo-300 text-indigo-700 bg-indigo-100">
                            Unlocked
                          </Badge>
                        )}
                      </div>
                      <p className="text-sm text-gray-600 mt-1">{achievement.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Points History */}
        <Card className="border-indigo-200 bg-white">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-gray-900">
              <TrendingUp className="w-5 h-5 text-indigo-600" />
              Points History
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {pointsHistory.map((week, idx) => (
                <div key={idx} className="flex items-center gap-4">
                  <span className="text-sm text-gray-600 w-20">{week.week}</span>
                  <Progress value={week.points / 4} className="flex-1 h-3" />
                  <span className="text-sm text-gray-900 w-20 text-right">{week.points} pts</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
