import {Filter} from './entities/filter';

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
