import { Component } from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {TrophyDialogComponent} from "../dialogs/trophy-dialog/trophy-dialog.component";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent {
  constructor(public dialog: MatDialog) {}

  openTrophyDialog() {
    this.dialog.open(TrophyDialogComponent);
  }
}
