import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpHeaders, HttpResponse} from "@angular/common/http";
import {Location} from "../models/location";
import {googleInterface} from "../models/google-interface";
import {catchError, Observable, of, tap, map, throwError} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class LocationService {

  public googleLoc = <Location>{};

  constructor(
    private http: HttpClient
  ) {}

  private handleError(err: HttpErrorResponse) {

    let errorMessage = '';
    if (err.error instanceof ErrorEvent) {

      errorMessage = `An error occurred: ${err.error.message}`;
    } else {

      errorMessage = `Server returned code: ${err.status}, error message is: ${err.message}`;
    }
    console.error(errorMessage);
    return throwError(errorMessage);
  }

  decodeLocation(longitude: number, latitude: number): any {
    const url = `https://maps.googleapis.com/maps/api/geocode/json?latlng=${latitude},${longitude}&key=AIzaSyCFLVgPPPFV_Pk3U2DDgYJq606N8cNOZRA&language=en&result_type=street_address`;
    return this.http.get<any>(url).pipe(
      map(data => {
        console.log(data);
        this.googleLoc.fullAddr = data.results[0].formatted_address;
        this.googleLoc.longitude = data.results[0].geometry.location.lng;
        this.googleLoc.latitude  = data.results[0].geometry.location.lat;
        this.googleLoc.street = data.results[0].address_components[1].short_name;
        this.googleLoc.city = data.results[0].address_components[3].long_name;
        this.googleLoc.longState = data.results[0].address_components[5].long_name;
        this.googleLoc.country = data.results[0].address_components[6].long_name;
        this.googleLoc.zipcode = data.results[0].address_components[7].long_name;
        return this.googleLoc;
      })
    );
  }
}
