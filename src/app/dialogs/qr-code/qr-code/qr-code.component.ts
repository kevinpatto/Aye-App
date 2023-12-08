import { Component } from '@angular/core';
import {AyeUser} from "../../../interfaces/aye-user";
import {MatDialog} from "@angular/material/dialog";
import {AuthService} from "@auth0/auth0-angular";
import {ProfileService} from "../../../services/profile.service";
import {HttpClient} from "@angular/common/http";
import {Router} from "@angular/router";
import {SharedDataService} from "../../../services/shared-data.service";
import {DateService} from "../../../services/date.service";

@Component({
  selector: 'app-qr-code',
  templateUrl: './qr-code.component.html',
  styleUrls: ['./qr-code.component.scss']
})
export class QrCodeComponent {

  ayeUser: AyeUser | undefined;


  constructor(
              private sharedDataService: SharedDataService,
  ) {
    this.sharedDataService.ayeUser$.subscribe(
      (res) => {
        this.ayeUser = res;
      }
    )
  }

  getAyeUserUsername() {
    if (!this.ayeUser?.user_metadata.ayeUsername) {
      return 'Unknown User'
    }
    return "@" + this.ayeUser?.user_metadata.ayeUsername;
  }

  getAyeUserQRUrl() {
    return `https://jonahtoch.com/@` + this.ayeUser?.user_metadata.ayeUsername;
  }


}
