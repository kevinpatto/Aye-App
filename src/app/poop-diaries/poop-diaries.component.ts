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

  constructor(
    private http: HttpClient,
    private poopService: PoopService
  ) { }

  ngOnInit(): void {
    this.poops$= this.poopService.getPoops();
  }


  addLike() {
    this.likeCount = this.likeCount + 1;
  }

  addDislike() {
    this.dislikeCount = this.dislikeCount + 1;
  }

}
