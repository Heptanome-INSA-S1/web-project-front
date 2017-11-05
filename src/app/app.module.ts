import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpModule} from '@angular/http';
import {SuiModule} from 'ng2-semantic-ui';
import {FormsModule} from '@angular/forms';

import { AppComponent } from './app.component';

import {APIService} from './services/api.service';
import {SearchPageComponent} from './components/search-page.component';

@NgModule({
  declarations: [
    AppComponent,
    SearchPageComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    SuiModule
  ],
  providers: [
    APIService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
