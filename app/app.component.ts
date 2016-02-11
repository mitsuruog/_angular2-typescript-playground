import {Component} from 'angular2/core';
import {HeroListComponent} from './components/hero-list/hero-list.component';
import {TaxCalculatorComponent} from './components/tax-calculator/tax-calculator.component';

@Component({
  selector: 'my-app',
  template: `
    <h1>My first Angular2 App</h1>   
    <hero-list></hero-list>
    <tax-calculator></tax-calculator>
  `,
  directives: [HeroListComponent, TaxCalculatorComponent]
})

export class AppComponent { }