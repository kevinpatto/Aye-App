import {Component, OnInit} from '@angular/core';
import {map, Observable, of, pipe} from "rxjs";
import {Poop} from "../models/poop";
import {HttpClient} from "@angular/common/http";
import {PoopService} from "../services/poop.service";
import {AyeScore} from "../interfaces/aye-score";

@Component({
  selector: 'app-leaderboards',
  templateUrl: './leaderboards.component.html',
  styleUrls: ['./leaderboards.component.scss']
})
export class LeaderboardsComponent implements OnInit {
  public listOfPoops$: Observable<any> = new Observable<any>();
  public dataMap: Map<string, AyeScore>;

  constructor(
    private http: HttpClient,
    private poopService: PoopService,
  ) {
    this.dataMap = new Map<string, AyeScore>();
  }

  ngOnInit(): void {
    this.poopService.getPoops().subscribe();
    this.poopService.poopListObs$.pipe(
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
            var ayePoints = 0;
            var descripValue = y.description.length;
            if (descripValue) {
              if (descripValue > 300) {
                descripValue = 300;
              }
            }
            var addr = y.fullAddr;
            var addrValue = 0;
            if (addrValue) {
              if (addr) {
                addrValue = 100;
              }
              if (addr && addr !== "Illinois") {
                addrValue = 250;
              }
            }
            var commentVal = (y.comments.length * 50);
            if (commentVal) {
              if (commentVal > 250) {
                commentVal = 250;
              }
            }
            var fixedLikes = y.likes;
            var likeVal = 0;
            if (fixedLikes) {
              if (fixedLikes === 0) {
                fixedLikes = 1;
              }
              likeVal = (fixedLikes * 10);
              if (likeVal > 500) {
                likeVal = 500
              }
            }
            var fixedDislikes = y.dislikes;
            var dislikeVal = 0;
            if (fixedDislikes) {
              if (fixedDislikes === 0) {
                fixedDislikes = 1
              }
              dislikeVal = (fixedDislikes * 8);
              if (dislikeVal > 300) {
                dislikeVal = 300
              }
            }
            ayePoints += descripValue + addrValue + commentVal + likeVal - dislikeVal;
            if (ayePoints > 1300) {ayePoints = 1300}
            if (!this.dataMap.has(y.name.toUpperCase())) {
              this.dataMap.set(y.name.toUpperCase(), {
                cities: [],
                states: [],
                uniqCities: 0,
                uniqStates: 0,
                ayeScore: ayePoints,
              });
            } else {
              var ayeMap = this.dataMap.get(y.name.toUpperCase());
              if (ayeMap) {
                ayeMap.ayeScore += ayePoints;
                this.dataMap.set(y.name.toUpperCase(), ayeMap!);
              }
            }
          })
        }
      })).subscribe()
  }


}
