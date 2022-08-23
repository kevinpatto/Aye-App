import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Poop} from "../models/poop";
import {Observable} from "rxjs";
import {PoopService} from "../services/poop.service";

@Component({
  selector: 'app-poop-diaries',
  templateUrl: './poop-diaries.component.html',
  styleUrls: ['./poop-diaries.component.scss']
})
export class PoopDiariesComponent implements OnInit {

  public likeCount = 0;
  public dislikeCount = 0;
  // public obs: Observable<Poop> | undefined;
  // public observablePoops; TODO GET OBSERVABLEs working
  public poops$!: Observable  <Poop[]>;

  isActive = false;

  toggleActivateState() {
    this.isActive = !this.isActive;
  }

  constructor(
    private http: HttpClient,
    private poopService: PoopService
  ) { }

  ngOnInit(): void {
    this.poops$= this.poopService.getPoops();
    console.log(this.convertToRoman(2));
  }


  addLike() {
    this.likeCount = this.likeCount + 1;
  }

  addDislike() {
    this.dislikeCount = this.dislikeCount + 1;
  }

  convertToRoman(num: number) {
    if (num === 0) return "0";
    var roman: any = {
      M: 1000,
      CM: 900,
      D: 500,
      CD: 400,
      C: 100,
      XC: 90,
      L: 50,
      XL: 40,
      X: 10,
      IX: 9,
      V: 5,
      IV: 4,
      I: 1
    };
    var str = '';

    for (var i of Object.keys(roman)) {
      var q = Math.floor(num / roman[i]);
      num -= q * roman[i];
      str += i.repeat(q);
    }

    return str;
  }


}
