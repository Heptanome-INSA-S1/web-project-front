import {Person} from './person';
import {Work} from './work';
import {URI} from './uri';

export class Artist extends Person {
  constructor(
    uri?: URI,
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
    super(uri, name, firstName, birthDate, deathDate, biography, children, partner);
  }
}
