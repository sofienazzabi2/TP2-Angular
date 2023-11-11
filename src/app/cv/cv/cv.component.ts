import {Component, OnInit} from "@angular/core";
import { Cv } from "../model/cv";
import { CvService } from "../services/cv.service";
import { distinctUntilChanged } from "rxjs";
import {EmbaucheService} from "../services/embauche.service";
import {Personne} from "../model/personne";
import {ToastrService} from "ngx-toastr";

@Component({
  selector: "app-cv",
  templateUrl: "./cv.component.html",
  styleUrls: ["./cv.component.css"],
})
export class CvComponent implements OnInit {
  nb = 0;
  cvs: Cv[] = [];
  constructor(private cvService: CvService,private toastr: ToastrService) {
    this.cvService.selectCv$
      .pipe(distinctUntilChanged())
      .subscribe(() => this.nb++);
  }

  ngOnInit(): void {
    this.cvService.getPersonnesFromApi().subscribe(
      (personnes)=>{
        this.cvs=personnes;
      },error => {
          this.toastr.error('Le fetch api a échoué');
        this.cvs = this.cvService.getCvs();
        }
    )
  }




}
