import { Component } from '@angular/core';
import { RouterLink, ActivatedRoute } from '@angular/router';
import {Observable} from 'rxjs/Observable';
import 'rxjs';
import { HeroService } from '../../services/hero.service';

@Component({
  selector: 'vert-menu',
  templateUrl: './vert-menu.component.html',
  styleUrls: ['./vert-menu.component.css']
})

export class VerticalMenuComponent {
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


