import {Component, OnInit} from '@angular/core';
import {MatDialog, MatDialogConfig} from "@angular/material/dialog";
import {TrophyDialogComponent} from "../dialogs/trophy-dialog/trophy-dialog.component";
import {MatTooltip} from "@angular/material/tooltip";
import {Router} from "@angular/router";
import {AuthService} from "@auth0/auth0-angular";
import {ProfileService} from "../services/profile.service";
import {BehaviorSubject, concatMap, map, Observable, of, tap} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {AyeUser} from "../interfaces/aye-user";
import {SharedDataService} from "../services/shared-data.service";
import {DateService} from "../services/date.service";
import {QRCodeModule} from "angularx-qrcode";
import {QrCodeComponent} from "../dialogs/qr-code/qr-code/qr-code.component";
import {
  LocationExplanationComponent
} from "../dialogs/location-explanation/location-explanation/location-explanation.component";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  userNotFound: boolean = false;
  loading: boolean = false;
  profileUsername: string = '';
  newProfilePicUrl: string = '';

  fullProfileUrl: string;
  editingBio: boolean = false;
  profileChangesMade: boolean = false;
  ayeUser: AyeUser | undefined;
  invalidImageError: boolean = false;

  private profileList_: BehaviorSubject<any> = new BehaviorSubject(null);
  profileList$: Observable<any> = this.profileList_.asObservable();


  constructor(public dialog: MatDialog,
              public auth: AuthService,
              public profileService: ProfileService,
              private http: HttpClient,
              private router: Router,
              private sharedDataService: SharedDataService,
              private dateService: DateService,
  ) {
    this.loading = true;
    this.fullProfileUrl = window.location.href;
    this.auth.isAuthenticated$.subscribe(
      (res) => {
        if (res) {
          this.sharedDataService.ayeUser$.subscribe(
            (res) => {
              if (res) {
                this.ayeUser = res;
                this.loading = false;
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
                        console.log(ayeUser)
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
      }
    )
  }


  ngOnInit(): void {
    if (this.router.url.substring(0, 2) !== '/@') {
      this.router.navigate(['/']).then();
    }
    this.profileUsername = this.router.url.substring(2, this.router.url.length);
    // this.getManagementAuthToken();
  }

  setAyeUser(ayeUser: AyeUser) {
    this.sharedDataService.setUser(ayeUser)
  }

  handleImageError() {
    this.invalidImageError = true;
    this.ayeUser!.user_metadata.profilePicUrl = '/assets/images/goblin-silhouette.png';
  }

  getManagementAuthToken() {
    return this.sharedDataService.getManagementAuthToken().subscribe(
      (res): void => {
        // console.log(res);
        this.sharedDataService.getUser(this.profileUsername, res.access_token).subscribe(
          (res): void => {
            // console.log(res);
            if (res.length === 0) {
              this.userNotFound = true;
            } else {
              console.log(res[0]);
              this.ayeUser = res[0];
            }
          },
          (error): void => {
            console.log(error);
          },
          () => {
            this.loading = false;
            console.log(this.loading)
          }
        )
      }
    );
  }


  changeBio(event: any) {
    this.ayeUser!.user_metadata!.bio = event.target.value;
    this.profileChangesMade = true;
  }

  changeProfilePic(event: any) {
    this.invalidImageError = false;
    this.newProfilePicUrl = event.target.value;
    this.profileChangesMade = true;
  }


  openTrophyDialog() {
    this.dialog.open(TrophyDialogComponent);
  }

  openQRCodeDialog(): void {
    const dialogConfig = new MatDialogConfig();

    dialogConfig.restoreFocus = false;
    dialogConfig.autoFocus = true;
    dialogConfig.maxWidth = "550px";
    dialogConfig.width = "95%"

    this.dialog.open(QrCodeComponent, dialogConfig);
  }

  getProfile(userId: string | undefined, authToken: string | undefined) {
    // console.log('test 1');
    // console.log(userId, authToken);
    return this.profileService.getProfile(userId, authToken).subscribe();
  }

  updateProfile(userId: string | undefined, authToken: string | undefined) {
    if (this.ayeUser!.user_metadata!.ayeUsername) {
      this.profileService.updateProfileUsername(userId, authToken, this.ayeUser!.user_metadata!.ayeUsername);
      this.profileChangesMade = false;
    }
    if (this.ayeUser!.user_metadata!.bio) {
      this.profileService.updateProfileBio(userId, authToken, this.ayeUser!.user_metadata!.bio);
      this.profileChangesMade = false;
      this.editingBio = false;
    }
    if (this.newProfilePicUrl) {
      this.ayeUser!.user_metadata!.profilePicUrl = this.newProfilePicUrl;
      this.profileService.updateProfilePic(userId, authToken, this.ayeUser!.user_metadata!.profilePicUrl);
      this.profileChangesMade = false;
      this.editingBio = false;
    }
  }

  redirectToHome() {
    this.router.navigate(['/']).then();
  }

  toStandardDate(date: Date): string {
    return this.dateService.toStandardDate(date);
  }

}
