import { Component, OnInit } from '@angular/core';
import {ActorService} from '../services/actor.service';
import {ActivatedRoute} from '@angular/router';
import {AlertService} from '../services/alert.service';
import {Artist} from '../entities/movie-api/artist';

@Component({
  selector: 'app-movie-detail',
  templateUrl: '../html/actor-detail.component.html',
  providers: [ActorService],
})


export class ActorDetailComponent implements OnInit {
  private actor: Artist;
  private charged: boolean;

  constructor(
    private actorService: ActorService,
    private alertService: AlertService,
    private route: ActivatedRoute
  ){}

  ngOnInit() {
      this.getActor();
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
