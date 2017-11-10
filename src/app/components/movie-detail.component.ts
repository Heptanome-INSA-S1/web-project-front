
import { Component, OnInit } from '@angular/core';
import {MovieService} from '../services/movie.service';
import {Work} from '../entities/movie-api/work';
import {ActivatedRoute, Router} from '@angular/router';
import {AlertService} from '../services/alert.service';

@Component({
  selector: 'app-movie-detail',
  templateUrl: '../html/movie-detail.component.html',
  providers: [MovieService],
})
export class MovieDetailComponent implements OnInit {

  private movie: Work;
  private uuid: string;
  private charged: boolean;
  private changingValue: number;
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
    this.changingValue = 30;
    this.getMovie();
  }

  secondsToHms(d: number): string {
    const h = Math.floor(d / 3600);
    const m = Math.floor(d % 3600 / 60);
    return h + ' h ' + m + ' min';
  }



  getMovie(): void {
    this.changingValue = 60;
    this.charged = false;
    this.movieService.getMovieByResource(this.uuid)
      .then(res => {
        this.changingValue = 100;
        this.movie = res;
        this.charged = true;
      })
      .catch(res => {
        this.changingValue = 100;
        this.charged = true;
        this.alertService.warn('Error encountered :', 'Error encountered with the movie API', 'warning');
      });
  }



}
