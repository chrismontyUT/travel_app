import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { searchQuestion } from './search-question.model'
import { answer } from '../shared/utils';
import { FlexLayoutModule } from '@angular/flex-layout'

@Component({
  selector: 'app-search-question',
  templateUrl: './search-question.component.html',
  styleUrls: ['./search-question.component.scss']
})
export class SearchQuestionComponent implements OnInit {

	@Input('questionTitle') questionTitle: string;
	@Input() answerList: answer[];

  constructor() {
	}

  ngOnInit() {
  }

}
