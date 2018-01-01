import { Component, OnChanges, Input } from '@angular/core';
import { RouterLink, ActivatedRoute } from '@angular/router';
import {Observable} from 'rxjs/Observable';
import 'rxjs';
import { HeroService } from '../services/hero.service';

@Component({
  selector: 'app-character-intro',
  templateUrl: './character-intro.component.html',
  styleUrls: ['./character-intro.component.css']
})

export class CharacterIntroComponent {
  hero : string;
  details : string;
  
  constructor( public activate : ActivatedRoute , private _heroService : HeroService){

    this.hero = "";
    this.details = "";

    let hero_data = _heroService.getHeroData()

    activate.params.subscribe( data => {
      if(data.character){

        this.hero = data.character;
        this.details = hero_data[this.hero]
      }
    })

  }
}


