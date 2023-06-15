import {Component, Inject} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";

@Component({
  selector: 'app-stat-explanation',
  templateUrl: './stat-explanation.component.html',
  styleUrls: ['./stat-explanation.component.scss']
})
export class StatExplanationComponent {

  title: string;
  fullName: string;
  description:string;

  constructor( private dialogRef: MatDialogRef<StatExplanationComponent>,
               // @ts-ignore
               @Inject(MAT_DIALOG_DATA) data,
          ) {
    this.title = data.title;
    this.fullName = data.fullName;
    this.description = data.description;
  }


}
