import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import {API_SERVER} from '../app.constants';
import {Work} from '../entities/movie-api/work';

@Injectable()
export class MovieService {

  public static parseUuidActor(movie: Work): string {
    let resource = '';
    for (let i = 0 ; i < movie.uri.length; i++) {
      if ( i === 1 ) {
        resource += '::';
      }
      resource += movie.uri[i].anchor + '@' + movie.uri[i].database;
    }
    return resource;
  }

  constructor( private http: Http) {}

  private handleError(error: any): Promise<any> {
    console.error('An error occurred in MovieService: ', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }

  public getMovies(query: string, short: boolean): Promise<Array<Work>> {
    query = '?name=' + query.trim().replace(/ /g, '+') + '&short=' + short;
    return this.http.get(API_SERVER.movies + query)
      .toPromise()
      .then(res => {
        return res.json() as Array<Work>;
      })
      .catch(this.handleError);
  }

  public getMovieByResource(resource: string): Promise<Work> {
    return this.http.get(API_SERVER.movies + '/unique?uuid=' + resource)
      .toPromise()
      .then(res => {
        return res.json() as Work;
      })
      .catch(this.handleError);
  }
}
