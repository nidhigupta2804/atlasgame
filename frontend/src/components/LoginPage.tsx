import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Globe, Trophy, Users, Zap, MapPin, Target } from 'lucide-react';
import { Button } from './ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import { Label } from './ui/label';
import { Input } from './ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import '../styles/login.css';

const DEMO_GUILDS = [
  { id: 'hr', name: 'HR Heroes', color: '#8B5CF6', icon: Users },
  { id: 'finance', name: 'Finance Falcons', color: '#10B981', icon: Trophy },
  { id: 'it', name: 'IT Innovators', color: '#3B82F6', icon: Zap },
  { id: 'admissions', name: 'Admissions Avengers', color: '#F59E0B', icon: Target },
];

const DEMO_USERS = [
  { id: 1, name: 'Sarah Chen', guild: 'hr' },
  { id: 2, name: 'Marcus Rivera', guild: 'hr' },
  { id: 3, name: 'Emily Watson', guild: 'finance' },
  { id: 4, name: 'James Park', guild: 'finance' },
  { id: 5, name: 'Alex Kumar', guild: 'it' },
  { id: 6, name: 'Rachel Foster', guild: 'it' },
  { id: 7, name: 'David Chang', guild: 'admissions' },
  { id: 8, name: 'Nina Patel', guild: 'admissions' },
];

import { useStore } from '../state/store';

export default function LoginPage() {
  const navigate = useNavigate();
  const { login, ready } = useStore();
  const [selectedGuild, setSelectedGuild] = useState('');
  const [selectedUser, setSelectedUser] = useState('');

  const handleDemoLogin = () => {
    if (selectedUser) {
      login(parseInt(selectedUser, 10));
      navigate('/dashboard');
    }
  };

  const handleRealLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // For demo, just take first user of selected guild or user 1
    const fallbackUser = DEMO_USERS.find(u => (selectedGuild ? u.guild === selectedGuild : true));
    if (fallbackUser) {
      login(fallbackUser.id);
      navigate('/dashboard');
    }
  };

  const filteredUsers = selectedGuild
    ? DEMO_USERS.filter(user => user.guild === selectedGuild)
    : DEMO_USERS;

  return (
    <div className="login-page">
      {/* Animated background elements */}
      <div className="login-bg">
        <div className="login-orb-1"></div>
        <div className="login-orb-2"></div>
        <div className="login-orb-3"></div>
      </div>

      {/* Content */}
      <div className="login-content">
        {/* Header */}
        <header className="login-header">
          <div className="max-w-7xl mx-auto flex items-center gap-3">
            <div className="p-2 bg-gradient-to-br from-indigo-600 to-blue-600 rounded-lg">
              <Globe className="w-8 h-8 text-white" />
            </div>
            <div>
              <h1 className="text-white">Achievement Atlas</h1>
              <p className="text-indigo-200 text-sm">The University Administrative Quest</p>
            </div>
          </div>
        </header>

        {/* Main Content */}
        <main className="login-main">
          <div className="max-w-6xl w-full grid lg:grid-cols-2 gap-8 items-center">
            {/* Left side - Hero content */}
            <div className="text-white space-y-6">
              <div className="space-y-4">
                <div className="login-badge">
                  <MapPin className="w-4 h-4 text-blue-300" />
                  <span className="text-sm text-blue-200">Global Conquest Strategy Game</span>
                </div>
                
                <h2 className="text-5xl leading-tight bg-gradient-to-r from-white via-blue-200 to-indigo-200 bg-clip-text text-transparent">
                  Conquer the World Through Teamwork
                </h2>
                
                <p className="text-lg text-indigo-100 leading-relaxed">
                  Join your guild, complete administrative challenges, and strategically invest points 
                  to dominate countries on the interactive world map. The team that controls the most 
                  territories wins the Achievement Atlas.
                </p>
              </div>

              {/* Feature highlights */}
              <div className="login-feature-grid pt-4">
                {[
                  { icon: Trophy, title: 'Compete', desc: 'Battle against other departments' },
                  { icon: Target, title: 'Strategize', desc: 'Invest points wisely to conquer' },
                  { icon: Users, title: 'Collaborate', desc: 'Work together with your guild' },
                  { icon: Globe, title: 'Dominate', desc: 'Control the global map' },
                ].map((feature, index) => (
                  <div key={index} className="login-feature-item">
                    <div className="login-feature-icon">
                      <feature.icon className="w-5 h-5 text-blue-300" />
                    </div>
                    <div>
                      <h4 className="text-white">{feature.title}</h4>
                      <p className="text-sm text-indigo-200">{feature.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right side - Login card */}
            <Card className="shadow-2xl border-slate-700/50 bg-white/95 backdrop-blur-sm">
              <CardHeader>
                <CardTitle>Welcome Back</CardTitle>
                <CardDescription>
                  Login to join the quest or try a demo account
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Tabs defaultValue="demo" className="w-full">
                  <TabsList className="grid w-full grid-cols-2">
                    <TabsTrigger value="demo">Demo</TabsTrigger>
                    <TabsTrigger value="login">Login</TabsTrigger>
                  </TabsList>

                  <TabsContent value="demo" className="space-y-4">
                    <div className="space-y-4">
                      <div className="space-y-2">
                        <Label htmlFor="guild">Select Guild</Label>
                        <Select value={selectedGuild} onValueChange={setSelectedGuild}>
                          <SelectTrigger id="guild">
                            <SelectValue placeholder="Choose your department..." />
                          </SelectTrigger>
                          <SelectContent>
                            {DEMO_GUILDS.map((guild) => (
                              <SelectItem key={guild.id} value={guild.id}>
                                <div className="flex items-center gap-2">
                                  <div 
                                    className="w-3 h-3 rounded-full" 
                                    style={{ backgroundColor: guild.color }}
                                  />
                                  {guild.name}
                                </div>
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="user">Select Demo User</Label>
                        <Select 
                          value={selectedUser} 
                          onValueChange={setSelectedUser}
                          disabled={!selectedGuild}
                        >
                          <SelectTrigger id="user">
                            <SelectValue placeholder={
                              selectedGuild ? "Choose a user..." : "Select a guild first..."
                            } />
                          </SelectTrigger>
                          <SelectContent>
                            {filteredUsers.map((user) => (
                              <SelectItem key={user.id} value={user.id.toString()}>
                                {user.name}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>

                      {/* Guild preview */}
                      {selectedGuild && (
                        <div className="p-4 rounded-lg bg-gradient-to-r from-slate-50 to-blue-50 border border-slate-200">
                          {(() => {
                            const guild = DEMO_GUILDS.find(g => g.id === selectedGuild);
                            if (!guild) return null;
                            const Icon = guild.icon;
                            return (
                              <div className="flex items-center gap-3">
                                <div 
                                  className="p-3 rounded-lg"
                                  style={{ backgroundColor: guild.color + '20' }}
                                >
                                  <Icon className="w-6 h-6" style={{ color: guild.color }} />
                                </div>
                                <div>
                                  <p className="text-sm text-muted-foreground">Joining</p>
                                  <p style={{ color: guild.color }}>{guild.name}</p>
                                </div>
                              </div>
                            );
                          })()}
                        </div>
                      )}

                      <Button 
                        onClick={handleDemoLogin}
                        disabled={!ready || !selectedUser}
                        className="w-full bg-gradient-to-r from-indigo-600 to-blue-600 hover:from-indigo-500 hover:to-blue-500"
                      >
                        Start Demo Quest
                      </Button>
                    </div>
                  </TabsContent>

                  <TabsContent value="login" className="space-y-4">
                    <form onSubmit={handleRealLogin} className="space-y-4">
                      <div className="space-y-2">
                        <Label htmlFor="email">Email</Label>
                        <Input 
                          id="email" 
                          type="email" 
                          placeholder="your.email@university.edu"
                          required
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="password">Password</Label>
                        <Input 
                          id="password" 
                          type="password" 
                          placeholder="••••••••"
                          required
                        />
                      </div>

                      <div className="flex items-center justify-between text-sm">
                        <a href="#" className="text-blue-600 hover:underline">
                          Forgot password?
                        </a>
                      </div>

                      <Button 
                        type="submit"
                        className="w-full bg-gradient-to-r from-indigo-600 to-blue-600 hover:from-indigo-500 hover:to-blue-500"
                      >
                        Login to Atlas
                      </Button>

                      <div className="text-center text-sm text-muted-foreground">
                        Don't have an account?{' '}
                        <a href="#" className="text-blue-600 hover:underline">
                          Contact your administrator
                        </a>
                      </div>
                    </form>
                  </TabsContent>
                </Tabs>
              </CardContent>
            </Card>
          </div>
        </main>

        {/* Footer */}
        <footer className="login-footer">
          <p>© 2025 Achievement Atlas • Gamifying University Administration</p>
        </footer>
      </div>
    </div>
  );
}
