import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpModule} from '@angular/http';
import {SuiModule} from 'ng2-semantic-ui';
import {FormsModule} from '@angular/forms';

import {APIService} from './services/api.service';
import {MovieService} from './services/movie.service';
import {AlertService} from './services/alert.service';

import { AppComponent } from './app.component';
import {SearchPageComponent} from './components/search-page.component';
import {GoogleResultComponent} from './components/google-result.component';
import {MoviesResultsComponent} from './components/movies-results.component';
import {AlertComponent} from './components/alert.component';

@NgModule({
  declarations: [
    AppComponent,
    SearchPageComponent,
    GoogleResultComponent,
    MoviesResultsComponent,
    AlertComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    SuiModule
  ],
  providers: [
    APIService,
    MovieService,
    AlertService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
