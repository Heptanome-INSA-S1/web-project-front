import {RouterModule, Routes} from '@angular/router';
import {SearchPageComponent} from './components/search-page.component';
import {NgModule} from '@angular/core';
import {MovieDetailComponent} from './components/movie-detail.component';
import {ActorDetailComponent} from './components/actor-detail.component';



const appRoutes: Routes = [
  {path: '', redirectTo: '/search-page', pathMatch: 'full'},
  {path: 'search-page', component: SearchPageComponent},
  {path: 'movie/:id', component: MovieDetailComponent},
  {path: 'actor/:id', component: ActorDetailComponent}
];





@NgModule({
  imports: [
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    )
  ],

  exports: [
    RouterModule
  ]

})

export class AppRoutingModule {}
