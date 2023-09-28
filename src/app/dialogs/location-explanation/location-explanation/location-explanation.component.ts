import {Component, Inject} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";

@Component({
  selector: 'app-location-explanation',
  templateUrl: './location-explanation.component.html',
  styleUrls: ['./location-explanation.component.scss']
})
export class LocationExplanationComponent {

  title: string;
  personsName: string;
  locations: string[];

  constructor(private dialogRef: MatDialogRef<LocationExplanationComponent>,
              // @ts-ignore
              @Inject(MAT_DIALOG_DATA) data,
  ) {
    this.title = data.title;
    this.personsName = data.personsName;
    this.locations = data.locations;
  }


}
