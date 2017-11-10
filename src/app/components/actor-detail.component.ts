import { Component, OnInit } from '@angular/core';
import {ActorService} from '../services/actor.service';
import {ActivatedRoute} from '@angular/router';
import {AlertService} from '../services/alert.service';
import {Artist} from '../entities/movie-api/artist';
import {Person} from '../entities/movie-api/person';
import {ACTOR_EXEMPLE} from '../app.constants';

@Component({
  selector: 'app-actor-detail',
  templateUrl: '../html/actor-detail.component.html',
  providers: [ActorService],
})


export class ActorDetailComponent implements OnInit {
  private actor: Artist = ACTOR_EXEMPLE;
  private charged: boolean;

  constructor(
    private actorService: ActorService,
    private alertService: AlertService,
    private route: ActivatedRoute
  ){}

  ngOnInit() {
      //this.getActor();
  }

  link(person: Person): string {
    return ActorService.parseUuidActor(person);
  }

  getActor(): void {
    this.charged = false;
    const id = this.route.snapshot.paramMap.get('id');
    this.actorService.getActorByResource(id)
      .then(res => {
        this.actor = res;
        this.charged = true;
      })
      .catch(res => {
        this.charged = true;
        this.alertService.warn('Error encountered', 'Error encontered with the actor api', 'warning');
      });
  }
}
