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
    const url = 'https://dev-mn6falogt3c14mat.us.auth0.com/api/v2/users/google-oauth2|101612299378795872117';
    // console.log(userId, authToken)

    // document.getElementById('callApi')!.addEventListener('click', async () => {

    // });
    const body = {
      "picture": "https://images.unsplash.com/flagged/photo-1566127992631-137a642a90f4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8Mnx8fGVufDB8fHx8&w=1000&q=80"

    };
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
        'Authorization': 'Bearer eyJhbGciOiJkaXIiLCJlbmMiOiJBMjU2R0NNIiwiaXNzIjoiaHR0cHM6Ly9kZXYtbW42ZmFsb2d0M2MxNG1hdC51cy5hdXRoMC5jb20vIn0..ymc45fgAcawkoUWs.7UaDSHjotLmzwabSH1Fpclvs6paR57AmszaxaAwr4acH3_yEyHN6G2DSMAAFO_or0TwIU9gukVpy5nk-wwTl7DjcCIO2PIsp0TmXjIAzw_S8orRxHrcoIeBlZ3PAoaf7EL1uqFTflgN_2IMLUVSNHErrPNq5z8HX66QRYHQXXY1vo_-uNeYgZAf5AZCLTQ8HRFfkZYA4-WlGerrsVTv76Cj8PZltco05SkuWZDm_wK1LYFGtf8tAclYUIMLbEjnd_GgOKVTBWzq9Sb-uxGqYjs-mPC6hOP8mUD9yzaXPkmtkwW84CSZjRY9ydTvhCYM2psqhUaE7kxIs1LJr6VRtizP4.5wNSwPQZMoxlel9nbacCcg'
      })
    };
    this.http.patch<any>(url, body, httpOptions).subscribe(
      value => console.log('returned this data ' + value),
    );
  }


}
