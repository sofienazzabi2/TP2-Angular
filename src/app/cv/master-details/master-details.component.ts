import { Component, inject } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Observable, catchError, of, pipe } from 'rxjs';
import { Cv } from '../model/cv';
import { CvService } from '../services/cv.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-master-details',
  templateUrl: './master-details.component.html',
})
export class MasterDetailsComponent {
  cvs$: Observable<Cv[]>;
  cvService = inject(CvService);
  toaster = inject(ToastrService);
  router = inject(Router);

  constructor() {
    this.cvs$ = this.cvService.getCvs$().pipe(
      catchError((res) => {
        this.toaster.error('Erreur de récupération de donnés');
        return of(res);
      })
    );
  }

  showDetails(cv: Cv) {
    this.router.navigate(['cv-resolver', 'list', cv.id]);
  }
}
