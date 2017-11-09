export class Person {
  constructor(
    public name?: string,
    public firstname?: string,
    public birthDate?: string,
    public deathDate?: string,
    public biography?: string,
    public children?: Array<Person>,
    public spouse?: Array<Person>
  ) {}
}
