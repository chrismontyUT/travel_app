import { Component, OnInit , Input, Output} from '@angular/core';
import {searchQuestionCard} from './search-question-card.model';
import {answer} from '../shared/utils'

@Component({
  selector: 'app-search-question-card',
  templateUrl: './search-question-card.component.html',
  styleUrls: ['./search-question-card.component.scss']
})
export class SearchQuestionCardComponent implements OnInit {

  @Input() answer: answer;

  constructor() {
	 }

  ngOnInit() {
  }

}
