import {Component} from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {TrophyDialogComponent} from "../dialogs/trophy-dialog/trophy-dialog.component";
import {MatTooltip} from "@angular/material/tooltip";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent {
  testText = "http://localhost:4200/profile";

  constructor(public dialog: MatDialog) {
  }


  openTrophyDialog() {
    this.dialog.open(TrophyDialogComponent);
  }


}
