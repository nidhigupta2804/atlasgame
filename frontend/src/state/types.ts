export interface Guild {
  id: string;
  name: string;
  color: string;
  totalPoints: number;
}

export interface User {
  id: number;
  name: string;
  guildId: string;
  totalPoints: number;
}

export interface TaskItem {
  id: number;
  title: string;
  points: number;
  category: string;
  repeatable: boolean;
}

export interface Country {
  id: string;
  name: string;
  ownerGuildId: string | null;
  investments: Record<string, number>;
}

export interface DbState {
  version: number;
  guilds: Guild[];
  users: User[];
  tasks: TaskItem[];
  countries: Country[];
}

export interface RootState extends DbState {
  currentUserId: number | null;
}

export function calculateOwner(
  investments: Record<string, number>,
  previousOwner?: string | null
): string | null {
  const entries = Object.entries(investments);
  if (entries.length === 0) return previousOwner ?? null;
  const max = Math.max(...entries.map(([, v]) => v));
  const top = entries.filter(([, v]) => v === max).map(([k]) => k);
  return top.length === 1 ? top[0] : previousOwner ?? top[0] ?? null;
}


