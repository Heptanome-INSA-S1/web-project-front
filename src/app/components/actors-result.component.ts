import {Component, Input} from '@angular/core';
import {Artist} from '../entities/movie-api/artist';
import {ACTORS} from '../app.constants';

@Component({
  selector: 'app-actor-result',
  templateUrl: '../html/actors-result.component.html',
  providers: []
})
export class ActorsResultsComponent {
  @Input() actors: Array<Artist>;
}
