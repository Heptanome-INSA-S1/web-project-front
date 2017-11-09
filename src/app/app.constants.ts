import {Filter} from './entities/filter';
import {Artist} from './entities/movie-api/artist';
import {Work} from './entities/movie-api/work';

export const API_SERVER: any = {
  url: 'http://localhost:8080/',
  searchLink: 'http://localhost:8080/searchLinks',
  fillContent: 'http://localhost:8080/fillContent',
  analyse: 'http://localhost:8080/analyze',
  rdf: 'http://localhost:8080/getRdf',
  movies: 'http://localhost:8080/movies',
  actors: 'http://localhost:8080/actors',
  shows: 'http://localhost:8080/tv-shows'
};

export const FILTER_OPTIONS: Array<Filter> = [
  {name: 'Acteurs', value: 'actors', icon: 'user'},
  {name: 'Films', value: 'movies', icon: 'film'},
  {name: 'TV-Show', value: 'shows', icon: 'tv'}
];

export const ACTOR_EXEMPLE: Artist = new Artist('thomas', '28/05/1995', '', 'genius', [], [], [], []);
export const MOVIE_EXEMPLE: Work = new Work([], '', 'Iron man', '2017', 'lore iiii iiii iii ii iii iii iii iii iii ii', 120,
   [ACTOR_EXEMPLE, ACTOR_EXEMPLE, ACTOR_EXEMPLE, ACTOR_EXEMPLE], ['Sci-Fi', 'Drama'], [], 56, 45);
