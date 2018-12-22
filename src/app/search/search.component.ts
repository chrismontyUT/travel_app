import { Component, ViewChildren, QueryList, OnChanges} from '@angular/core';
import { questionList , Question} from './questionsList';
import { SearchQuestionComponent } from '../search-question/search-question.component'
import { trigger, state, style, animate, transition } from '@angular/animations';

@Component({
	selector: 'app-search',
	providers: [],
  	templateUrl: './search.component.html',
	styleUrls: ['./search.component.scss'],
	animations: [
		trigger('slideIncrement', [
		  transition(':enter', [
			style({transform: 'translateX(100%)'}),
			animate('1000ms ease-in', style({transform: 'translateX(0%)'}))
		  ]),
		  transition(':leave', [
			animate('1ms ease-in', style({transform: 'translateX(-100%)'}))
		  ])
		]),
		/*trigger('slideDecrement', [
			transition(':enter', [
			  style({transform: 'translateX(-100%)'}),
			  animate('200ms ease-in', style({transform: 'translateX(0%)'}))
			]),
			transition(':leave', [
			  animate('200ms ease-in', style({transform: 'translateX(100%)'}))
			])
		  ])*/
	  ]
})
export class SearchComponent implements OnChanges {

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

	ngOnChanges(){
	}

	incrementCurrentQuestionID(){
		if(this.currentQuestionID == 3){
			return;
		}
		this.currentQuestionID += 1;
		console.log(this.searchJson);
	}

	decrementCurrentQuestionID(){
		if(this.currentQuestionID == 1){
			return;
		}
		this.currentQuestionID -= 1
		console.log(this.searchJson);

	};

	getAnswersFromComponent(){
		console.log(this.searchQuestionChildren.last.questionResultsObject.answerList);
		this.searchJson.forEach(element => {
			if(element.id == this.searchQuestionChildren.last.questionResultsObject.questionID){
				element.answers = this.searchQuestionChildren.last.questionResultsObject.answerList;
			};
		});
		console.log(this.searchJson);
	}

	getSelectedListToRecreateComponent(){
		this.searchJson.forEach(element => {
			if(element.id == this.currentQuestionID){
				console.log(element.answers);
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
