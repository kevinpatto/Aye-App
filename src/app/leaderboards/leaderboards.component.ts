import {Component, OnInit} from '@angular/core';
import {map, Observable, of, pipe} from "rxjs";
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
  public dataMap?: Map<string, number>;

  constructor(
    private http: HttpClient,
    private poopService: PoopService,
  ) {
    this.dataMap = new Map<string, number>();
  }

  ngOnInit(): void {
    this.poopService.getPoops().subscribe();
    this.poopService.poopListObs$.pipe(
      map((x) => {
        if (x) {
          x.forEach((y: Poop) => {
            if (!this.dataMap?.has(y.name.toUpperCase())) {
              this.dataMap?.set(y.name.toUpperCase(), 1)
            } else {
              // @ts-ignore
              this.dataMap?.set(y.name.toUpperCase(), this.dataMap?.get(y.name) + 1);
            }
          })
          // console.log(this.dataMap.);
        }
      }))
      .subscribe()
  }


}
