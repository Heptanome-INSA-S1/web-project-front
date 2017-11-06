export class Movie {
  constructor(
    public uri: string,
    public frenchName: string,
    public englishName: string,
    public gross: number,
    public budget: number,
    public englishSynopsis: string,
    public frenchSynopsis: string
  ) {}
}
