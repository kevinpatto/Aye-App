import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Location} from "../models/location";
import {catchError, Observable, of, tap, map} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class LocationService {


  // private returnLoc: Location;
  // public locat: Location;


  constructor(
    private http: HttpClient
  ) {
  // this.locat = Location;
  }

  /**
   * Handle Http operation that failed.
   * Let the app continue.
   *
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      // this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
  //
  // decodeLocation(longitude: number, latitude: number) {
  //   console.log('running it');
  //  return this.http.get<any>(`https://maps.googleapis.com/maps/api/geocode/json?latlng=${latitude},${longitude}&key=AIzaSyCFLVgPPPFV_Pk3U2DDgYJq606N8cNOZRA&language=en&result_type=street_address`)
  //    .subscribe(data => {
  //        this.locat.latitude = data.status,
  //        console.log(this.locat);
  //      }
  //    )
  // }

}
