import {Component, Input} from '@angular/core';
import {SearchLink} from '../entities/search-link';

@Component({
  selector: 'app-google-result',
  templateUrl: '../html/google-result.component.html',
  providers: []
})
export class GoogleResultComponent {
  @Input() searchLinks: Array<SearchLink>;
}
