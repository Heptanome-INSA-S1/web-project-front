import {Component} from '@angular/core';
import {APIService} from '../services/api.service';
import {SearchLink} from '../entities/search-link';

@Component({
  selector: 'app-search-page',
  templateUrl: '../html/search-page.component.html',
  providers: [APIService]
})
export class SearchPageComponent {
  query: string;
  searchLinks: Array<SearchLink>;
  searching = false;

  constructor(private apiService: APIService) {}
  search() {

    console.log(this.query);
    this.searching = true;
    this.apiService.getSearchLinks(this.query)
      .then(res => {
        this.searchLinks = res;
        this.searching = false;
        console.log(this.searchLinks);
      })
  }
}
