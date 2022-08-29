import { Component, OnInit } from '@angular/core';
import {PoopService} from "../services/poop.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-maintenance',
  templateUrl: './maintenance.component.html',
  styleUrls: ['./maintenance.component.scss']
})
export class MaintenanceComponent implements OnInit {

  constructor(
    private poopService: PoopService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.poopService.checkOnline().subscribe( res => {
      if (res) {
        this.router.navigate(['/']);
      }
    });
  }

}
