import {Movie} from './movie';
import {Person} from './person';

export class Artist extends Person{
  constructor(
    name: string,
    firstname: string,
    birthDate: string,
    deathDate: string,
    biography: string,
    children: Array<Person>,
    spouse: Array<Person>,
    public filmography: Array<Movie>,
    public bestMovies : Array<Movie>
  ) {
    super(name, firstname, birthDate, deathDate, biography, children, spouse);
  }
}
