import { Component, OnInit} from '@angular/core';
import {questionList , Question} from './questionsList';

@Component({
	selector: 'app-search',
	providers: [],
  	templateUrl: './search.component.html',
  	styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

	questionList: Question[];
	currentQuestionID: number = 1;

	searchJson: any = {'Where Are You Going?' : [],
						'What Type of Scuba Diving Would You Like To Do?' : [],
						'What Animals Would You Like to See?': []}

  	constructor (){
		this.questionList = questionList;
	};


  	ngOnInit() {

	}

	incrementCurrentQuestionID(){
		if(this.currentQuestionID == 3){
			return;
		}
		this.currentQuestionID += 1;
	}

	decrementCurrentQuestionID(){
		if(this.currentQuestionID == 1){
			return;
		}
		this.currentQuestionID -= 1
	}

	generateJson(questionResult){
			console.log(questionResult);
	}

}
