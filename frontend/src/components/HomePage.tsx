import { Globe, Trophy, Target, Users, Zap, Map, ChevronRight, Award, TrendingUp } from 'lucide-react';
import { Button } from './ui/button';
import { Card } from './ui/card';
import { Badge } from './ui/badge';
import '../styles/home.css';

export default function HomePage() {
  return (
    <div className="home-page">

      {/* Hero Section */}
      <section className="home-hero">
        
        {/* Animated gradient orbs */}
        <div className="home-orb-1" />
        <div className="home-orb-2" />
        
        {/* Main Content - Centered */}
        <div className="home-content">
          <div className="space-y-12">
            {/* Epic Title */}
            <div className="space-y-6">
              <h1 className="text-4xl md:text-6xl text-white leading-tight tracking-tight">
                <span className="block">Conquer the <span className="bg-gradient-to-r from-slate-300 via-slate-200 to-slate-100 bg-clip-text text-transparent">World</span></span>
                <span className="block mt-2">Through Teamwork</span>
              </h1>
              
              <p className="text-lg md:text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
                Transform administrative tasks into epic conquests.{' '}
                <span className="text-white">Complete missions, earn points, claim territories.</span>
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <Button 
                size="lg"
                className="bg-slate-100 text-slate-900 hover:bg-white shadow-xl border-2 border-slate-200/50 group text-lg px-10 py-7"
              >
                <Zap className="w-5 h-5 mr-2" />
                Start Your Conquest
                <ChevronRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button 
                size="lg"
                variant="outline"
                className="border-2 border-white/40 bg-white/5 text-white hover:bg-white/20 hover:border-white/60 backdrop-blur-sm text-lg px-10 py-7 transition-all"
              >
                <Globe className="w-5 h-5 mr-2" />
                Explore the Atlas
              </Button>
            </div>

            {/* Live Stats Bar */}
            <div className="pt-12 grid grid-cols-3 gap-8 max-w-3xl mx-auto">
              <div className="group">
                <div className="text-5xl md:text-6xl text-white">195</div>
                <div className="text-slate-400 mt-2">Countries</div>
              </div>
              <div className="group">
                <div className="text-5xl md:text-6xl text-white">4</div>
                <div className="text-slate-400 mt-2">Guilds</div>
              </div>
              <div className="group">
                <div className="text-5xl md:text-6xl text-white">∞</div>
                <div className="text-slate-400 mt-2">Glory</div>
              </div>
            </div>

            {/* Subtext */}
            <div className="flex flex-wrap items-center justify-center gap-6 text-slate-400 text-sm pt-8">
              <div className="flex items-center gap-2">
                <div className="home-stats-indicator" />
                Real-time leaderboards
              </div>
              <div className="flex items-center gap-2">
                <div className="home-stats-indicator" />
                Live map updates
              </div>
              <div className="flex items-center gap-2">
                <div className="home-stats-indicator" />
                Competitive gameplay
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center space-y-3 mb-12">
            <h3 className="text-white drop-shadow-lg">
              How It Works
            </h3>
            <p className="text-slate-300 max-w-2xl mx-auto">
              Four simple steps to start your conquest
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {/* Step 1 */}
            <div className="home-feature-card">
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-slate-500/20 rounded-lg flex items-center justify-center border border-slate-400/30">
                    <Users className="w-4 h-4 text-slate-200" />
                  </div>
                  <span className="text-xs text-slate-300">Step 1</span>
                </div>
                <div className="space-y-2">
                  <h4 className="text-white">Join Your Guild</h4>
                  <p className="text-sm text-slate-300">
                    Align with your department and start earning for your team.
                  </p>
                </div>
              </div>
            </div>

            {/* Step 2 */}
            <div className="home-feature-card">
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-slate-500/20 rounded-lg flex items-center justify-center border border-slate-400/30">
                    <Target className="w-4 h-4 text-slate-200" />
                  </div>
                  <span className="text-xs text-slate-300">Step 2</span>
                </div>
                <div className="space-y-2">
                  <h4 className="text-white">Complete Tasks</h4>
                  <p className="text-sm text-slate-300">
                    Tackle administrative tasks and earn points for your guild.
                  </p>
                </div>
              </div>
            </div>

            {/* Step 3 */}
            <div className="home-feature-card">
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-slate-500/20 rounded-lg flex items-center justify-center border border-slate-400/30">
                    <Map className="w-4 h-4 text-slate-200" />
                  </div>
                  <span className="text-xs text-slate-300">Step 3</span>
                </div>
                <div className="space-y-2">
                  <h4 className="text-white">Invest Points</h4>
                  <p className="text-sm text-slate-300">
                    Strategically invest points to claim countries on the map.
                  </p>
                </div>
              </div>
            </div>

            {/* Step 4 */}
            <div className="home-feature-card">
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-slate-500/20 rounded-lg flex items-center justify-center border border-slate-400/30">
                    <Trophy className="w-4 h-4 text-slate-200" />
                  </div>
                  <span className="text-xs text-slate-300">Step 4</span>
                </div>
                <div className="space-y-2">
                  <h4 className="text-white">Dominate</h4>
                  <p className="text-sm text-slate-300">
                    Compete for the top spot and earn ultimate bragging rights.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats & Impact Section */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center space-y-3 mb-12">
            <h3 className="text-white drop-shadow-lg">
              Built for University Administration
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <div className="home-feature-card">
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-slate-500/20 rounded-lg flex items-center justify-center border border-slate-400/30">
                    <Globe className="w-4 h-4 text-slate-200" />
                  </div>
                  <span className="text-2xl text-slate-200">195</span>
                </div>
                <div>
                  <p className="text-sm text-slate-300">
                    Countries to conquer across the world map
                  </p>
                </div>
              </div>
            </div>

            <div className="home-feature-card">
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-slate-500/20 rounded-lg flex items-center justify-center border border-slate-400/30">
                    <Users className="w-4 h-4 text-slate-200" />
                  </div>
                  <span className="text-2xl text-slate-200">4</span>
                </div>
                <div>
                  <p className="text-sm text-slate-300">
                    Department guilds competing for dominance
                  </p>
                </div>
              </div>
            </div>

            <div className="home-feature-card">
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-slate-500/20 rounded-lg flex items-center justify-center border border-slate-400/30">
                    <Zap className="w-4 h-4 text-slate-200" />
                  </div>
                  <span className="text-sm text-slate-200">Real-time</span>
                </div>
                <div>
                  <p className="text-sm text-slate-300">
                    Live map updates as territories change hands
                  </p>
                </div>
              </div>
            </div>

            <div className="home-feature-card">
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-slate-500/20 rounded-lg flex items-center justify-center border border-slate-400/30">
                    <Target className="w-4 h-4 text-slate-200" />
                  </div>
                  <span className="text-sm text-slate-200">Point-based</span>
                </div>
                <div>
                  <p className="text-sm text-slate-300">
                    Strategic territory control through point investment
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 border-y border-white/10">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="flex-1 space-y-4">
              <h3 className="text-white">
                Ready to Conquer the World?
              </h3>
              <p className="text-slate-300 max-w-xl">
                Start completing tasks, earning points, and claiming countries with your guild today.
              </p>
            </div>
            <div className="flex-shrink-0">
              <Button 
                size="lg"
                className="bg-white text-slate-900 hover:bg-slate-50 shadow-xl group text-lg px-8 py-6"
              >
                Begin Your Journey
                <ChevronRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="home-footer">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-slate-700 rounded-lg">
                <Globe className="w-5 h-5 text-white" />
              </div>
              <div>
                <div className="text-white">Achievement Atlas</div>
                <p className="text-xs text-slate-500">© 2025 All rights reserved</p>
              </div>
            </div>
            <div className="flex gap-6 text-sm">
              <button className="hover:text-white transition-colors">About</button>
              <button className="hover:text-white transition-colors">Privacy</button>
              <button className="hover:text-white transition-colors">Terms</button>
              <button className="hover:text-white transition-colors">Contact</button>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
