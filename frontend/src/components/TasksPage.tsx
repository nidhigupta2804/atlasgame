import { Clock, CheckCircle2, Coins, TrendingUp, Target, Zap } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { Progress } from './ui/progress';
import '../styles/tasks.css';

export default function TasksPage() {
  const mockTasks = [
    {
      id: 1,
      title: 'Process New Student Applications',
      description: 'Review and process 10 new student applications',
      points: 50,
      category: 'Admissions',
      difficulty: 'Easy',
      timeEstimate: '15 min',
      completed: false,
    },
    {
      id: 2,
      title: 'Update Employee Records',
      description: 'Update contact information for 5 employees',
      points: 30,
      category: 'HR',
      difficulty: 'Easy',
      timeEstimate: '10 min',
      completed: false,
    },
    {
      id: 3,
      title: 'Review Budget Report',
      description: 'Analyze and approve departmental budget reports',
      points: 100,
      category: 'Finance',
      difficulty: 'Hard',
      timeEstimate: '45 min',
      completed: false,
    },
    {
      id: 4,
      title: 'IT Help Desk Tickets',
      description: 'Resolve 3 help desk tickets',
      points: 40,
      category: 'IT',
      difficulty: 'Medium',
      timeEstimate: '20 min',
      completed: false,
    },
    {
      id: 5,
      title: 'Data Entry - Course Catalog',
      description: 'Enter 20 new courses into the system',
      points: 60,
      category: 'Admissions',
      difficulty: 'Medium',
      timeEstimate: '30 min',
      completed: true,
    },
  ];

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'Easy': return 'bg-emerald-100 text-emerald-700 border-emerald-200';
      case 'Medium': return 'bg-amber-100 text-amber-700 border-amber-200';
      case 'Hard': return 'bg-rose-100 text-rose-700 border-rose-200';
      default: return 'bg-gray-100 text-gray-700 border-gray-200';
    }
  };

  return (
    <div className="tasks-page">
      {/* Animated Background Orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-indigo-600/10 rounded-full blur-3xl animate-pulse-slow" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl animate-pulse-slow animation-delay-2000" />
      </div>
      
      <div className="tasks-container relative z-10">
        {/* Page Header */}
        <div className="tasks-header">
          <h2 className="tasks-header-title">Mission Control</h2>
          <p className="tasks-header-subtitle">Complete tasks to earn points and help your guild dominate</p>
        </div>

        {/* Header Stats */}
        <div className="tasks-stats-grid">
          <Card className="tasks-stat-card">
            <CardHeader className="pb-3">
              <CardTitle className="flex items-center gap-2 text-white">
                <div className="tasks-stat-icon-wrapper tasks-stat-icon-indigo">
                  <Coins className="w-4 h-4 text-indigo-400" />
                </div>
                Your Points
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl text-white">1,240</div>
              <p className="text-sm text-emerald-400 flex items-center gap-1 mt-1">
                <TrendingUp className="w-3 h-3" />
                +150 this week
              </p>
            </CardContent>
          </Card>

          <Card className="tasks-stat-card">
            <CardHeader className="pb-3">
              <CardTitle className="flex items-center gap-2 text-white">
                <div className="tasks-stat-icon-wrapper tasks-stat-icon-blue">
                  <CheckCircle2 className="w-4 h-4 text-blue-400" />
                </div>
                Tasks Completed
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl text-white">47</div>
              <p className="text-sm text-gray-300 mt-1">12 this week</p>
            </CardContent>
          </Card>

          <Card className="tasks-stat-card">
            <CardHeader className="pb-3">
              <CardTitle className="flex items-center gap-2 text-white">
                <div className="tasks-stat-icon-wrapper tasks-stat-icon-cyan">
                  <Clock className="w-4 h-4 text-cyan-400" />
                </div>
                Time Invested
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl text-white">18.5</div>
              <p className="text-sm text-gray-300 mt-1">hours this month</p>
            </CardContent>
          </Card>
        </div>

        {/* Daily Progress */}
        <Card className="tasks-progress-card">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-white">
              <Target className="w-5 h-5 text-indigo-400" />
              Daily Quest Progress
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <div className="flex justify-between text-sm">
              <span className="text-white">Complete 5 tasks today (3/5)</span>
              <span className="text-indigo-400">60%</span>
            </div>
            <Progress value={60} className="h-3" />
            <div className="tasks-bonus-alert">
              <Zap className="w-4 h-4" />
              <p>Complete 2 more tasks to earn a 50 point bonus!</p>
            </div>
          </CardContent>
        </Card>

        {/* Available Tasks */}
        <Card className="tasks-list-card">
          <CardHeader>
            <div className="tasks-list-header">
              <CardTitle className="flex items-center gap-2 text-white">
                <CheckCircle2 className="w-5 h-5 text-indigo-400" />
                Available Tasks
              </CardTitle>
              <div className="tasks-filter-buttons">
                <Button variant="outline" size="sm" className="border-white/20 text-white hover:bg-white/10">All</Button>
                <Button variant="outline" size="sm" className="border-white/20 text-white hover:bg-white/10">My Department</Button>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {mockTasks.map((task) => (
                <div
                  key={task.id}
                  className={`tasks-item ${
                    task.completed 
                      ? 'tasks-item-completed' 
                      : 'tasks-item-available'
                  }`}
                >
                  <div className="tasks-item-content">
                    <div className="flex-1 space-y-3">
                      <div className="flex items-center gap-2">
                        <h4 className="text-white">{task.title}</h4>
                        {task.completed && <CheckCircle2 className="w-5 h-5 text-emerald-400" />}
                      </div>
                      <p className="text-sm text-gray-300">{task.description}</p>
                      <div className="tasks-badges">
                        <Badge 
                          variant="outline" 
                          className="border-white/20 text-white bg-white/10"
                        >
                          {task.category}
                        </Badge>
                        <Badge className={getDifficultyColor(task.difficulty)}>
                          {task.difficulty}
                        </Badge>
                        <Badge 
                          variant="secondary" 
                          className="flex items-center gap-1 bg-slate-100 text-slate-700"
                        >
                          <Clock className="w-3 h-3" />
                          {task.timeEstimate}
                        </Badge>
                      </div>
                    </div>
                    <div className="flex flex-col items-end gap-3">
                      <div className="flex items-center gap-1.5 px-3 py-1.5 bg-gradient-to-r from-indigo-100 to-blue-100 rounded-full border border-indigo-200">
                        <Coins className="w-4 h-4 text-indigo-600" />
                        <span className="text-indigo-700">{task.points}</span>
                      </div>
                      <Button 
                        size="sm" 
                        disabled={task.completed}
                        className={task.completed 
                          ? '' 
                          : 'bg-gradient-to-r from-indigo-600 to-blue-600 hover:from-indigo-500 hover:to-blue-500'
                        }
                      >
                        {task.completed ? 'Completed' : 'Start Task'}
                      </Button>
                    </div>
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
