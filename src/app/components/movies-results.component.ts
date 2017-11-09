import {Component, Input} from '@angular/core';
import {Work} from '../entities/movie-api/work';
import {forEach} from '@angular/router/src/utils/collection';
import {MOVIE_EXEMPLE} from '../app.constants';

@Component({
  selector: 'app-movie-result',
  templateUrl: '../html/movies-result.component.html',
  providers: []
})
export class MoviesResultsComponent {
  @Input() movies: Array<Work>;
  //movies: Array<Work> = [MOVIE_EXEMPLE, MOVIE_EXEMPLE];

  public toHour(): number {
    return 0;
  }

  public firstThreeElement(array: Array<any> ): Array<any> {
    if (array.length < 3) {
      return array;
    }
    return [array[0], array[1], array[2]];
  }
}
