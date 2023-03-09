import {Component} from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {TrophyDialogComponent} from "../dialogs/trophy-dialog/trophy-dialog.component";
import {MatTooltip} from "@angular/material/tooltip";
import {Router} from "@angular/router";
import {AuthService} from "@auth0/auth0-angular";
import {ProfileService} from "../services/profile.service";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent {
  fullProfileUrl: string;

  constructor(public dialog: MatDialog,
              public auth: AuthService,
              public profileService: ProfileService,
              ) {
    this.fullProfileUrl = window.location.href;
  }

  openTrophyDialog() {
    this.dialog.open(TrophyDialogComponent);
  }

  updateProfilePicture(userId: string | undefined, authToken: string | undefined) {
    this.profileService.updateProfilePicture(userId, authToken);
  }


  ngOnInit() {


  }

}
