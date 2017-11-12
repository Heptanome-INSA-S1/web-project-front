import { Component, OnInit } from '@angular/core';
import {ActorService} from '../services/actor.service';
import {ActivatedRoute, Router} from '@angular/router';
import {AlertService} from '../services/alert.service';
import {Artist} from '../entities/movie-api/artist';
import {Person} from '../entities/movie-api/person';
import {secondsToHms} from '../app.constants';

@Component({
  selector: 'app-actor-detail',
  templateUrl: '../html/actor-detail.component.html',
  providers: [ActorService],
})


export class ActorDetailComponent implements OnInit {
  private actor: Artist;
  private charged = false;
  private uuid: string;

  constructor(
    private actorService: ActorService,
    private alertService: AlertService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    this.route
      .queryParams
      .subscribe(params => {
        // Defaults to 0 if no query param provided.
        this.uuid = params['uuid'] || '';
      });
      this.getActor();
  }

  link(person: Person): string {
    return ActorService.parseUuidActor(person);
  }

  getActor(): void {
    this.charged = false;
    this.actorService.getActorByResource(this.uuid)
      .then(res => {
        this.actor = res;
        this.charged = true;
      })
      .catch(res => {
        this.charged = true;
        this.alertService.warn('Error encountered', 'Error encontered with the actor api', 'warning');
      });
  }

  toHour(sec: number): string {
    return secondsToHms(sec);
  }
}
