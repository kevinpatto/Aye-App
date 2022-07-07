import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {HttpClient, HttpRequest} from "@angular/common/http";


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
    private http: HttpClient
  ) {
    this.buttonText = 'Submit';
  }

  ngOnInit(): void {
  }


  submit(): void {
    const headers = { 'Authorization': 'Bearer my-token', 'Access-Control-Allow-Origin': '*' }
    this.http.get<any>('https://jonahtoch.com/catalog/users/', {headers}).subscribe(data => {
    console.log(data);
  });
    // this.loading = true;
    // this.buttonText = 'Submitting...';
    //
    // setTimeout(() =>
    //   { this.loading = false;
    //     this.buttonText= "Submitted! Rerouting..."
    //   }, 2000)
    // setTimeout(() =>
    // { this.router.navigate(['/Poop-Diaries'])
    // }, 2750)
  }


}
