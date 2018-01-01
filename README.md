# Super Friends

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.4.7.

## Basic Architecture

The key to creating this mini app was in how used the angular service and routing to accomplish one main goal. To sub route while tracking the parent. This becomes challenging when going three routes deep as we did in this app.

#### How Do We Nest Routes ?

the initially loaded route is the base or tab path but we set a child route to an eampty route to initialize with a child route and a welcome screen.
```
{
  path : 'tab',
  children : [
    { path : '', component : name },
    { path : ':variable', component : name, 
      children : [] .. .
      // go as deep as you like
    }
  ]
}
```
#### How Do We Track The Current SuperHero ?

Servces to the rescue! This mini app has a service named hero.service. This service keeps trackof two variables this.hero and this.attr. Both of these variable are initialized and manipulated through the service. When we need to know the current value we simple call the service which has kept track of all of the changes and just sends back the value.

```

public variable:any;

constructor(){
  this.variable
}

setVariable( newValue ){
    this.variable = newValue;
}

getVariable(){
    return this.variable
}
```

## Development server

Navigate to root folder

Run  `npm install` to install dependencies

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Powered By

* [Angular 2 / 4](https://angular.io/) - The web framework use.
* [Typescript](https://www.typescriptlang.org/docs/home.html) - Primary Coding Language
* [Sass](http://sass-lang.com/) - Primary Styling Language

## Authors

* **Andrew Stephenson** - *Initial work* - [Prolific Blueprint](https://github.com/ProlifcBluprint)


## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
