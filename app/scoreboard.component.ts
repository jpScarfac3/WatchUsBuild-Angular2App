import { Component } from '@angular/core';
import { Race } from './race';
import { RaceService } from './race.service';
import { ScoreboardItemComponent } from './scoreboardItem.component';

@Component({
  selector: "scoreboard",
  template: `
    <header class="container">
    <h1>Scoreboard</h1>
    <h3>Race Notifications</h3>
    <ul>
      <li *ngFor="let notification of notifications">{{notification}}</li>
    </ul>
    </header>

    <div class="container-fluid scoreboard-display">
      <div class="row">
        <div class="col-xs-4" *ngFor="let race of races">
          <scoreboard-item [race]="race" (notification)="notifications.unshift($event)"></scoreboard-item>
        </div>
      </div>
    </div>
  `,
  directives: [ScoreboardItemComponent],
  providers: [RaceService]
})

export class ScoreboardComponent {

  races: Race[];
  notifications: string[] = [];

  constructor(private raceService: RaceService) { }

  ngOnInit() {
    this.raceService.getRaces()
        .subscribe(data => this.races = data);
  }
};
