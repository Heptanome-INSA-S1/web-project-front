import {Component, Input} from '@angular/core';
import {Artist} from '../entities/movie-api/artist';
import {firstNElement} from '../app.constants';
import {Work} from '../entities/movie-api/work';
import {ActorService} from '../services/actor.service';
import {Person} from '../entities/movie-api/person';

@Component({
  selector: 'app-actor-result',
  templateUrl: '../html/actors-result.component.html',
  providers: []
})
export class ActorsResultsComponent {
  @Input() actors: Array<Artist>;

  getMovies(movies: Array<Work>): Array<Work> {
    return firstNElement(movies, 3);
  }

  link (person: Person) {
    return ActorService.parseUuidActor(person);
  };
}
