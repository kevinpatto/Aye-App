import { Component, OnInit } from '@angular/core';
import { map, Observable, of, pipe } from 'rxjs';
import { Poop } from '../models/poop';
import { HttpClient } from '@angular/common/http';
import { PoopService } from '../services/poop.service';
import { AyeScore } from '../interfaces/aye-score';

@Component({
  selector: 'app-leaderboards',
  templateUrl: './leaderboards.component.html',
  styleUrls: ['./leaderboards.component.scss'],
})
export class LeaderboardsComponent implements OnInit {
  public listOfPoops$: Observable<any> = new Observable<any>();
  public dataMap: Map<string, AyeScore>;
  public sortedMap: [string, AyeScore][];

  constructor(private http: HttpClient, private poopService: PoopService) {
    this.dataMap = new Map<string, AyeScore>();
    this.sortedMap = [];
  }

  ngOnInit(): void {
    this.poopService.poopListObs$
      .pipe(
        map((x) => {
          if (x) {
            x.forEach((y: Poop) => {
              // Algorithm
              // pts per char of description is 1pt, max 300.
              // pts per giving addr is 100 if give, 250 if not in illinois, 0 if not.
              // pts per comment = 50, max for comments is 250.
              // pts per likes is 10, max for likes is 500
              // pts per dislike is -8, max for dislikes is 300
              // max score is 1300 and with full dislikes it is 1000.
              //
              let ayePoints = 0;
              let descripValue = y.description.length;
              if (descripValue) {
                if (descripValue > 300) {
                  descripValue = 300;
                }
              }
              let addr = y.fullAddr;
              let addrValue = 0;
              if (addrValue) {
                if (addr) {
                  addrValue = 100;
                }
                if (addr && addr !== 'Illinois') {
                  addrValue = 250;
                }
              }
              let commentVal = y.comments.length * 50;
              if (commentVal) {
                if (commentVal > 250) {
                  commentVal = 250;
                }
              }
              let fixedLikes = y.likes;
              let likeVal = 0;
              if (fixedLikes) {
                if (fixedLikes === 0) {
                  fixedLikes = 1;
                }
                likeVal = fixedLikes * 10;
                if (likeVal > 500) {
                  likeVal = 500;
                }
              }
              let fixedDislikes = y.dislikes;
              let dislikeVal = 0;
              if (fixedDislikes) {
                if (fixedDislikes === 0) {
                  fixedDislikes = 1;
                }
                dislikeVal = fixedDislikes * 8;
                if (dislikeVal > 300) {
                  dislikeVal = 300;
                }
              }
              ayePoints +=
                descripValue + addrValue + commentVal + likeVal - dislikeVal;
              if (ayePoints > 1300) {
                ayePoints = 1300;
              }

              if (!this.dataMap.has(y.name.toUpperCase())) {
                // TODO FIGURE OUT HOW TO NOT ADD UNDEFINED TO ARRAY.
                this.dataMap.set(y.name.toUpperCase(), {
                  cities: [],
                  states: [],
                  uniqCities: 0,
                  uniqStates: 0,
                  ayeScore: ayePoints,
                });
              } else {
                let ayeMap = this.dataMap.get(y.name.toUpperCase());
                if (ayeMap) {
                  ayeMap.ayeScore += ayePoints;
                  if (y.city && !ayeMap.cities.includes(y.city)) {
                    ayeMap.cities.push(y.city);
                  }
                  if (y.longState && !ayeMap.states.includes(y.longState)) {
                    // if (y.name.toUpperCase() === "KEVIN") {
                    //   console.log(ayeMap.states);
                    // }
                    ayeMap.states.push(y.longState);
                  }
                  this.dataMap.set(y.name.toUpperCase(), ayeMap!);
                }
              }
            });
            this.sortedMap = [...this.dataMap.entries()].sort(
              (a: any, b: any) => b[1].ayeScore - a[1].ayeScore
            );
          } else {
            this.poopService.getPoops().subscribe();
          }
        })
      )
      .subscribe();
  }

  getBorder(n: number) {
    if (n === 0) {
      return 'golden';
    }
    if (n === 1) {
      return 'silver';
    }
    if (n === 2) {
      return 'bronze';
    }
    return 'camper';
  }
}
