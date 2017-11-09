import {Filter} from './entities/filter';
import {Artist} from './entities/movie-api/artist';
import {Person} from './entities/movie-api/person';

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

export const ACTORS: Array<Artist> =
  [
    {
      name: 'Tatum',
      firstname: 'Channing',
      birthDate: '1980-4-26',
      deathDate: null,
      biography: 'Channing Tatum est un acteur, danseur, mannequin, producteur et réalisateur américain, né le 26 avril 1980 à Cullman' +
      ' (Alabama). Il est principalement connu pour avoir joué dans les films Sexy Dance,' +
      ' G.I. Joe : Le Réveil du Cobra, Il était une fois' +
      ' dans le Queens, Cher John, Je te promets, 21 Jump' +
      ' Street, Magic Mike, 22 Jump Street, Foxcatcher ,Les Huit Salopards et Jupiter : ' +
      'Le Destin de l\'univers.',
      children: [new Person('Joe', 'Biloute'), new Person('Joe', 'Michael')],
      partner: [new Person('Pierre', 'Biloute'), new Person('Paul', 'Jack')],
      filmography: [],
      bestMovies: []
    },
    {
      name: 'Tatum',
      firstname: 'Channing2',
      birthDate: '1980-4-26',
      deathDate: null,
      biography: 'Channing Tatum est un acteur, danseur, mannequin, producteur et réalisateur américain, né le 26 avril 1980 à Cullman' +
      ' (Alabama). Il est principalement connu pour avoir joué dans les films Sexy Dance,' +
      ' G.I. Joe : Le Réveil du Cobra, Il était une fois' +
      ' dans le Queens, Cher John, Je te promets, 21 Jump' +
      ' Street, Magic Mike, 22 Jump Street, Foxcatcher ,Les Huit Salopards et Jupiter : ' +
      'Le Destin de l\'univers.',
      children: [],
      partner: null,
      filmography: [],
      bestMovies: []
    }
  ];
