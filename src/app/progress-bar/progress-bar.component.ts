import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-progress-bar',
  templateUrl: './progress-bar.component.html',
  styleUrls: ['./progress-bar.component.scss']
})
export class ProgressBarComponent implements OnInit {

  constructor() { }
  
  color = 'primary';
  mode = 'determinate';
  value = 50;
  bufferValue = 75;

  ngOnInit() {
  }

}
