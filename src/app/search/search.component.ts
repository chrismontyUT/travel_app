import { Component, OnInit, HostBinding } from '@angular/core';
import { SearchService } from '../services/search.service';


@Component({
	selector: 'app-search',
	providers: [SearchService],
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

	@HostBinding('class.is-open')
	isOpen: boolean = false;


  constructor (private SearchService: SearchService){

	}

  ngOnInit() {
		this.SearchService.change.subscribe(isOpen => {
			this.isOpen = isOpen;
			console.log(this.isOpen);
		});
	}


  onYesIKnow() {
    console.log('Yes I Know');
  }
  onNoIDont() {
    console.log('No I Dont');
  }
}
