import { HashRouter, Routes, Route, Navigate } from 'react-router-dom';
import { useState } from 'react';
import HomePage from './components/HomePage';
import LoginPage from './components/LoginPage';
import DashboardPage from './components/DashboardPage';
import TasksPage from './components/TasksPage';
import LeaderboardPage from './components/LeaderboardPage';
import GuildPage from './components/GuildPage';
import ProfilePage from './components/ProfilePage';
import Navigation from './components/Navigation';

export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  return (
    <HashRouter>
      <div className="app-root">
        <Navigation 
          isLoggedIn={isLoggedIn}
          onLogin={handleLogin}
        />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginPage onLogin={handleLogin} />} />
          <Route 
            path="/dashboard" 
            element={isLoggedIn ? <DashboardPage /> : <Navigate to="/login" replace />} 
          />
          <Route 
            path="/tasks" 
            element={isLoggedIn ? <TasksPage /> : <Navigate to="/login" replace />} 
          />
          <Route 
            path="/leaderboard" 
            element={isLoggedIn ? <LeaderboardPage /> : <Navigate to="/login" replace />} 
          />
          <Route 
            path="/guild" 
            element={isLoggedIn ? <GuildPage /> : <Navigate to="/login" replace />} 
          />
          <Route 
            path="/profile" 
            element={isLoggedIn ? <ProfilePage /> : <Navigate to="/login" replace />} 
          />
          {/* Catch-all route */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </div>
    </HashRouter>
  );
}
