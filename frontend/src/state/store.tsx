import { createContext, useContext, useEffect, useMemo, useState } from 'react';
import { initDb, getDb, setDb } from '../lib/localDb';
import type { DbState, RootState } from './types';
import { calculateOwner } from './types';

type Store = {
  state: RootState;
  ready: boolean;
  login: (userId: number) => void;
  logout: () => void;
  completeTask: (taskId: number) => void;
  investPoints: (countryId: string, amount: number) => void;
};

const StoreContext = createContext<Store | null>(null);

export function StoreProvider({ children }: { children: React.ReactNode }) {
  const [ready, setReady] = useState(false);
  const [state, setState] = useState<RootState>({
    version: 1,
    guilds: [],
    users: [],
    tasks: [],
    countries: [],
    currentUserId: null,
  });

  useEffect(() => {
    (async () => {
      await initDb();
      const saved = getDb();
      const savedUserIdRaw = localStorage.getItem('atlasgame:currentUserId');
      const savedUserId = savedUserIdRaw ? parseInt(savedUserIdRaw, 10) : null;
      const root: RootState = { ...saved, currentUserId: savedUserId } as RootState;
      setState(root);
      setReady(true);
    })();
  }, []);

  const sync = (next: RootState) => {
    setState(next);
    const persist: DbState = {
      version: next.version,
      guilds: next.guilds,
      users: next.users,
      tasks: next.tasks,
      countries: next.countries,
    };
    setDb(persist);
  };

  const login = (userId: number) => {
    const user = state.users.find(u => u.id === userId);
    if (!user) return;
    localStorage.setItem('atlasgame:currentUserId', String(userId));
    sync({ ...state, currentUserId: userId });
  };

  const logout = () => {
    localStorage.removeItem('atlasgame:currentUserId');
    sync({ ...state, currentUserId: null });
  };

  const completeTask = (taskId: number) => {
    if (state.currentUserId == null) return;
    const task = state.tasks.find(t => t.id === taskId);
    if (!task) return;
    const user = state.users.find(u => u.id === state.currentUserId)!;
    const guild = state.guilds.find(g => g.id === user.guildId)!;

    const next = structuredClone(state);
    const nu = next.users.find(u => u.id === user.id)!;
    nu.totalPoints += task.points;
    const ng = next.guilds.find(g => g.id === guild.id)!;
    ng.totalPoints += task.points;
    sync(next);
  };

  const investPoints = (countryId: string, amount: number) => {
    if (state.currentUserId == null || amount <= 0) return;
    const user = state.users.find(u => u.id === state.currentUserId)!;
    const guild = state.guilds.find(g => g.id === user.guildId)!;
    if (user.totalPoints < amount) return;

    const next = structuredClone(state);
    const nu = next.users.find(u => u.id === user.id)!;
    nu.totalPoints -= amount;

    const country = next.countries.find(c => c.id === countryId)!;
    country.investments[guild.id] = (country.investments[guild.id] || 0) + amount;
    const newOwner = calculateOwner(country.investments, country.ownerGuildId);
    country.ownerGuildId = newOwner;

    sync(next);
  };

  const value: Store = useMemo(
    () => ({ state, ready, login, logout, completeTask, investPoints }),
    [state, ready]
  );

  return <StoreContext.Provider value={value}>{children}</StoreContext.Provider>;
}

export function useStore(): Store {
  const ctx = useContext(StoreContext);
  if (!ctx) throw new Error('Store not available');
  return ctx;
}

export function useSelectors() {
  const { state } = useStore();
  const currentUser = state.currentUserId
    ? state.users.find(u => u.id === state.currentUserId) || null
    : null;
  const currentGuild = currentUser
    ? state.guilds.find(g => g.id === currentUser.guildId) || null
    : null;
  const countriesOwnedByGuild = (guildId: string) =>
    state.countries.filter(c => c.ownerGuildId === guildId);
  const guildLeaderboard = state.guilds
    .map(g => ({
      guild: g,
      countries: countriesOwnedByGuild(g.id).length,
      points: g.totalPoints,
    }))
    .sort((a, b) =>
      b.countries === a.countries
        ? b.points - a.points
        : b.countries - a.countries
    );

  return { state, currentUser, currentGuild, guildLeaderboard, countriesOwnedByGuild };
}


