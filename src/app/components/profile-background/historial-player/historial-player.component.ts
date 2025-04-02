import { Component, OnInit } from '@angular/core';
import { Participant } from '../../../interfaces/player-stats';
import { MatchService } from '../../../services/match.service';
import { SharedDataService } from '../../../services/shared-data.service';
import { CommonModule, NgIf } from '@angular/common';

@Component({
  selector: 'app-historial-player',
  imports: [CommonModule, NgIf],
  templateUrl: './historial-player.component.html',
  styleUrl: './historial-player.component.css'
})
export class HistorialPlayerComponent implements OnInit {

  playerPuuid: string = '';
  player: Participant[] = [];
  assists: number = 0;
  deaths: number = 0;
  kills: number = 0;
  neutralMinionsKilled: number = 0;
  totalMinionsKilled: number = 0;
  puuid: string = '';
  championId: number = 0;
  championNames: string[] = [];
  wins: string[] = [];
  gameMode: string = '';
  queueId: number = 0;
  gameType: string = '';
  gameDuration: number = 0;

  items: string[] = [];

  private queueTypes: { [key: number]: string } = {
    420: 'Clasificatoria Solo/dúo',
    440: 'Ranked Flex',
    700: 'Clash',
    400: 'Normal Draft',
    430: 'Normal Blind',
    450: 'ARAM',
    490: 'Twisted Treeline (obsoleto)',
  };

  constructor(
    private matchService: MatchService,
    private sharedData: SharedDataService,
  ) {}

  ngOnInit() {
    this.sharedData.accountData$.subscribe(data => {
      this.playerPuuid = data.puuid;
    });
  
    this.matchService.getMatchId().subscribe(data => {
      this.player = [];
      this.championNames = [];
      this.items = [];

      data.forEach((match) => {
        match.info.participants.forEach((participant) => {
          if (participant.puuid === this.playerPuuid) {
            this.gameMode = match.info.gameMode;
            this.queueId = match.info.queueId;
            this.gameType = this.getGameType(this.queueId);
            this.player.push({
              assists: participant.assists,
              deaths: participant.deaths,
              kills: participant.kills,
              neutralMinionsKilled: participant.neutralMinionsKilled,
              totalMinionsKilled: participant.totalMinionsKilled,
              puuid: participant.puuid,
              championId: participant.championId,
              championName: participant.championName,
              win: participant.win,
              gameDuration: match.info.gameDuration,
              items: [
                participant.item0,
                participant.item1,
                participant.item2,
                participant.item3,
                participant.item4,
                participant.item5,
                participant.item6
              ].map(item => String(item))
            });
            console.log(participant)
            this.championNames.push(participant.championName);
            
          }
        });
        console.log(this.items)
      });
    });
  }
  
  getGameType(queueId: number): string {
    return this.queueTypes[queueId] || 'Modo Desconocido';
  }

  convertGameDuration(seconds: number): string {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}:${remainingSeconds.toString().padStart(2, '0')} min`;
  }

  getAllCs(minionsJg: number, minions: number): number {
    const allCs = Math.floor(minionsJg + minions);
    return allCs;
  }
}
