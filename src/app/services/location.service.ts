import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpHeaders, HttpResponse} from "@angular/common/http";
import {Location} from "../models/location";
import {googleInterface} from "../models/google-interface";
import {catchError, Observable, of, tap, map, throwError} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class LocationService {


  // private returnLoc: Location;
  public googleLoc = <Location>{};

  constructor(
    private http: HttpClient
  ) {
  // this.locat = Location;
  }


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
  //
  decodeLocation(longitude: number, latitude: number): any {
    const url = `https://maps.googleapis.com/maps/api/geocode/json?latlng=${latitude},${longitude}&key=AIzaSyCFLVgPPPFV_Pk3U2DDgYJq606N8cNOZRA&language=en&result_type=street_address`;
    console.log('running it with url + ' + url);
    return this.http.get<any>(url).pipe(
      map(data => {
        this.googleLoc.fullAddr = data.results[0].formatted_address;
        return this.googleLoc;
      })
    );
  }

}
