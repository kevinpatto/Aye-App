import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Poop} from "../models/poop";

@Component({
  selector: 'app-poop-diaries',
  templateUrl: './poop-diaries.component.html',
  styleUrls: ['./poop-diaries.component.scss']
})
export class PoopDiariesComponent implements OnInit {

  public likeCount = 0;
  public dislikeCount = 0;
  // public observablePoops; TODO GET OBSERVABLEs working



  constructor(
    private http: HttpClient,
  ) { }

  ngOnInit(): void {
    const headers = { 'Access-Control-Allow-Origin': '*' }
    this.http.get<any>('https://jonahtoch.com/catalog/poop/list-all', {headers}).subscribe(
      data => {
        let poop = new Poop(data[0].id, data[0].name, data[0].description, data[0].rating);
        console.log(data);
        console.log(poop);
      }
  )
  }

  pullPoops() {
  }

  addLike() {
    this.likeCount = this.likeCount + 1;
  }

  addDislike() {
    this.dislikeCount = this.dislikeCount + 1;
  }

}
