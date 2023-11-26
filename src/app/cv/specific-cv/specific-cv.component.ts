import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Cv } from '../model/cv';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-specific-cv',
  templateUrl: './specific-cv.component.html',
  styleUrls: ['./specific-cv.component.css'],
})
export class SpecificCvComponent implements OnInit {
  id: string | null = null;
  cv: Cv | null = new Cv();
  constructor(private route: ActivatedRoute) {}
  private http = inject(HttpClient);
  router: Router = inject(Router);
  private toast = inject(ToastrService);

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
    this.http
      .get<Cv>(`https://apilb.tridevs.net/api/personnes/${this.id}`)
      .subscribe(
        (cv) => {
          console.log(cv);
          this.cv = cv;
        },
        (error) => {
          this.cv = null;
          this.toast.error('Erreur lors de la récupération du cv');
        }
      );
  }

  deleteCv(id: number) {
    this.http.delete(`https://apilb.tridevs.net/api/personnes/${id}`).subscribe(
      () => {
        this.toast.success('Cv supprimé avec succès');
        this.router.navigate(['/cv']);
      },
      (error) => {
        this.toast.error('Erreur lors de la suppression du cv');
        setTimeout(() => {
          this.router.navigate(['/cv']);
        }, 2000);
      }
    );
  }
}
