import { Component, OnInit , AfterViewInit, QueryList, ViewChildren} from '@angular/core';
import { questionList , Question} from './questionsList';
import { SearchQuestionComponent } from '../search-question/search-question.component'

@Component({
	selector: 'app-search',
	providers: [],
  	templateUrl: './search.component.html',
  	styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit, AfterViewInit {

	@ViewChildren(SearchQuestionComponent) searchQuestionChildren: QueryList<SearchQuestionComponent>;
	questionList: Question[];
	currentQuestionID: number = 1;

	searchJson: any =  [
						{ 'id' : '1',
						'answers' : []
						},
						{ 'id' :'2',
						 'answers' : []
						},
						{ 'id':'3',
						 'answers' : []
						}
	];

  	constructor (){
		this.questionList = questionList;
	};


  	ngOnInit() {

	}

	ngAfterViewInit(){
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
	};

	getSelectedList(){
		this.searchJson.forEach(element => {
			if(element.id == this.currentQuestionID){
				return element.answers;
			};
		});
	}

	generateJson(questionResult){
		this.searchJson.forEach(element => {
			if(element.id == questionResult.questionID){
				element.answers = questionResult.answerList;
			};
		});
	};

}
