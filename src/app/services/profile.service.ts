import {Injectable} from '@angular/core';
import {AuthService} from "@auth0/auth0-angular";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {environment} from "../../environments/environment.prod";
import {Auth0Client} from '@auth0/auth0-spa-js';
import {BehaviorSubject, catchError, map, Observable, of} from "rxjs";
import {Poop} from "../models/poop";

@Injectable({
  providedIn: 'root'
})
export class ProfileService {


  private profileList_: BehaviorSubject<any> = new BehaviorSubject(null);
  profileList$: Observable<any> = this.profileList_.asObservable();


  constructor(public auth: AuthService,
              private http: HttpClient,
  ) {
  }

  getProfile(userId: string | undefined, authToken: string | undefined): Observable<any> {
    const url = 'https://dev-mn6falogt3c14mat.us.auth0.com/api/v2/users/' + userId
    console.log(userId, authToken);

    const httpOptions = {
      headers: new HttpHeaders({
        "Authorization": "Bearer " + authToken,
        "Access-Control-Allow-Origin": "*",
      })
    }

    return this.http.get<Observable<any>>(url, httpOptions);
    // console.log('after');
  }

  // TODO: refactor to make it so we can have one function that updates all user metadata. Takes array of parameters


  updateProfilePicture(userId: string | undefined, authToken: string | undefined, ayeUsername: string | undefined): void {
    const url = 'https://dev-mn6falogt3c14mat.us.auth0.com/api/v2/users/' + userId
    console.log(userId, authToken);
    const body = {
      user_metadata: {
        "ayeUsername": ayeUsername,
        // "profilePicUrl": 'https://i.insider.com/59ca65fefca6e427008b4776?width=1750&format=jpeg&auto=webp',
      }
    }

    const httpOptions = {
      headers: new HttpHeaders({
        "Authorization": "Bearer " + authToken,
        "Access-Control-Allow-Origin": "*",
      })
    }

    this.http.patch<any>(url, body, httpOptions).subscribe(
      (value) => {
        console.log('succeed');
        console.log(value);
      },
      (error) => {
        console.log('error');
        console.log(error);
      }
    );
    console.log('after');
  }

  updateProfileBio(userId: string | undefined, authToken: string | undefined, bio: string | undefined): void {
    const url = 'https://dev-mn6falogt3c14mat.us.auth0.com/api/v2/users/' + userId
    console.log(userId, authToken);
    const body = {
      user_metadata: {
        "bio": bio,
        // "profilePicUrl": 'https://i.insider.com/59ca65fefca6e427008b4776?width=1750&format=jpeg&auto=webp',
      }
    }

    const httpOptions = {
      headers: new HttpHeaders({
        "Authorization": "Bearer " + authToken,
        "Access-Control-Allow-Origin": "*",
      })
    }

    this.http.patch<any>(url, body, httpOptions).subscribe(
      (value) => {
        console.log('succeed');
        console.log(value);
      },
      (error) => {
        console.log('error');
        console.log(error);
      }
    );
    console.log('after');
  }


}
