import {Component} from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {TrophyDialogComponent} from "../dialogs/trophy-dialog/trophy-dialog.component";
import {MatTooltip} from "@angular/material/tooltip";
import {Router} from "@angular/router";
import {AuthService} from "@auth0/auth0-angular";
import {ProfileService} from "../services/profile.service";
import {BehaviorSubject, concatMap, map, Observable, of, tap} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {AyeUser} from "../interfaces/aye-user";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent {
  fullProfileUrl: string;
  editingUsername = false;
  editingBio = false;
  profileChangesMade = false;
  metadata: AyeUser | undefined;

  private profileList_: BehaviorSubject<any> = new BehaviorSubject(null);
  profileList$: Observable<any> = this.profileList_.asObservable();


  constructor(public dialog: MatDialog,
              public auth: AuthService,
              public profileService: ProfileService,
              private http: HttpClient,
  ) {
    this.fullProfileUrl = window.location.href;
  }

  changeUsername(event: any) {
    // console.log(event.originalTarget.value);
    // console.log(event.target.value);
    this.metadata!.user_metadata!.ayeUsername = event.target.value;
    this.profileChangesMade = true;
  }

  changeBio(event: any) {
    // console.log(event.originalTarget.value);
    // console.log(event.target.value);
    this.metadata!.user_metadata!.bio = event.target.value;
    this.profileChangesMade = true;
  }


  openTrophyDialog() {
    this.dialog.open(TrophyDialogComponent);
  }

  getProfile(userId: string | undefined, authToken: string | undefined) {
    // console.log('test 1');
    // console.log(userId, authToken);
    return this.profileService.getProfile(userId, authToken).subscribe();
  }

  updateProfile(userId: string | undefined, authToken: string | undefined) {
    if (this.metadata!.user_metadata!.ayeUsername) {
      this.profileService.updateProfilePicture(userId, authToken, this.metadata!.user_metadata!.ayeUsername);
      this.profileChangesMade = false;
      this.editingUsername = false;
    }
    if (this.metadata!.user_metadata!.bio) {
      this.profileService.updateProfileBio(userId, authToken, this.metadata!.user_metadata!.bio);
      this.profileChangesMade = false;
      this.editingBio = false;
    }
  }


  ngOnInit() {
    this.auth.user$
      .pipe(
        concatMap((user: any) =>
          this.http.get(
            encodeURI(`https://dev-mn6falogt3c14mat.us.auth0.com/api/v2/users/${user!.sub}`)
          )
        ),
        tap((meta: any) => {
            console.log(meta);
            (this.metadata = meta);
            console.log(this.metadata);
          }
        )
      )
      .subscribe();
  }
}
