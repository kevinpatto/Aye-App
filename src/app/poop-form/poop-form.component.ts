import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {HttpClient, HttpRequest} from "@angular/common/http";
import {FormControl, FormGroup} from "@angular/forms";
import {Poop} from "../models/poop";
import {FormBuilder} from "@angular/forms";
import {PoopService} from "../services/poop.service";
import {LocationService} from "../services/location.service";
import {Location} from "../models/location";
import {Observable} from "rxjs";
import {googleInterface} from "../models/google-interface";

@Component({
  selector: 'app-poop-form',
  templateUrl: './poop-form.component.html',
  styleUrls: ['./poop-form.component.scss']
})
export class PoopFormComponent implements OnInit {

  loading = false;
  buttonText = ''
  submitted = false;

  public poopLocation: googleInterface | undefined;

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
    private poopService: PoopService,
    private locationService: LocationService
  ) {
    this.buttonText = 'Submit';
  }

  ngOnInit(): void {
  // this.getLocation();
  }

  decodeLocation(longitude: number, latitude: number){
    // let testStr = "";
    this.poopLocation = this.locationService.decodeLocation(longitude, latitude).subscribe(
      ((data: googleInterface) => {
        console.log('i got the data back as ' + data.addrNum);
      })
    );
    // console.log(testStr);
    console.log(this.poopLocation);
  }
  getLocation(): void{
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position)=>{
        const longitude = position.coords.longitude;
        const latitude = position.coords.latitude;
        this.decodeLocation(longitude, latitude);
      });
    } else {
      console.log("No support for geolocation");
    }
  }

  onSubmit(): void {
    let name = this.formData.get('name')?.value;
    let description = this.formData.get('description')?.value;
    let rating = this.formData.get('rating')?.value;
    let date = new Date();
    // console.log(date);
    if (name == '') {
      name = 'anonymoose'
    }

    if (description == '') {
      description = 'speechless'
    }

    if (rating == '') {
      rating = 0;
    }

    this.getLocation();
    // this.poopService.addPoops(name, description, rating, date);
    // this.loading = true;
    // this.buttonText = 'Submitting...';

    // setTimeout(() =>
    //   { this.loading = false;
    //     this.buttonText= "Submitted! Rerouting..."
    //   }, 2000)
    // setTimeout(() =>
    // { this.router.navigate(['/Poop-Diaries'])
    // }, 2750)
  }


}
