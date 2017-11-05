import {Injectable} from '@angular/core';
import {Headers, Http} from '@angular/http';
import {SearchLink} from '../entities/search-link';
import {API_SERVER} from '../app.constants';

@Injectable()
export class APIService {
  private headers = new Headers({'Content-Type': 'application/json'});

  constructor( private http: Http) {}

  private handleError(error: any): Promise<any> {
    console.error('An error occurred in APIService: ', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }

  private getSearchLinks(query: string, offset?: number): Promise<Array<SearchLink>> {
    query = '?query=' + query.replace(' ', '+');
    if (offset) {
       query += '&offset=' + offset;
    }
    return this.http.get(API_SERVER.searchLink + query, {headers: this.headers})
      .toPromise()
      .catch(res =>{
        return res.json() as Array<SearchLink>;
      })
      .then(this.handleError);
  }
}
