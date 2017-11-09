import {Component} from '@angular/core';
import {APIService} from '../services/api.service';
import {SearchLink} from '../entities/google-search-api/search-link';
import {MovieService} from '../services/movie.service';
import {AlertService} from '../services/alert.service';
import {FILTER_OPTIONS} from '../app.constants';
import {Filter} from '../entities/filter';
import {isUndefined} from 'util';
import {Artist} from '../entities/movie-api/artist';
import {ActorService} from '../services/actor.service';
import {Show} from '../entities/movie-api/show';
import {TvShowService} from '../services/tv-show.service';
import {Work} from '../entities/movie-api/work';

@Component({
  selector: 'app-search-page',
  templateUrl: '../html/search-page.component.html',
  providers: [APIService, MovieService, ActorService, TvShowService]
})
export class SearchPageComponent {
  query: string;
  filters: Array<Filter>;
  options: Array<Filter> = FILTER_OPTIONS;
  searchLinks: Array<SearchLink>;
  movies: Array<Work>;
  actors: Array<Artist>;
  shows: Array<Show>;
  searching = [false, false, false, false];
  constructor(
    private apiService: APIService,
    private movieService: MovieService,
    private alertService: AlertService,
    private actorService: ActorService,
    private showService: TvShowService
  ) {}
  search() {
    if (this.toSearch.google) {
      this.searching[0] = true;
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
    if (this.toSearch.movies) {
      this.searching[1] = true;
      this.movieService.getMovies(this.query, true)
        .then(res => {
          this.movies = res;
          this.searching[1] = false;
        })
        .catch(res => {
          this.searching[1] = false;
          this.alertService.warn('Error encountered :', 'Error encountered with the movie API', 'warning');
        });
    }
    if (this.toSearch.actors) {
      this.searching[2] = true;
      this.actorService.getActors(this.query, true)
        .then( res => {
          this.actors = res;
          this.searching[2] = false;
        })
        .catch( res => {
          this.searching[2] = false;
          this.alertService.warn('Error encountered :', 'Error encountered with the actor API', 'warning')
        });
    }
    if (this.toSearch.shows) {
      this.searching[3] = true;
      this.showService.getTvShows(this.query, true)
        .then( res => {
          this.shows = res;
          this.searching[3] = false;
        })
        .catch( res => {
          this.searching[3] = false;
          this.alertService.warn('Error encountered :', 'Error encountered with the tv-show API', 'warning')
        });
    }
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
