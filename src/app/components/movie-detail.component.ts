
import { Component, OnInit } from '@angular/core';
import {MovieService} from '../services/movie.service';
import {Work} from '../entities/movie-api/work';
import {ActivatedRoute} from '@angular/router';
import {AlertService} from '../services/alert.service';

@Component({
  selector: 'app-movie-detail',
  templateUrl: '../html/movie-detail.component.html',
  providers: [MovieService, AlertService],
})
export class MovieDetailComponent implements OnInit {

  private movie: Work;
  private charged: boolean;

  constructor(
    private movieService: MovieService,
    private alertService: AlertService,
    private route: ActivatedRoute
) { }



ngOnInit() {
  this.getMovie();
}



getMovie(): void {

  this.charged = false;
  const id = this.route.snapshot.paramMap.get('id');
  this.movieService.getMovieByResource(id)
    .then(res => {
      this.movie = res;
      this.charged = true;
    })
    .catch(res => {
      this.charged = true;
      this.alertService.warn('Error encountered :', 'Error encountered with the tv-show API', 'warning');
    });
  }



}
