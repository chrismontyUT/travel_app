import { Component, OnInit} from '@angular/core';
import {questionList , Question} from './questionsList';

@Component({
	selector: 'app-search',
	providers: [],
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

	questionList: Question[]

  constructor (){
				this.questionList = questionList;
	};


  ngOnInit() {

	}


  onYesIKnow() {
    console.log('Yes I Know');
  }
  onNoIDont() {
    console.log('No I Dont');
	}
	generateJson(){

	}

}
