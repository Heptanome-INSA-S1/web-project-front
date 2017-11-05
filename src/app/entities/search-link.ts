export class SearchLink {
  constructor(
    public  url: string,
    public title: string,
    public description: string,
    public content: string
  ) {}
}
/*
Exemple :
{
    "url": "string | The url of the link",
    "title": "string | The title of the link",
    "description": "string | A short description of the link's content",
    "content": "string | The content of the link"
}
 */
