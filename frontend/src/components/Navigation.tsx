import { Globe, Home, ListTodo, Trophy, Users, User } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from './ui/button';
import { useStore } from '../state/store';

interface NavigationProps {
  isLoggedIn: boolean;
}

export default function Navigation({ isLoggedIn }: NavigationProps) {
  const location = useLocation();
  const currentPath = location.pathname;
  const { logout, state } = useStore();

  const navItems = [
    { id: 'dashboard', label: 'Dashboard', icon: Globe, path: '/dashboard' },
    { id: 'tasks', label: 'Tasks', icon: ListTodo, path: '/tasks' },
    { id: 'leaderboard', label: 'Leaderboard', icon: Trophy, path: '/leaderboard' },
    { id: 'guild', label: 'Guild', icon: Users, path: '/guild' },
    { id: 'profile', label: 'Profile', icon: User, path: '/profile' },
  ];

  const isHomePage = currentPath === '/' || currentPath === '';

  return (
    <header className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[95%] max-w-7xl">
      <div className={`${isHomePage ? 'bg-white/10 backdrop-blur-xl border border-white/20' : 'bg-white/40 backdrop-blur-xl border border-white/20'} rounded-2xl shadow-2xl px-6 py-4 flex items-center justify-between`}>
        <Link 
          to="/"
          className="flex items-center gap-3 hover:opacity-80 transition-opacity"
        >
          <div className="p-2 bg-gradient-to-br from-indigo-600 to-blue-600 rounded-xl shadow-lg">
            <Globe className="w-6 h-6 text-white" />
          </div>
          <div>
            <h1 className={isHomePage ? 'text-white' : 'text-gray-900'}>Achievement Atlas</h1>
            <p className={`text-xs ${isHomePage ? 'text-indigo-200' : 'text-gray-500'}`}>Conquer Through Collaboration</p>
          </div>
        </Link>

        {isLoggedIn ? (
          <div className="flex items-center gap-1">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = currentPath === item.path;
              return (
                <Link key={item.id} to={item.path}>
                  <Button
                    variant={isActive ? 'default' : 'ghost'}
                    className={isActive ? 'bg-indigo-600 hover:bg-indigo-700' : (isHomePage ? 'text-white hover:bg-white/10' : 'hover:bg-gray-100')}
                  >
                    <Icon className="w-4 h-4 mr-2" />
                    {item.label}
                  </Button>
                </Link>
              );
            })}
            <Button 
              variant={isHomePage ? 'ghost' : 'ghost'}
              className={isHomePage ? 'text-white hover:bg-white/10' : 'hover:bg-gray-100'}
              onClick={logout}
            >
              Logout
            </Button>
          </div>
        ) : (
          <Link to="/login">
            <Button 
              className={`${isHomePage ? 'bg-gradient-to-r from-indigo-600 to-blue-600 hover:from-indigo-500 hover:to-blue-500 text-white shadow-[0_0_20px_rgba(99,102,241,0.3)] hover:shadow-[0_0_30px_rgba(99,102,241,0.5)] border border-indigo-400/30' : 'bg-indigo-600 hover:bg-indigo-700'}`}
            >
              Login
            </Button>
          </Link>
        )}
      </div>
    </header>
  );
}
