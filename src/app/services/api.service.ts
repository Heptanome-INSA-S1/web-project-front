import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import {SearchLink} from '../entities/google-search-api/search-link';
import {API_SERVER} from '../app.constants';
import {DBpediaQuery} from '../entities/google-search-api/dbpedia-query';
import {AnalyseResponse} from '../entities/google-search-api/analyse-response';

@Injectable()
export class APIService {

  constructor( private http: Http) {}

  private handleError(error: any): Promise<any> {
    console.error('An error occurred in APIService: ', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }

  public getSearchLinks(query: string, offset?: number): Promise<Array<SearchLink>> {
    query = '?query=' + query.trim().replace(/ /g, '+');
    if (offset) {
       query += '&offset=' + offset;
    }
    return this.http.get(API_SERVER.searchLink + query)
      .toPromise()
      .then(res => {
        return res.json() as Array<SearchLink>;
      })
      .catch(this.handleError);
  }

  public fillContent(links: Array<SearchLink>): Promise<Array<SearchLink>> {
    return this.http.put(API_SERVER.fillContent, links)
      .toPromise()
      .then(res => {
        return res.json() as Array<SearchLink>;
      })
      .catch(this.handleError)
  }

  public analyse(dbpediaQuery: DBpediaQuery): Promise<Array<AnalyseResponse>> {
    return this.http.post(API_SERVER.fillContent, dbpediaQuery)
      .toPromise()
      .then(res => {
        return res.json() as Array<AnalyseResponse>;
      })
      .catch(this.handleError);
  }
}
