import { Component, OnInit } from '@angular/core';
import {MovieService} from '../services/movie.service';
import {Work} from '../entities/movie-api/work';

@Component({
  selector: 'app-movie-detail',
  templateUrl: '../html/movie-detail.component.html',
  providers: [MovieService]
})

export class MovieDetailComponent implements OnInit {
  private movie: Work;
  constructor(
    private movieService: MovieService
  ) { }

  ngOnInit() {
    this.movieService
  }

}
