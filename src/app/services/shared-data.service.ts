import { Injectable } from '@angular/core';
import {BehaviorSubject, catchError, map, Observable} from "rxjs";
import {Poop} from "../models/poop";
import {environment} from "../../environments/environment.prod";
import {HttpClient, HttpHeaders} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class SharedDataService {

  private managementAuthToken_: BehaviorSubject<any> = new BehaviorSubject(null);
  managementAuthToken$: Observable<any> = this.managementAuthToken_.asObservable();

  constructor(
    private http: HttpClient,
  ) { }

  get isDevMode(): string | null {
    return localStorage.getItem('ayeApp-isDevMode');
  }

  set isDevMode(value: string | null) {
    if (value !== null) {
      localStorage.setItem('ayeApp-isDevMode', 'true');
    } else {
      localStorage.removeItem('ayeApp-isDevMode');
    }

  }


  getManagementAuthToken(): Observable<any> {
    const url: string = `${environment.mainApiUrl}/auth?type=managementToken`;

    return this.http.get(url).pipe((res) => {
      this.managementAuthToken_.next(res);
      return res;
    })
  }

  isUsernameUnique(username: string, managementAuthToken: string): Observable<any> {
    const url: string = `${environment.mainApiUrl}/users?type=isUsernameUnique&username=` + username + `&token=` + managementAuthToken;


    return this.http.get(url).pipe((res) => {
      return res;
    })
  }




}
