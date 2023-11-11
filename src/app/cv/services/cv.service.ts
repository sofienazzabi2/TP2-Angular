import {Observable, Subject} from "rxjs";
import { Cv } from "../model/cv";
import {Injectable, OnInit} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Personne} from "../model/personne";

@Injectable({ providedIn: "root" })
export class CvService   {
  private selectCvSubject = new Subject<Cv>();
   private link="https://apilb.tridevs.net/api/personnes"
  selectCv$ = this.selectCvSubject.asObservable();
  cvs: Cv[] = [];
  constructor(private httpClient: HttpClient) {
    this.cvs = [
      new Cv(1, "sellaouti", "aymen", "as.jpg"),
      new Cv(2, "sellaouti", "skander", "cv.png"),
      new Cv(2, "Dhaouadi", "yassine", ""),
      new Cv(2, "Mourali", "sandra", "              "),
    ];
  }


  getPersonnesFromApi():Observable<Personne[]>{
    return this.httpClient.get<Personne[]>(this.link);
  }


  getCvs() {
    return this.cvs;
  }

  selectCv(cv: Cv) {
    this.selectCvSubject.next(cv);
  }
}
