import { Component, OnInit , Input, Output , HostListener , EventEmitter} from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';
import {answer} from '../shared/utils'

@Component({
  selector: 'app-search-question-card',
  templateUrl: './search-question-card.component.html',
	styleUrls: ['./search-question-card.component.scss'],
	/*animations: [
		trigger('cardState' , [
			state('shiftUp' , style({
				transform: 'translateY(-50px)'
			})),
			transition('* => *'  , animate('500ms ease-out'))
		]
		)
	]*/
})
export class SearchQuestionCardComponent implements OnInit {

	isRaised: boolean = false;
	cardState: string;
	clicked: boolean = false;

	@Input() answer: answer;
	@Input() alreadyClicked: boolean;
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
		if(this.alreadyClicked){
			this.clicked = true;
		}
	}

	cardSelected(event){
		this.clicked = !this.clicked;
		this.answerClicked.emit(this.answer.answerTitle);
	}


}
