import { Component, OnChanges, Input } from '@angular/core';
import { RouterLink, ActivatedRoute } from '@angular/router';
import {Observable} from 'rxjs/Observable';
import 'rxjs';
import { HeroService } from '../services/hero.service';
import { routerTransitionLeft } from './../services/route.transitions';

@Component({
  selector: 'app-character',
  templateUrl: './character.component.html',
  styleUrls: ['./character.component.css'],
  animations: [routerTransitionLeft()],
  host: {'[@routerTransitionLeft]': ''}
})

    



export class CharacterComponent {
  main_tab : string;
  hero : string;

  constructor( public activate : ActivatedRoute , private _heroService : HeroService){
    //reset
    this.main_tab = "";
    
    activate.params.subscribe( data => {
      console.log(data);
      
      if(data.character){
        this.hero = data.character;
        this.main_tab = '/tab/' + data.character;
        this._heroService.setHero(this.hero);
      }
      
    })

  }
}


