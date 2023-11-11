import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule} from "@angular/forms";

@Component({
  selector: 'app-ex1',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './ex1.component.html',
  styleUrls: ['./ex1.component.css']})
export class Ex1Component {
  selectedColor: string = '#00AABB';
  fontSize: number = 16;
  fontFamily: string = 'verdana';
}
