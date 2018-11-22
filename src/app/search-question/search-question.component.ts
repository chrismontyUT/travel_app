import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { searchQuestionResults } from './search-question.model'
import { answer } from '../shared/utils';

@Component({
  selector: 'app-search-question',
  templateUrl: './search-question.component.html',
  styleUrls: ['./search-question.component.scss']
})
export class SearchQuestionComponent implements OnInit {

	@Input('questionTitle') questionTitle: string;
	@Input() answerList: answer[];

	@Output() questionResult = new EventEmitter();

	questionResultsObject: searchQuestionResults;

  constructor() {
	}

  ngOnInit() {
			this.questionResultsObject = new searchQuestionResults(this.questionTitle);
	}

	// This method saves/removes each answer title to an array when it is clicked
	saveAnswer(answerClicked){
		this.questionResultsObject.answerList.indexOf(answerClicked) === -1 ?
								this.questionResultsObject.answerList.push(answerClicked) :			//push the new selection into the array
								this.questionResultsObject.answerList.splice(this.questionResultsObject.answerList.indexOf(answerClicked) , 1); //splice the selection from the array if it exists
	}

	reportAnswers(){
				this.questionResult.emit(this.questionResultsObject);
	}

}
