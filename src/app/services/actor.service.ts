import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import {API_SERVER} from '../app.constants';
import {Artist} from '../entities/movie-api/artist';
import {Person} from "../entities/movie-api/person";

@Injectable()
export class ActorService {

  public static parseUuidActor(actor: Person): string {
    let resource = '';
    for (let i = 0 ; i < actor.uri.length; i++) {
      if ( i === 1 ) {
        resource += '::';
      }
      resource += actor.uri[i].anchor + '@' + actor.uri[i].database;
    }
    return resource;
  }

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
    return this.http.get(API_SERVER.actors + '/unique?uuid=' + resource)
      .toPromise()
      .then(res => {
        return res.json() as Artist;
      })
      .catch(this.handleError);
  }
}
