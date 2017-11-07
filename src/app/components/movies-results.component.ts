import {Component, Input} from '@angular/core';
import {Movie} from '../entities/movie-api/movie';

@Component({
  selector: 'app-movie-result',
  templateUrl: '../html/movies-result.component.html',
  providers: []
})
export class MoviesResultsComponent {
  @Input() movies: Array<Movie>;
}
