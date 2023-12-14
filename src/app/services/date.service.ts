import { Injectable } from '@angular/core';
import {formatDate} from "@angular/common";

@Injectable({
  providedIn: 'root'
})
export class DateService {

  constructor() { }



  toStandardDate(date: Date) {
    return formatDate(date, 'MM/dd/yy', 'en');
  }



}
