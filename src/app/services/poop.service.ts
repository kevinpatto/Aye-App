import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Poop} from "../models/poop";
import {catchError, Observable, of, tap, map} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class PoopService {

  public poopArray: Poop[] = [];

  constructor(
    private http: HttpClient,
  ) { }

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


getPoops(): Observable<Poop[]> {
  const httpOptions = {
    headers: new HttpHeaders({'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*'})
  };
  return this.http.get<Poop[]>('https://jonahtoch.com/api/v1/poop/list-all', httpOptions)
    .pipe(map(res => {
      // console.log('here is res' + res);
      return res.reverse();
    }),
      catchError(this.handleError<Poop[]>('getPoops', []))
    );
}

addPoops(name: string, description: string, rating: number, date: Date, fullAddr: string): void {
  const body = {name: name, description: description, rating: rating, date: date, fullAddr: fullAddr};
  console.log(body);
  const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*'})
};
  this.http.post<any>('https://jonahtoch.com/api/v1/poop/create', body, httpOptions).subscribe(
    value => console.log(value)
  );
}


}
