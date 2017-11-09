import { Component, Input } from '@angular/core';
import {Work} from '../entities/movie-api/work';
import { Season } from '../entities/movie-api/season';
import {MOVIE_EXEMPLE, SEASON_EXEMPLE, SHOW_EXEMPLE} from '../app.constants';
import {Show} from '../entities/movie-api/show';

@Component({
  selector : 'app-show-result',
  templateUrl : '../html/shows-results.component.html',
  providers : []
})

export class ShowsResultsComponent {
  @Input() shows: Array<Show>;
  //shows: Array<Show> = [SHOW_EXEMPLE, SHOW_EXEMPLE, SHOW_EXEMPLE];

  public firstThreeElement(array: Array<any> ): Array<any> {
    if (array.length < 3) {
      return array;
    }
    return [array[0], array[1], array[2]];
  }
}
