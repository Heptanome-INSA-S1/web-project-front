import {Person} from './person';
import {Work} from './work';

export class Artist extends Person {
  constructor(
    name?: string,
    firstName?: string,
    birthDate?: string,
    deathDate?: string,
    biography?: string,
    children?: Array<Person>,
    partner?: Array<Person>,
    public filmography?: Array<Work>,
    public bestMovies?: Array<Work>
  ) {
    super(name, firstName, birthDate, deathDate, biography, children, partner);
  }
}
