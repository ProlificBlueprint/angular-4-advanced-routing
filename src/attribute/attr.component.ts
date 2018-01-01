import { Component } from '@angular/core';
import { RouterLink, ActivatedRoute } from '@angular/router';
import {Observable} from 'rxjs/Observable';
import 'rxjs';
import { HeroService } from '../services/hero.service';
import { routerTransitionTop } from './../services/route.transitions';


@Component({
  selector: 'app-attr',
  providers : [ RouterLink ],
  templateUrl: './attr.component.html',
  styleUrls: ['./attr.component.css'],
  animations: [routerTransitionTop()],
  host: {'[@routerTransitionTop]': ''}
})

export class AttrComponent {

  my_attr : string;
  my_hero : string;
  details : any;

  constructor( private link : RouterLink, public activate : ActivatedRoute, private _heroService : HeroService ){
    // reset
    this.my_attr = "Loading.. .";
    this.my_hero = "Loading.. ."
    

    let hero_data = _heroService.getHeroData()

    // get
    activate.params.subscribe( params => {

      this.my_hero = this._heroService.getHero();
      
      if(params.type){
        this.details = hero_data[this.my_hero][params.type]
        this._heroService.setAttr(params.type)
        this.my_attr = params.type;
      }
    })
  }
}


