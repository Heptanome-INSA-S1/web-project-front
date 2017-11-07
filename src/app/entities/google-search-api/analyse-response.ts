import {Annotation} from './annotation';

export class AnalyseResponse {
  constructor(
    public uri: string,
    public annotations: Array<Annotation>
  ) {}
}
