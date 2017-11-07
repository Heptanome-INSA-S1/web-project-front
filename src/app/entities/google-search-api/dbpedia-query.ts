import {SearchLink} from "./search-link";

export class DBpediaQuery {
  constructor(
    public confidence: number,
    public support: number,
    public ressources: Array<SearchLink>
  ) {}
}
/*
Exemple :
{
	"confidence": "double | Confidence of dbpedia in the result (from 0 to 1.0)",
	"support": "integer | The minimal require number of in egdes on the resource in DBpedia",
	"resources": "array of <SearchLink> | The search links to analyse"
}
 */
