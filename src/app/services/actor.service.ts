import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import {API_SERVER} from '../app.constants';
import {Artist} from '../entities/movie-api/artist';

@Injectable()
export class ActorService {

  constructor( private http: Http) {}

  private handleError(error: any): Promise<any> {
    console.error('An error occurred in ActorService: ', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }

  public getActors(query: string, short: boolean): Promise<Array<Artist>> {
    query = '?name=' + query.trim().replace(/ /g, '+') + '&short=' + short;
    return this.http.get(API_SERVER.actors + query)
      .toPromise()
      .then(res => {
        return res.json() as Array<Artist>;
      })
      .catch(this.handleError);
  }

  public getActorByResource(resource: string): Promise<Artist> {
    return this.http.get(API_SERVER.actors + '/' + resource)
      .toPromise()
      .then(res => {
        return res.json() as Artist;
      })
      .catch(this.handleError);
  }
}
