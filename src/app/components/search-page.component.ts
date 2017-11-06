import {Component} from '@angular/core';
import {APIService} from '../services/api.service';
import {SearchLink} from '../entities/search-link';
import {Movie} from '../entities/movie';
import {MovieService} from '../services/movie.service';

@Component({
  selector: 'app-search-page',
  templateUrl: '../html/search-page.component.html',
  providers: [APIService, MovieService]
})
export class SearchPageComponent {
  query: string;
  searchLinks: Array<SearchLink>;
  movies: Array<Movie>;
  searching = [false, false];
  constructor(private apiService: APIService, private movieService: MovieService) {}
  search() {
    this.searching = [true, true];
    this.apiService.getSearchLinks(this.query)
      .then(res => {
        this.searchLinks = res;
        this.searching[0] = false;
      });
    this.movieService.getMovies(this.query)
      .then(res => {
        console.log(res);
        this.movies = res;
        this.searching[1] = false;
      });
  }
}
