export class Annotation {
  constructor(
    public surface: string,
    public types: Array<string>,
    public support: number,
    public uri: string
  ) {}
}

/*
Exemple :
{
    "surface": "string | The text which triggers the resource",
    "types": "array of <string> | The list of types of the resource",
    "support": "integer | The index of the surface word in the text",
    "uri": "string | The resource URI"
}
 */
