import { Component, Input } from '@angular/core';
import { AttrComponent } from './../attribute/attr.component';
import { CharacterComponent } from './../character/character.component';
import { RouterLink, ActivatedRoute } from '@angular/router';
import {Observable} from 'rxjs/Observable';
import 'rxjs';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  providers : [ RouterLink ],
  styleUrls: ['./welcome.component.css']
})

export class WelcomeComponent {

    isVisible : Boolean;
  
    constructor( private link : RouterLink, public activate : ActivatedRoute ){
      // activate.params.subscribe( data => {
      //   this.isVisible = true;
      // })
    }


}


