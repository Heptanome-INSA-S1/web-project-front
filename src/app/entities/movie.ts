export class Movie {
  constructor(
    public budget: number,
    public englishName: string,
    public englishSynopsis: string,
    public frenchName: string,
    public frenchSynopsis: string,
    public gross: number,
    public uri: string
  ) {}
}
