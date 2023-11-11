import { Injectable } from '@angular/core';
import {Cv} from "../model/cv";

@Injectable({
  providedIn: 'root'
})
export class EmbaucheService {
  cvsEmbauche: Cv[] = [];

  constructor() {}

  embaucher(cv: Cv | boolean) {
    const index = this.cvsEmbauche.indexOf(cv as Cv);
    if (index === -1) {
      this.cvsEmbauche.push(cv as Cv);
      return true;
    } else {
      return false;
    }
  }

  getAllEmbauches() {
    return this.cvsEmbauche;
  }



}
