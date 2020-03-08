import { Component, OnInit , Input, Output , HostListener , EventEmitter} from '@angular/core';
import { answer } from '../shared/utils'
import * as d3 from 'd3';

@Component({
  selector: 'app-search-question-card',
  templateUrl: './search-question-card.component.html',
	styleUrls: ['./search-question-card.component.scss'],
})
export class SearchQuestionCardComponent implements OnInit {

	clicked: boolean = false;
	card: any;
	cardName: string;
	cardID: string;

	@Input() answer: answer;
	@Input() alreadyClicked: boolean;
	@Output() answerClicked = new EventEmitter();

  	constructor() {
	 }

	ngOnInit() {
		if(this.alreadyClicked) {
			this.clicked = true;
		}
		this.cardName = this.answer.altTitle ? this.answer.altTitle : this.answer.answerTitle;
		this.cardID = '#' + this.cardName;
	}

	cardSelected(event){
		this.card = d3.select(this.cardID);
  		if(this.clicked) {
  			this.card.style('opacity', 0);
		} else{
			this.card.style('opacity', 1);
		}

		this.clicked = !this.clicked;
		this.answerClicked.emit(this.answer.answerTitle);
	}


}
