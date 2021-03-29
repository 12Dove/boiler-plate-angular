# TEXT
installing node
npm install -g @angular/cli
vs code run as admin, extention angular essentials

installing	ng new boiler-plate-angular
install bootstrap	copy bs folder in asset and call in index.html
componenet	ng g c nav-bar
routing
data tables

api connect	
1) import { HttpClientModule } from '@angular/common/http'; and declare HttpClientModule in app.module.ts
2) ng g s api
3) private httpClient: HttpClient in constructor of api.service
4) function banana he constructor ke baad
 getTodos(){
    return this.httpClient.get(`${this.REST_API_SERVER}/dashboard`);
  }

prod	ng build --prod --base-href "/clickCounter/"




****

# BoilerPlateAngular

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 11.1.1.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
