import {Component} from 'angular2/core';
import {HeroListComponent} from './components/hero-list/hero-list.component';
import {TaxCalculatorComponent} from './components/tax-calculator/tax-calculator.component';

import {HeroBackendService} from './services/hero-backend.service';
import {HeroService} from './services/hero.service';
import {TaxCalculatorService} from './services/tax-calculator.service';

@Component({
  selector: 'my-hero',
  templateUrl: 'app/hero/hero.html',
  directives: [HeroListComponent, TaxCalculatorComponent],
  providers: [HeroBackendService, HeroService, TaxCalculatorService]
})

export class HeroComponent { }
