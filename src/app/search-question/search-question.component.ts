import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { searchQuestionResults } from './search-question.model'
import { answer } from '../shared/utils';
import { MapService } from "../services/map.service";

@Component({
  selector: 'app-search-question',
  templateUrl: './search-question.component.html',
  styleUrls: ['./search-question.component.scss']
})
export class SearchQuestionComponent implements OnInit {

	@Input('questionTitle') questionTitle: string;
	@Input('questionID') questionID: number;
	@Input() answerList: answer[];

	questionResultsObject: searchQuestionResults;

  	constructor(
  		private readonly mapService: MapService)
	{ }

  	ngOnInit() {
		this.questionResultsObject = new searchQuestionResults(this.questionID);
	}

	// This method saves/removes each answer title to an array when it is clicked
	saveAnswer(answerClicked){
		this.questionResultsObject.answerList.indexOf(answerClicked) === -1 ?
								this.appendAnswer(answerClicked) :	//push the new selection into the array
								this.removeAnswer(answerClicked); //splice the selection from the array if it exists
  	}

  	appendAnswer(answerClicked : string) {
		this.questionResultsObject.answerList.push(answerClicked);
		this.mapService.updateAnswers(answerClicked, 'append', this.questionTitle)
	}

	removeAnswer(answerClicked : string) {
		this.questionResultsObject.answerList.splice(this.questionResultsObject.answerList.indexOf(answerClicked, 1));
		this.mapService.updateAnswers(answerClicked, 'remove', this.questionTitle)
	}
}
