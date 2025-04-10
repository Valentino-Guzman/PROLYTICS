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
    riotIdGameName: string;
    totalDamageTaken: string;
    totalDamageDealtToChampions: string;
    champLevel: number;
    summoner1Id: number;
    summoner2Id: number;
    teamId: number;
    item0: number;
    item1: number;
    item2: number;
    item3: number;
    item4: number;
    item5: number;
    item6: number;
    items: string[];
    gameDateFin: string;
    perks: {
        statPerks: StatPerks;
        styles: Styles[];
    }
}
  
export interface StatPerks {
    defense: number;
    flex: number;
    offense: number;
}

export interface Styles {
    description: string; 
    selections: [
        { perk: number, var1: number, var2: number, var3: number },
    ]
    style: number;
}

export interface Info {
    participants: Participant[];
    gameMode: string;
    queueId: number;
    gameDuration: number;
    gameEndTimestamp: number;
}

export interface DataMatch {
    info: Info;
}