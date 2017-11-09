import {Person} from './person';
import {Work} from './work';

export class Artist extends Person {
  constructor(
    name?: string,
    firstname?: string,
    birthDate?: string,
    deathDate?: string,
    biography?: string,
    children?: Array<Person>,
    partner?: Array<Person>,
    public filmography?: Array<Work>,
    public bestMovies?: Array<Work>
  ) {
    super(name, firstname, birthDate, deathDate, biography, children, partner);
  }
}
