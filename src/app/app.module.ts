// Core
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MatRadioModule, MatButtonModule, MatToolbarModule } from '@angular/material';

// Main
import { AppComponent } from './app.component';
import { HeroService } from '../services/hero.service';

// Components handling route changes
import { AttrComponent } from './../attribute/attr.component';
import { CharacterComponent } from './../character/character.component';
import { ErrorComponent } from './../error/notfound.component';

// Menus
import { HorizontalMenuComponent } from './../menus/primary/horz-menu.component';
import { VerticalMenuComponent } from './../menus/secondary/vert-menu.component';
import { WelcomeComponent } from './../landing/welcome.component';
import { CharacterIntroComponent } from './../character/character-intro.component';


const ateamRoutes = [
{
  path: 'tab',
  children: [
      { path: '', component: WelcomeComponent , pathMatch: 'full'},
      { path: ':character', component: CharacterComponent,
        children: [
            { path: '', component: CharacterIntroComponent, outlet: 'attr' , pathMatch: 'full' },
            { path: ':type', component: AttrComponent, outlet: 'attr' }
        ]},
  ],
},
{ path: '**', redirectTo: 'tab' } ];


@NgModule({
  declarations: [
    AppComponent,
    AttrComponent,
    CharacterComponent,
    ErrorComponent,
    HorizontalMenuComponent,
    VerticalMenuComponent,
    WelcomeComponent,
    CharacterIntroComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatToolbarModule,
    MatRadioModule,
    RouterModule.forRoot( ateamRoutes , { 
      useHash: true
    })
  ],
  providers: [ HeroService ],
  bootstrap: [
    AppComponent,
    HorizontalMenuComponent
    // WelcomeComponent
  ]
})


export class AppModule { }
