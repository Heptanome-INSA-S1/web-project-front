import {Work} from './work';
import {Season} from './season';
import {URI} from './uri';

export class Show extends Work {
  constructor(
    uri: Array<URI>,
    poster: string,
    title: string,
    releaseDate: string,
    plot: string,
    runtime: number,
    actors: Array<Artist>,
    genres: Array<string>,
    director: Array<Artist>,
    gross: number,
    budget: number,
    public numberSeason: number,
    public seasons: Array<Season>
  ) {
    super( uri, poster, title, releaseDate, plot, runtime, actors, genres, director, gross, budget);
  }
}
