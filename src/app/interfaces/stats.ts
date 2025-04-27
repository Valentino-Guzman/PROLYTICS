export interface ChampionStats {
    championName: string;
    games: number;
    wins: number;
    winrate: number;
    role: string;
}

export interface BanStats {
    championName: string;
    banCount: number;
    banrate: number;
}