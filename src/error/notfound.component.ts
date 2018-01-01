import { Component } from '@angular/core';

@Component({
  selector: 'app-error',
  templateUrl: './notfound.component.html',
  styleUrls: ['./notfound.component.css']
})

export class ErrorComponent {
  title = 'Error';

  constructor(){
    console.log('loaded err component')
  }
}


