import { Injectable } from '@angular/core';
import { NgProgressRef } from '@ngx-progressbar/core';

@Injectable({
  providedIn: 'root'
})
export class ProgressBarService {
  progressRef: NgProgressRef;
  defaultColor: string = '#1895E0';
  successColor: string = '#42a948';
  errorColor: string = '#a94442';
  currentColor: string = this.defaultColor;

  constructor() { }

  startLoading() {
    this.currentColor = this.defaultColor;
    this.progressRef.start();
  }

  completeLoading() {
    this.progressRef.complete();
  }

  setSuccess() {
    this.currentColor = this.successColor;
  }

  setError() {
    this.currentColor = this.errorColor;
  }

}
