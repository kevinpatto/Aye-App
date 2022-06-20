import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-poop-diaries',
  templateUrl: './poop-diaries.component.html',
  styleUrls: ['./poop-diaries.component.scss']
})
export class PoopDiariesComponent implements OnInit {

  public likeCount = 0;
  public dislikeCount = 0;

  constructor() { }

  ngOnInit(): void {
  }



  addLike() {
    this.likeCount = this.likeCount + 1;
  }

  addDislike() {
    this.dislikeCount = this.dislikeCount + 1;
  }

}
