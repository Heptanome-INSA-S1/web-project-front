import {Work} from './work';
import {URI} from './uri';
import {Artist} from './artist';

export class Season extends Work {
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
    public episodes: Array<Work>
  ) {
    super( uri, poster, title, releaseDate, plot, runtime, actors, genres, director, gross, budget);
  }
}
