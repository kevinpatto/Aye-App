import {Component, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Poop} from "../models/poop";
import {isEmpty, Observable} from "rxjs";
import {PoopService} from "../services/poop.service";
import {UntypedFormBuilder} from "@angular/forms";

@Component({
  selector: 'app-poop-diaries',
  templateUrl: './poop-diaries.component.html',
  styleUrls: ['./poop-diaries.component.scss']
})
export class PoopDiariesComponent implements OnInit {

  public likeCount = 0;
  public dislikeCount = 0;
  public poops$!: Observable<Poop[]>;
  public addCommentDate: Date;
  public addCommentName = '';
  public addCommentText = '';
  public addReplyCommentDate: Date;
  public addReplyCommentName = '';
  public addReplyCommentText = '';

  formData = this.formBuilder.group({
    name: '',
    comment: '',
  })

  replyFormData = this.formBuilder.group({
    replyName: '',
    replyComment: '',
  })


  constructor(
    private http: HttpClient,
    private poopService: PoopService,
    private formBuilder: UntypedFormBuilder,
  ) {
    this.addCommentDate = new Date();
    this.addReplyCommentDate = new Date();
  }

  ngOnInit(): void {
    this.poops$ = this.poopService.getPoops();
  }

  // isEmpty() {
  //   return this.poops$.subscribe(x => {
  //     console.log(x);
  //   })
  //   this.poops$.
  // }


  addCommentRating(id: string, likes: number, dislikes: number) {
    this.poopService.addCommentRating(id, likes, dislikes);
  }

  addCommentReply(poop_id: string, comment_id: string) {
    const currDate = new Date();
    let user = this.replyFormData.get('replyName')?.value;
    const comment = this.replyFormData.get('replyComment')?.value;
    if (user === '') {
      user = 'Guest';
    }
    this.addReplyCommentDate = currDate;
    this.addReplyCommentName = user;
    this.addReplyCommentText = comment;
    this.poopService.addCommentReply(poop_id, comment_id, user, comment, currDate);
    this.replyFormData.get('replyComment')?.setValue(null);
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

  addLike(id: string) {
    console.log(id);
    this.poopService.addRating(id, 1, 0)
  }

  addDislike(id: string) {
    console.log(id);
    this.poopService.addRating(id, 0, 1)
  }

  convertToDaysAgo(d: any) {
    const todayDate = new Date();

    if (d !== undefined) {
      let theDate1 = new Date(todayDate.toISOString())
      let theDate2 = new Date(d);
      let seconds = Math.floor((theDate1.getTime() - theDate2.getTime()) / 1000);

      let interval = seconds / 31536000;

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
      return Math.floor(seconds) + " seconds";
    }
    return d;
  }

  convertToRoman(num: number) {
    if (num === 0) return "0";
    let roman: any = {
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
    let str = '';

    for (let i of Object.keys(roman)) {
      let q = Math.floor(num / roman[i]);
      num -= q * roman[i];
      str += i.repeat(q);
    }

    return str;
  }


}
