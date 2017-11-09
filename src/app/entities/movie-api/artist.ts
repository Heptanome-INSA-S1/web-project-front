import {Person} from './person';
import {Work} from './work';

export class Artist extends Person{
  constructor(
    name?: string,
    birthDate?: string,
    deathDate?: string,
    biography?: string,
    children?: Array<Person>,
    spouse?: Array<Person>,
    public filmography?: Array<Work>,
    public bestMovies?: Array<Work>
  ) {
    super(name, birthDate, deathDate, biography, children, spouse);
  }
}
