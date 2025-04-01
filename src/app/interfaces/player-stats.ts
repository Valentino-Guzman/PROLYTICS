export interface Participant {
    assists: number;
    deaths: number;
    kills: number;
    neutralMinionsKilled: number;
    totalMinionsKilled: number;
    puuid: string;
    championId: number;
    championName: string;
    win: string;
    gameDuration: number;
}
  
  
export interface Info {
    participants: Participant[];
    gameMode: string;
    queueId: number;
    gameDuration: number;
}

export interface ListMatches {
    list:[];
}

export interface DataMatch {
    info: Info;
}