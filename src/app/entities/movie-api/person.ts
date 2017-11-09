export class Person {
  constructor(
    public name?: string,
    public firstName?: string,
    public birthDate?: string,
    public deathDate?: string,
    public biography?: string,
    public children?: Array<Person>,
    public partner?: Array<Person>
  ) {}
}
