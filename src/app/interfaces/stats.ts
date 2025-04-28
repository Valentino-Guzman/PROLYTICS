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

export interface OtpStats {
    championName: string;
    totalGames: number;
    totalWins: number;
    winRate: number;
    totalKills: number;
    totalDeaths: number;
    totalAssists: number;
    KDA: number;
    summonerName: string;
}