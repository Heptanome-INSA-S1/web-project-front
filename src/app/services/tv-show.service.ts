import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import {API_SERVER} from '../app.constants';
import {Show} from '../entities/movie-api/show';
import {Season} from '../entities/movie-api/season';
import {Work} from '../entities/movie-api/work';

@Injectable()
export class TvShowService {

  constructor( private http: Http) {}

  private handleError(error: any): Promise<any> {
    console.error('An error occurred in TvShowService: ', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }

  public getTvShows(query: string, short: boolean): Promise<Array<Show>> {
    query = '?name=' + query.trim().replace(/ /g, '+') + '&short=' + short;
    return this.http.get(API_SERVER.shows + query)
      .toPromise()
      .then(res => {
        return res.json() as Array<Show>;
      })
      .catch(this.handleError);
  }

  public getTvShowByResource(resource: string): Promise<Show> {
    return this.http.get(API_SERVER.shows + '/' + resource)
      .toPromise()
      .then(res => {
        return res.json() as Show;
      })
      .catch(this.handleError);
  }

  public getTvShowSeasonByResource(resource: string, seasonNumber: number): Promise<Season> {
    return this.http.get( API_SERVER.shows + '/' + resource + '/' + seasonNumber)
      .toPromise()
      .then(res => {
        return res.json() as Season;
      })
      .catch(this.handleError);
  }

  public getTvShowEpisodeByResource(resource: string, seasonNumber: number, episodeNumber: number): Promise<Work> {
    return this.http.get( API_SERVER.shows + '/' + resource + '/' + seasonNumber + '/' + episodeNumber)
      .toPromise()
      .then(res => {
        return res.json() as Work;
      })
      .catch(this.handleError);
  }
}
