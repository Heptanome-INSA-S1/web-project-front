
import { Component, OnInit } from '@angular/core';
import {MovieService} from '../services/movie.service';
import {Work} from '../entities/movie-api/work';
import {ActivatedRoute} from '@angular/router';
import {AlertService} from '../services/alert.service';

@Component({
  selector: 'app-movie-detail',
  templateUrl: '../html/movie-detail.component.html',
  providers: [MovieService],
})
export class MovieDetailComponent implements OnInit {

  private movie: Work;
  private charged: boolean;
  private changingValue: number;
  constructor(
    private movieService: MovieService,
    private alertService: AlertService,
    private route: ActivatedRoute
  ) { }



  ngOnInit() {
    this.changingValue = 30;
    this.getMovie();
  }



getMovie(): void {
  this.changingValue = 60;
  this.charged = false;
  const id = this.route.snapshot.paramMap.get('id');
  this.movieService.getMovieByResource(id)
    .then(res => {
      this.changingValue = 100;
      this.movie = res;
      this.charged = true;
    })
    .catch(res => {
      this.changingValue = 100;
      this.charged = true;
      this.alertService.warn('Error encountered :', 'Error encountered with the tv-show API', 'warning');
    });
  }



}
