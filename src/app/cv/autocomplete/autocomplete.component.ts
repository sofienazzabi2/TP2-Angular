import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { debounceTime, distinctUntilChanged, switchMap } from 'rxjs/operators';
import { CvService } from '../services/cv.service';
import { Cv } from '../model/cv';

@Component({
  selector: 'app-autocomplete',
  templateUrl: './autocomplete.component.html',
  styleUrls: ['./autocomplete.component.css'],
})
export class AutocompleteComponent implements OnInit {
  searchForm: FormGroup;
  searchResults: Cv[] = [];

  constructor(
    private formBuilder: FormBuilder,
    private cvService: CvService,
    private router: Router
  ) {
    this.searchForm = this.formBuilder.group({
      search: [''],
    });
  }

  ngOnInit(): void {
    this.searchForm
      .get('search')
      ?.valueChanges.pipe(
        debounceTime(300),
        distinctUntilChanged(),
        switchMap((searchTerm) => this.cvService.searchCvsByName(searchTerm))
      )
      .subscribe((results) => {
        console.log(results);
        this.searchResults = results;
      });
  }

  onSelect(cv: Cv): void {
    this.router.navigate(['cv', cv.id]);
  }
}
