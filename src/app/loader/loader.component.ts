import { Component, Input } from '@angular/core';
import { faAnchor } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.scss']
})
export class LoaderComponent {
  @Input() loading = false;
  @Input() text = 'Loading...';
  constructor() { }

  faSpinner = faAnchor;

}
