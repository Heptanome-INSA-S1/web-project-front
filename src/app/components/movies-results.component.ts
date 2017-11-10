import {Component, Input} from '@angular/core';
import {Work} from '../entities/movie-api/work';
import {secondsToHms, firstNElement} from '../app.constants';
import {Artist} from '../entities/movie-api/artist';
import {MovieService} from '../services/movie.service';

@Component({
  selector: 'app-movie-result',
  templateUrl: '../html/movies-result.component.html',
  providers: []
})
export class MoviesResultsComponent {
  @Input() movies: Array<Work>;
  link (movie: Work) {
    return MovieService.parseUuidActor(movie);
  };
  toHour(sec: number): string{
    return secondsToHms(sec);
  }
  getActors(actors: Array<Artist>): Array<Artist>{
    return firstNElement(actors, 3);
  }
}
