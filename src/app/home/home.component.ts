import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {PoopService} from "../services/poop.service";
import {Observable, switchMap} from "rxjs";
import {Poop} from "../models/poop";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(
    private router: Router,
    private poopService: PoopService
  ) { }

  ngOnInit(): void {
    this.poopService.checkOnline().subscribe( res => {
      if (!res) {
        console.log('The web server is down!')
        this.router.navigate(['/maintenance'])
      }
    });
  }
}
