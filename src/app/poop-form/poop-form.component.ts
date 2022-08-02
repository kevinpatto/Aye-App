import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {HttpClient, HttpRequest} from "@angular/common/http";
import {FormControl, FormGroup} from "@angular/forms";
import {Poop} from "../models/poop";
import {FormBuilder} from "@angular/forms";
import {PoopService} from "../services/poop.service";

@Component({
  selector: 'app-poop-form',
  templateUrl: './poop-form.component.html',
  styleUrls: ['./poop-form.component.scss']
})
export class PoopFormComponent implements OnInit {

  loading = false;
  buttonText = ''
  submitted = false;

  formData = this.formBuilder.group({
    name: '',
    description: '',
    rating: '',
    time: ''
  })

  constructor(
    private router: Router,
    private http: HttpClient,
    private formBuilder: FormBuilder,
    private poopService: PoopService
  ) {
    this.buttonText = 'Submit';
  }

  ngOnInit(): void {

  }


  onSubmit(): void {
    let name = this.formData.get('name')?.value;
    let description = this.formData.get('description')?.value;
    let rating = this.formData.get('rating')?.value;
    let date = new Date();
    console.log(date);
    if (name == '') {
      name = 'anonymoose'
    }

    if (description == '') {
      description = 'speechless'
    }

    if (rating == '') {
      rating = 0;
    }

    this.poopService.addPoops(name, description, rating, date);
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
