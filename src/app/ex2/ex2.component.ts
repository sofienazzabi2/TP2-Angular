import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {Ex2RandomColorDirective} from "./ex2-random-color.directive";

@Component({
  selector: 'app-ex2',
  standalone: true,
  imports: [CommonModule, Ex2RandomColorDirective],
  templateUrl: './ex2.component.html',
  styleUrls: ['./ex2.component.css']
})
export class Ex2Component {

}
