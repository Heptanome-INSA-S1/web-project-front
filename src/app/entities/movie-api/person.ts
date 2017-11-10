import {URI} from './uri';

export class Person {
  constructor(
    public uri?: Array<URI>,
    public name?: string,
    public firstName?: string,
    public birthDate?: string,
    public deathDate?: string,
    public biography?: string,
    public children?: Array<Person>,
    public partner?: Array<Person>
  ) {}
}
