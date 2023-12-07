import {AfterContentInit, AfterViewInit, Component, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Poop} from "../models/poop";
import {isEmpty, Observable, Subscription} from "rxjs";
import {PoopService} from "../services/poop.service";
import {UntypedFormBuilder} from "@angular/forms";
import {ScrollingModule} from '@angular/cdk/scrolling';


@Component({
  selector: 'app-poop-diaries',
  templateUrl: './poop-diaries.component.html',
  styleUrls: ['./poop-diaries.component.scss']
})
export class PoopDiariesComponent implements OnInit {

  isLoadedContentSubscription: Subscription;
  isContentLoaded = false;
  poops$!: Observable<Poop[]>;
  addCommentDate: Date;
  addCommentName = '';
  addCommentText = '';
  addReplyCommentDate: Date;
  addReplyCommentName = '';
  addReplyCommentText = '';
  entriesToShow = 5;

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
    this.isLoadedContentSubscription = this.poopService.poopLoaded$.subscribe((v) => {
      console.log(v);
      this.isContentLoaded = v;
    });
  }

  ngOnInit(): void {
    this.isContentLoaded = false;
    this.poops$ = this.poopService.getPoops();
  }

  showMoreEntries() {
    this.entriesToShow += 15;
  }


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


}
