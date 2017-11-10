import { Component, Input } from '@angular/core';
import {Show} from '../entities/movie-api/show';
import {firstNElement} from '../app.constants';
import {Work} from '../entities/movie-api/work';
import {Artist} from '../entities/movie-api/artist';

@Component({
  selector : 'app-show-result',
  templateUrl : '../html/shows-results.component.html',
  providers : []
})

export class ShowsResultsComponent {
  @Input() shows: Array<Show>;
  getActors(actors: Array<Artist>): Array<Artist>{
    return firstNElement(actors, 3);
  }
}
