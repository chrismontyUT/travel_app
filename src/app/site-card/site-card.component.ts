import { Component, Input, OnInit } from '@angular/core';
import { iDiveSite } from "../common/models/diveSite";

@Component({
  selector: 'app-site-card',
  templateUrl: './site-card.component.html',
  styleUrls: ['./site-card.component.scss']
})
export class SiteCardComponent implements OnInit {

  @Input() siteName: string;

  constructor() { }

  ngOnInit() {
  }

}
