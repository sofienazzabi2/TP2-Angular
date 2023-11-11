import { Component, Input } from "@angular/core";
import { Cv } from "../model/cv";
import { CvService } from "../services/cv.service";
import { Observable } from "rxjs";
import {EmbaucheService} from "../services/embauche.service";
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: "app-card",
  templateUrl: "./card.component.html",
  styleUrls: ["./card.component.css"],
})
export class CardComponent {
  cv$: Observable<Cv>;
  constructor(private cvService: CvService, private embaucheService: EmbaucheService,private toastr: ToastrService) {
    this.cv$ = this.cvService.selectCv$;
  }
  embaucherCv(cv: Cv) {
   // toast thing
    if(!this.embaucheService.embaucher(cv)){
      this.toastr.error('Ce cv est déjà sélectionné');

      }
  }

}
