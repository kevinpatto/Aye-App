import {Component, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Poop} from "../models/poop";
import {Observable} from "rxjs";
import {PoopService} from "../services/poop.service";
import {FormBuilder} from "@angular/forms";

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
  public poops$!: Observable<Poop[]>;
  public addCommentDate: Date;
  public addCommentName = '';
  public addCommentText = '';

  formData = this.formBuilder.group({
    name: '',
    comment: '',
  })

  constructor(
    private http: HttpClient,
    private poopService: PoopService,
    private formBuilder: FormBuilder,
  ) {
    this.addCommentDate = new Date();
  }

  ngOnInit(): void {
    this.poops$ = this.poopService.getPoops();
  }

  addCommentLike() {
    this.likeCount += 1;
  }

  addCommentDislike() {
    this.dislikeCount += 1;
  }

  submitComment(id: string) {
    const currDate = new Date();
    let user = this.formData.get('name')?.value;
    const comment = this.formData.get('comment')?.value;
    if (user === '') {
      user = 'Guest';
    }
    this.addCommentDate = currDate;
    this.addCommentName = user;
    this.addCommentText = comment;
    this.poopService.addComment(id, user, comment, currDate);
    this.formData.get('comment')?.setValue(null);
  }

  addLike(id: string, likes: number) {
    console.log(id);
    this.poopService.addRating(id, 1, 0)
  }

  addDislike(id: string, dislikes: number) {
    console.log(id);
    this.poopService.addRating(id, 0, 1)
  }

  convertToDaysAgo(d: any) {
    const todayDate = new Date();

    if (d !== undefined) {
      let theDate1 = new Date(todayDate.toISOString())
      let theDate2 = new Date(d);
      var seconds = Math.floor((theDate1.getTime() - theDate2.getTime()) / 1000);

      var interval = seconds / 31536000;

      if (interval > 1) {
        if (Math.floor(interval) <= 1) return Math.floor(interval) + " year";
        return Math.floor(interval) + " years";
      }
      interval = seconds / 2592000;
      if (interval > 1) {
        if (Math.floor(interval) <= 1) return Math.floor(interval) + " month";
        return Math.floor(interval) + " months";
      }
      interval = seconds / 86400;
      if (interval > 1) {
        if (Math.floor(interval) <= 1) return Math.floor(interval) + " day";
        return Math.floor(interval) + " days"
      }
      interval = seconds / 3600;
      if (interval > 1) {
        if (Math.floor(interval) <= 1) return Math.floor(interval) + " hour";
        return Math.floor(interval) + " hours";
      }
      interval = seconds / 60;
      if (interval > 1) {
        if (Math.floor(interval) <= 1) return Math.floor(interval) + " minute";
        return Math.floor(interval) + " minutes";
      }
      if (Math.floor(interval) <= 1) return Math.floor(seconds) + " second";
      return Math.floor(seconds) + " seconds";
    }
    return d;
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
