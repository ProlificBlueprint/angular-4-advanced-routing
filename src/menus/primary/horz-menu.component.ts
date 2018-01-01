import { Component } from '@angular/core';
import { HeroService } from '../../services/hero.service';


@Component({
  selector: 'horz-menu',
  templateUrl: './horz-menu.component.html',
  styleUrls: ['./horz-menu.component.css']
})

export class HorizontalMenuComponent {

  attr : string;
  constructor( private _heroService : HeroService ){
    
    this.attr = this._heroService.getAttr();


    console.log('loaded horizontal component')
  }
}


