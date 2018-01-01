import { Component } from '@angular/core';
import { HorizontalMenuComponent } from './../menus/primary/horz-menu.component';
import { WelcomeComponent } from './../landing/welcome.component';
import { RouterLink , ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  providers : [ RouterLink ],
  styleUrls: ['./app.component.css']
})

export class AppComponent {

    constructor( ){
      //
    }
}


