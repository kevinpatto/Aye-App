import {Component, OnInit} from '@angular/core';
import {Router, ActivatedRoute, Params} from "@angular/router";
import {PoopService} from "../services/poop.service";
import {concatMap, map, Observable, switchMap, tap} from "rxjs";
import {Poop} from "../models/poop";
import {ProfileService} from "../services/profile.service";
import {AuthService} from "@auth0/auth0-angular";
import {HttpClient} from "@angular/common/http";
import {SharedDataService} from "../services/shared-data.service";
import {AyeUser} from "../interfaces/aye-user";

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
    private sharedDataService: SharedDataService,
    private activatedRoute: ActivatedRoute,
    public auth: AuthService,
    private http: HttpClient
  ) {
    this.auth.isAuthenticated$.subscribe((res) => {
      if (res) {
        this.sharedDataService.ayeUser$.subscribe(
          (res) => {
            if (res) {

            } else {
              this.auth.user$
                .pipe(
                  concatMap((user: any) =>
                    this.http.get(
                      // @ts-ignore
                      encodeURI(`https://dev-mn6falogt3c14mat.us.auth0.com/api/v2/users/${user.sub}`)
                    )
                  ),
                  tap((ayeUser: any) => {
                      this.setAyeUser(ayeUser);
                    }
                  )
                )
                .subscribe();
            }
          },
          (error) => {
            console.log(error);
          },
        )
      }
    })
  }

  ngOnInit(): void {
    this.activatedRoute.queryParams.subscribe((params: Params): void => {
      if (params['dev'] === 'true') {
        this.sharedDataService.isDevMode = 'true';
      }
    })

    // first we get a management auth token if we are logged in
    // this.auth.isAuthenticated$.subscribe((res: boolean) => {
    //   // we are logged in
    //   if (res) {
    //       this.getManagementAuthToken();
    //     }
    //   }
    // )



  }

  isDevMode(): boolean {
    return this.sharedDataService.isDevMode === 'true';
  }

  leaveDevMode(): void {
    this.sharedDataService.isDevMode = null;
  }

  getManagementAuthToken() {
    return this.sharedDataService.getManagementAuthToken().subscribe(
      (res) => {
        this.sharedDataService.getUser('gonah3333', res.access_token).subscribe(
          (res) => {
            console.log(res);
          }
        )
      }
    );
  }

  setAyeUser(ayeUser: AyeUser) {
    this.sharedDataService.setUser(ayeUser)
  }


  checkOnline() {
    this.poopService.checkOnline().subscribe(res => {
      if (!res) {
        console.log('The web server is down!');
        this.router.navigate(['/maintenance']).then();
      }
    });
  }


}
