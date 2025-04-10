import { Component, Input, OnInit } from '@angular/core';
import { Participant } from '../../../../interfaces/player-stats';
import { MatchService } from '../../../../services/match.service';
import { SharedDataService } from '../../../../services/shared-data.service';
import { CommonModule, NgIf } from '@angular/common';
import { HistorialPlayerItemComponent } from "../historial-player-item/historial-player-item.component";

@Component({
  selector: 'app-historial-player',
  imports: [CommonModule, HistorialPlayerItemComponent],
  templateUrl: './historial-player.component.html',
  styleUrl: './historial-player.component.css'
})
export class HistorialPlayerComponent implements OnInit {

  @Input() userId: string = '';

  player: Participant[] = [];
  playerPuuid: string = '';
  playersByMatch: Participant[][] = [];

  gameType: string = '';

  private queueTypes: { [key: number]: string } = {
    420: 'Clasificatoria Solo/dúo',
    440: 'Clasificatoria Flexible',
    700: 'Clash',
    400: 'Normal Draft',
    430: 'Normal Blind',
    450: 'ARAM',
    490: 'Twisted Treeline (obsoleto)',
  };

  constructor(
    private matchService: MatchService,
    private sharedData: SharedDataService
  ) {}

  ngOnInit() {
    this.getPlayerInfo();
  }

  getPlayerInfo() {
    this.sharedData.accountData$.subscribe(data => {
      this.playerPuuid = data.puuid;
    });

    this.matchService.getMatchId().subscribe(data => {
      this.player = [];
      this.playersByMatch = [];

      data.forEach((match) => {
        let currentIndex = this.player.length;
        const formattedDate = new Date(match.info.gameEndTimestamp).toLocaleDateString("es-ES", {
          day: "2-digit",
          month: "short"
        }).replace(".", "");

        match.info.participants.forEach((participant) => {
          if (participant.puuid === this.playerPuuid) {
            const queueId = match.info.queueId;
            this.gameType = this.getGameType(queueId);

            this.player.push({
              ...participant,
              gameDuration: match.info.gameDuration,
              items: [
                participant.item0,
                participant.item1,
                participant.item2,
                participant.item3,
                participant.item4,
                participant.item5,
                participant.item6
              ].map(item => String(item)),
              gameDateFin: formattedDate
            });

            this.sharedData.setChampionName(this.player);
          }

          if (!this.playersByMatch[currentIndex]) {
            this.playersByMatch[currentIndex] = [];
          }
          this.playersByMatch[currentIndex].push({ ...participant });
          console.log(this.playersByMatch)
        });
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

  isSameDate(currentDate: string | undefined, index: number): boolean {
    if (index === 0) return false;
    return this.player[index - 1]?.gameDateFin === currentDate;
  }

  getAllies(index: number, teamId: number): Participant[] {
    return this.playersByMatch[index]?.filter(p => p.teamId === teamId) || [];
  }

  getEnemies(index: number, teamId: number): Participant[] {
    return this.playersByMatch[index]?.filter(p => p.teamId !== teamId) || [];
  }
}