import { Component, OnInit } from '@angular/core';
import { Question } from '../shared/utils';
import { questionList } from './questionsList';
import { SearchQuestionComponent } from '../search-question/search-question.component'
import { MapService } from "../services/map.service";
import {Observable} from "rxjs";
import { Router } from "@angular/router";

@Component({
	selector: 'app-search',
	providers: [],
  	templateUrl: './search.component.html',
	styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

	questionList: Question[];
	public newSearchRegions$: Observable<string[]>;
	public newSearchDiveTypes$: Observable<string[]>;
	public newSearchAnimalTypes$: Observable<string[]>;


  	constructor (
  		private readonly mapService: MapService,
		private router: Router
	){
	};

  	ngOnInit(): void {
		this.questionList = questionList;
		this.newSearchRegions$ = this.mapService.newSearchRegions;
		this.newSearchDiveTypes$ = this.mapService.newSearchDiveTypes;
		this.newSearchAnimalTypes$ = this.mapService.newSearchAnimalTypes;
	}

	submitSearch() {
  		this.mapService.sendNewSearch();
  		this.router.navigate(['./Map']);
	}
}
