import { Component, OnInit } from '@angular/core';
import {MovieService} from '../services/movie.service';
import {Work} from '../entities/movie-api/work';
import {ActivatedRoute, Router} from '@angular/router';
import {AlertService} from '../services/alert.service';
import {secondsToHms} from '../app.constants';

@Component({
  selector: 'app-movie-detail',
  templateUrl: '../html/movie-detail.component.html',
  providers: [MovieService],
})
export class MovieDetailComponent implements OnInit {

  private movie: Work;
  private uuid: string;
  private charged = false;
  constructor(
    private movieService: MovieService,
    private route: ActivatedRoute,
    private router: Router,
    private alertService: AlertService
  ) { }



  ngOnInit() {
    this.route
      .queryParams
      .subscribe(params => {
        // Defaults to 0 if no query param provided.
        this.uuid = params['uuid'] || '';
      });
    this.getMovie();
  }
  toHour(sec: number): string{
    return secondsToHms(sec);
  }



  getMovie(): void {
    this.charged = false;
    this.movieService.getMovieByResource(this.uuid)
      .then(res => {
        this.movie = res;
        this.charged = true;
      })
      .catch(res => {
        this.charged = true;
        this.alertService.warn('Error encountered :', 'Error encountered with the movie API', 'warning');
      });
  }



}
