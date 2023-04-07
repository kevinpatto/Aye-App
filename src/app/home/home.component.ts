import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {PoopService} from "../services/poop.service";
import {concatMap, map, Observable, switchMap, tap} from "rxjs";
import {Poop} from "../models/poop";
import {ProfileService} from "../services/profile.service";
import {AuthService} from "@auth0/auth0-angular";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(
    private router: Router,
    private poopService: PoopService,
    private profileService: ProfileService,
    public auth: AuthService, private http: HttpClient
  ) { }

  ngOnInit(): void {
    // this.poopService.checkOnline().subscribe( res => {
    //   if (!res) {
    //     console.log('The web server is down!');
    //     this.router.navigate(['/maintenance']).then();
    //   }
    // });
    // this.auth.user$
    //   .pipe(
    //
    //     concatMap((user) =>
    //       // Use HttpClient to make the call
    //       this.http.get(
    //         // @ts-ignore
    //         encodeURI(`https://dev-mn6falogt3c14mat.us.auth0.com/api/v2/users/${user.sub}`)
    //       )
    //     ),
    //     // @ts-ignore
    //     map((user) => user['app_metadata']),
    //     tap((meta) => (
    //       this.metadata = meta,
    //       console.log(meta)))
    //   )
    //   .subscribe();
    // this.auth.user$
    //   .pipe(
    //
    //     concatMap((user) =>
    //       // Use HttpClient to make the call
    //       this.http.get(
    //         // @ts-ignore
    //         encodeURI(`https://dev-mn6falogt3c14mat.us.auth0.com/api/v2/userinfo`)
    //       )
    //     ),
    //     // @ts-ignore
    //     map((user) => user['user_metadata']),
    //     tap((meta) => (this.metadata = meta, console.log(meta)))
    //   )
    //   .subscribe();
    this.auth.error$.subscribe(error => {
      // Handle Error here
      console.log(error);
    });

  }

  updateProfilePicture(userId: string | undefined, authToken: string | undefined) {
    // this.profileService.updateProfilePicture(userId, authToken);
  }

}
