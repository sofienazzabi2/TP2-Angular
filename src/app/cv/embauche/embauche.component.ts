import { Component } from '@angular/core';
import {Cv} from "../model/cv";
import {EmbaucheService} from "../services/embauche.service";

@Component({
  selector: 'app-embauche',
  templateUrl: './embauche.component.html',
  styleUrls: ['./embauche.component.css']
})
export class EmbaucheComponent {
  constructor(private embaucheService: EmbaucheService) {}
  cvs: Cv[] = this.embaucheService.getAllEmbauches();


}
