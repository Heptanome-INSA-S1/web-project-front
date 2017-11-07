export class Alert {
  constructor(
    public title: string,
    public message: string,
    public type: string,
    public icon?: string
  ) {}
}
