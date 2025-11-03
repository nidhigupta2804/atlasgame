const STORAGE_KEY = 'atlasgame:v1';

export type DbShape = {
  version: number;
  guilds: Array<{ id: string; name: string; color: string; totalPoints: number }>;
  users: Array<{ id: number; name: string; guildId: string; totalPoints: number }>;
  tasks: Array<{ id: number; title: string; points: number; category: string; repeatable: boolean }>;
  countries: Array<{ id: string; name: string; ownerGuildId: string | null; investments: Record<string, number> }>;
};

let dbCache: DbShape | null = null;
let initialized = false;

export async function initDb(): Promise<DbShape> {
  if (initialized && dbCache) return dbCache;

  // Try existing
  const raw = localStorage.getItem(STORAGE_KEY);
  if (raw) {
    dbCache = JSON.parse(raw);
    initialized = true;
    return dbCache as DbShape;
  }

  // Seed from public/db.json
  const res = await fetch('/db.json');
  if (!res.ok) throw new Error('Failed to load db.json');
  const seed: DbShape = await res.json();
  dbCache = seed;
  localStorage.setItem(STORAGE_KEY, JSON.stringify(seed));
  initialized = true;
  return seed;
}

export function getDb(): DbShape {
  if (!initialized || !dbCache) {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (raw) dbCache = JSON.parse(raw);
  }
  if (!dbCache) throw new Error('DB not initialized. Call initDb() first.');
  return dbCache;
}

export function setDb(next: DbShape): void {
  dbCache = next;
  localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
}

export function updateDb(mutator: (draft: DbShape) => void): DbShape {
  const current = getDb();
  const draft: DbShape = JSON.parse(JSON.stringify(current));
  mutator(draft);
  setDb(draft);
  return draft;
}

export function resetDb(): void {
  localStorage.removeItem(STORAGE_KEY);
  dbCache = null;
  initialized = false;
}


