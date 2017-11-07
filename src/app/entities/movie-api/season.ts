export class Season implements Work{
  constructor(
    public numberSeason: number,
    public episodes: Array<Work>
  ){}
}
