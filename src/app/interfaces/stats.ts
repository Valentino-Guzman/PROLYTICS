export interface ChampionStats {
    championId: number;
    championName: string;
    mainRole: string;
    pick_count: number;     
    win_count: number;          
    winrate: number;          
    pickrate: number;       
    banrate: number;         
    performanceScore: number; 
    tier: 'S+' | 'S' | 'A' | 'B' | 'C';
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