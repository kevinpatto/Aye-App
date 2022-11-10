import {Component, OnInit} from '@angular/core';
import {Observable, of} from "rxjs";
import {Poop} from "../models/poop";
import {HttpClient} from "@angular/common/http";
import {PoopService} from "../services/poop.service";

@Component({
  selector: 'app-leaderboards',
  templateUrl: './leaderboards.component.html',
  styleUrls: ['./leaderboards.component.scss']
})
export class LeaderboardsComponent implements OnInit {
  public listOfPoops$: Observable<any> = new Observable<any>();
  total = 'test';
  jonahCount = 0;

  constructor(
    private http: HttpClient,
    private poopService: PoopService,
  ) {
  }

  ngOnInit(): void {
    this.poopService.getPoops().subscribe();
    this.poopService.poopListObs$.subscribe(
      res => {
        if (res) {
          for (var i of res) {
            if (i.name.toUpperCase() === "JONAH")
              this.jonahCount += 1;
          }
        }
      }
    )

  }


}
