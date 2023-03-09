import {Injectable} from '@angular/core';
import {AuthService} from "@auth0/auth0-angular";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {environment} from "../../environments/environment.prod";
import {Auth0Client} from '@auth0/auth0-spa-js';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  constructor(public auth: AuthService,
              private http: HttpClient,
  ) {
  }

  auth0 = new Auth0Client({
    domain: 'dev-mn6falogt3c14mat.us.auth0.com',
    clientId: '1xmbp07X5I3uTUMazAsCgGAz24p3BMB0'
  });

  updateProfilePicture(userId: string | undefined, authToken: string | undefined): void {
    // const url = `https://${environment.auth0Domain}/api/v2/users/` + userId;
    const url = 'https://dev-mn6falogt3c14mat.us.auth0.com/';
    // console.log(userId, authToken)

    // document.getElementById('callApi')!.addEventListener('click', async () => {

    // });
    const body = {
      "picture": "https://images.unsplash.com/flagged/photo-1566127992631-137a642a90f4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8Mnx8fGVufDB8fHx8&w=1000&q=80"

    };
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': 'https://dev-mn6falogt3c14mat.us.auth0.com/api/v2/users/',
      })
    };
    this.http.patch<any>(url, body, httpOptions).subscribe(
      value => console.log('returned this data ' + value),
    );
  }


}
