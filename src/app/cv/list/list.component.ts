import { Component, EventEmitter, Input, Output, inject } from '@angular/core';
import { Cv } from '../model/cv';
import { CvService } from '../services/cv.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
})
export class ListComponent {
  @Input()
  cvs: Cv[] | null = [];

  @Input()
  onItemClick!: (cv: Cv) => void;

  @Input()
  switchItemColor = true;

  @Output()
  sendedcv = new EventEmitter();

  cvService = inject(CvService);
  router = inject(Router);

  isHidden = true;

  constructor() {}

  showHide() {
    this.isHidden = !this.isHidden;
  }
  sendcv(item: Cv) {
    console.log(item);
    this.sendedcv.emit(item);
  }
}
