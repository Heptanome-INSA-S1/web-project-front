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
  {name: 'Google search', value: 'google', icon: 'google'}
  /*{name: 'TV-Show', value: 'shows', icon: 'tv'}*/
];

export function secondsToHms(d: number): string {
  const h = Math.floor(d / 3600);
  const m = Math.floor(d % 3600 / 60);
  return h + ' h ' + m + ' min';
}

export function firstNElement(array: Array<any>, n: number ): Array<any> {
  if (array.length < n) {
    return array;
  }
  let i: number;
  const res: Array<any> = [];
  for (i = 0; i < n; i++) {
    res.push(array[i]);
  }
  return res;
}
