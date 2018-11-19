import { Component, OnInit , Input, Output , HostListener , EventEmitter} from '@angular/core';
import {searchQuestionCard} from './search-question-card.model';
import { trigger, state, style, animate, transition } from '@angular/animations';
import {answer} from '../shared/utils'

@Component({
  selector: 'app-search-question-card',
  templateUrl: './search-question-card.component.html',
	styleUrls: ['./search-question-card.component.scss'],
	animations: [
		trigger('cardState' , [
			state('shiftUp' , style({
				transform: 'translateY(-50px)'
			})),
			transition('* => *'  , animate('500ms ease-out'))
		]
		)
	]
})
export class SearchQuestionCardComponent implements OnInit {

	isRaised: boolean = false;
	cardState: string;

  	@Input() answer: answer;
	@Output() answerClicked = new EventEmitter();

  	@HostListener('mouseenter')
  	onMouseEnter() {
		this.isRaised = true;
		this.cardState = 'shiftUp';
  	}

  	@HostListener('mouseleave')
  	onMouseLeave() {
		this.isRaised = false;
		this.cardState = 'neutral';
  	}

  	constructor() {
	 }

	ngOnInit() {
	}

	cardSelected(){
		this.answerClicked.emit(this.answer.answerTitle);
	}


}
