import {Person} from './person';
import {Work} from './work';
import {URI} from './uri';

export class Artist extends Person {
  constructor(
    uri?: Array<URI>,
    name?: string,
    firstName?: string,
    photo?: string,
    birthDate?: string,
    deathDate?: string,
    biography?: string,
    children?: Array<Person>,
    partner?: Person,
    public filmography?: Array<Work>,
    public bestMovies?: Array<Work>
  ) {
    super(uri, name, firstName, photo, birthDate, deathDate, biography, children, partner);
  }
}
