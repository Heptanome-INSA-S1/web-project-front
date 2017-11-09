import {Component} from '@angular/core';
import {APIService} from '../services/api.service';
import {SearchLink} from '../entities/google-search-api/search-link';
import {Movie} from '../entities/movie-api/movie';
import {MovieService} from '../services/movie.service';
import {AlertService} from '../services/alert.service';
import {Artist} from '../entities/movie-api/artist';
import {ActorService} from '../services/actor.service';

@Component({
  selector: 'app-search-page',
  templateUrl: '../html/search-page.component.html',
  providers: [APIService, MovieService, ActorService]
})
export class SearchPageComponent {
  query: string;
  searchLinks: Array<SearchLink>;
  movies: Array<Movie>;
  actors: Array<Artist>;
  searching = [false, false, false];
  constructor(
    private apiService: APIService,
    private movieService: MovieService,
    private alertService: AlertService,
    private actorService: ActorService
  ) {}
  search() {
    this.searching = [true, true, true];
    this.apiService.getSearchLinks(this.query)
      .then(res => {
        this.searchLinks = res;
        this.searching[0] = false;
      })
      .catch(res => {
        this.searching[0] = false;
        this.alertService.warn('Error encountered :', 'Error encountered with the Google search API', 'warning');
      });
    this.movieService.getMovies(this.query, true)
      .then(res => {
        this.movies = res;
        this.searching[1] = false;
      })
      .catch(res => {
        this.searching[1] = false;
        this.alertService.warn('Error encountered :', 'Error encountered with the movie API', 'warning');
      });
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
}
