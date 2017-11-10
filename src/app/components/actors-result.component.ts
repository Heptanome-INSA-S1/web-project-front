import {Component, Input} from '@angular/core';
import {Artist} from '../entities/movie-api/artist';
import {firstNElement} from '../app.constants';
import {Work} from '../entities/movie-api/work';

@Component({
  selector: 'app-actor-result',
  templateUrl: '../html/actors-result.component.html',
  providers: []
})
export class ActorsResultsComponent {
  @Input() actors: Array<Artist>;
  getMovies(movies: Array<Work>): Array<Work> {
    return firstNElement(movies, 3);
  }
}
