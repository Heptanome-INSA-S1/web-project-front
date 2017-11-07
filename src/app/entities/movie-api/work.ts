import {URI} from './uri';

export class Work {
  constructor(
    public uri: Array<URI>,
    public poster: string,
    public title: string,
    public releaseDate: string,
    public plot: string,
    public runtime: number,
    public actors: Array<Artist>,
    public genres: Array<string>,
    public director: Array<Artist>,
    public gross: number,
    public budget: number
  ) {}
}


/*
Work {
    uri : Array<URI> | Liens des ressources,
    poster : string | Liens de l’affiche,
    title : string | Titre en français en priorité sinon anglais,
    releaseDate: Date | Date d’apparition,
    plot: string | Résumé,
    runtime : integer,
    actors: Array<Artist>, | Casting
genres : Array<string> | Genres
    director: Array<Artist> | Réalisateurs,
gross: double | Revenus,
    budget: double | Budget
}

 */
