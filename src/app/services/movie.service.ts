import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import {API_SERVER} from '../app.constants';
import {Movie} from '../entities/movie-api/movie';

@Injectable()
export class MovieService {

  constructor( private http: Http) {}

  private handleError(error: any): Promise<any> {
    console.error('An error occurred in MovieService: ', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }

  public getMovies(query: string): Promise<Array<Movie>> {
    query = '?q=' + query.trim().replace(/ /g, '+');
    return this.http.get(API_SERVER.movies + query)
      .toPromise()
      .then(res => {
        return res.json() as Array<Movie>;
      })
      .catch(this.handleError);
  }

  public getMovieByResource(resource: string): Promise<Movie> {
    return this.http.get(API_SERVER.movies + '/' + resource)
      .toPromise()
      .then(res => {
        return res.json() as Movie;
      })
      .catch(this.handleError);
  }
}
