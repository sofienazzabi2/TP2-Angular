import { Component, OnInit, inject } from '@angular/core';
import { Cv } from '../model/cv';
import { CvService } from '../services/cv.service';
import { distinctUntilChanged } from 'rxjs';
import { ToastrService } from 'ngx-toastr';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-cv',
  templateUrl: './cv.component.html',
  styleUrls: ['./cv.component.css'],
})
export class CvComponent implements OnInit {
  nb = 0;
  cv: Cv = new Cv();
  juniors: Cv[] = [];
  seniors: Cv[] = [];
  activeTab: string = 'juniors';
  dataLoaded = false;
  route = inject(ActivatedRoute);

  constructor(private cvService: CvService, private toastr: ToastrService) {
    this.cvService.selectCv$
      .pipe(distinctUntilChanged())
      .subscribe(() => this.nb++);
  }

  ngOnInit(): void {
    this.loadData();
  }
  changeTab(tab: string): void {
    this.activeTab = tab;
  }

  sendCv(item: Cv) {
    this.cv = item;
  }

  loadData() {
    if (!this.dataLoaded) {
      console.log('loading data for the first time');
      this.cvService.getPersonnesFromApi().subscribe(
        (personnes) => {
          this.juniors = personnes.filter((cv) => cv.age < 40);
          this.seniors = personnes.filter((cv) => cv.age >= 40);
          this.dataLoaded = true;
        },
        (error) => {
          this.toastr.error('Le fetch api a échoué');
        }
      );
    }
  }
}
