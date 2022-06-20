import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-poop-form',
  templateUrl: './poop-form.component.html',
  styleUrls: ['./poop-form.component.scss']
})
export class PoopFormComponent implements OnInit {

  loading = false;
  buttonText = ''
  constructor(
    private router: Router,
  ) {
    this.buttonText = 'Submit';
  }

  ngOnInit(): void {
  }


  submit(): void {
    this.loading = true;
    this.buttonText = 'Submitting...';

    setTimeout(() =>
      { this.loading = false;
        this.buttonText= "Submitted! Rerouting..."
      }, 2000)
    setTimeout(() =>
    { this.router.navigate(['/Poop-Diaries'])
    }, 2750)
  }


}
