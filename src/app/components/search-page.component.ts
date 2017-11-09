import {Component} from '@angular/core';
import {APIService} from '../services/api.service';
import {SearchLink} from '../entities/google-search-api/search-link';
import {Movie} from '../entities/movie-api/movie';
import {MovieService} from '../services/movie.service';
import {AlertService} from '../services/alert.service';
import {FILTER_OPTIONS} from '../app.constants';
import {Filter} from '../entities/filter';
import {noUndefined} from '@angular/compiler/src/util';
import {isUndefined} from 'util';

@Component({
  selector: 'app-search-page',
  templateUrl: '../html/search-page.component.html',
  providers: [APIService, MovieService]
})
export class SearchPageComponent {
  query: string;
  filters: Array<Filter>;
  options: Array<Filter> = FILTER_OPTIONS;
  searchLinks: Array<SearchLink>;
  movies: Array<Movie>;
  searching = [false, false];
  constructor(private apiService: APIService, private movieService: MovieService, private alertService: AlertService) {}
  search() {
    this.searching = [true, true];
    if (this.toSearch.google) {
      this.apiService.getSearchLinks(this.query)
        .then(res => {
          this.searchLinks = res;
          this.searching[0] = false;
        })
        .catch(res => {
          this.searching[0] = false;
          this.alertService.warn('Error encountered :', 'Error encountered with the Google search API', 'warning');
        });
    }

    this.movieService.getMovies(this.query)
      .then(res => {
        this.movies = res;
        this.searching[1] = false;
      })
      .catch(res => {
        this.searching[1] = false;
        this.alertService.warn('Error encountered :', 'Error encountered with the movie API', 'warning');
      });
  }
  get toSearch(): any {
    return {
      google: <boolean>(!this.filters),
      actors: <boolean>(!this.filters || (!isUndefined(this.filters.find(item => item.value === 'actors')))),
      movies: <boolean>(!this.filters || (!isUndefined(this.filters.find(item => item.value === 'movies')))),
      shows: <boolean>(!this.filters || (!isUndefined(this.filters.find(item => item.value === 'shows'))))
    };
  }
}
