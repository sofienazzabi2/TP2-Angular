import { Observable, Subject, catchError, map } from 'rxjs';
import { Cv } from '../model/cv';
import { Injectable, OnInit } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Personne } from '../model/personne';
import { of } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class CvService {
  private selectCvSubject = new Subject<Cv>();
  private link = 'https://apilb.tridevs.net/api/personnes';
  selectCv$ = this.selectCvSubject.asObservable();
  cvs: Cv[] = [];
  constructor(private httpClient: HttpClient) {
    this.cvs = [
      new Cv(1, 'sellaouti', 'aymen', 'as.jpg', 'etudiant', 1450, 32),
      new Cv(2, 'sellaouti', 'skander', 'cv.png', 'etudiant', 1450, 15),
      new Cv(2, 'Azzabi', 'Sofiene', '', 'etudiant', 1450, 45),
      new Cv(2, 'FENDRI', 'Adam', '', 'etudiant', 1450, 48),
    ];
  }

  getPersonnesFromApi(): Observable<Personne[]> {
    return this.httpClient.get<Personne[]>(this.link);
  }

  getCvs() {
    return this.cvs;
  }
  getCvs$(): Observable<Cv[]> {
    return this.httpClient
      .get<Cv[]>('https://apilb.tridevs.net/api/personnes')
      .pipe(
        map((cvs) => {
          this.cvs = cvs;
          return cvs;
        })
      );
  }
  selectCv(cv: Cv) {
    this.selectCvSubject.next(cv);
  }

  getCv(id: number): Observable<Cv | null> {
    return this.httpClient.get<Cv>(this.link + id).pipe(
      map((cv) => cv),
      catchError((err) => {
        if (err.status == 0) {
          const cv = this.cvs.find((cv) => cv.id == id);
          if (cv) return of(cv);
        }
        return of(null);
      })
    );
  }

  searchCvsByName(searchTerm: string): Observable<Cv[]> {
    if (searchTerm.trim() === '') {
      return of([]);
    }
    const searchUrl = `${this.link}?filter={"where":{"name":{"regexp":"/${searchTerm}/i"}}}`;

    return this.httpClient
      .get<Cv[]>(searchUrl)
      .pipe(map((response: any) => response as Cv[]));
  }
}
