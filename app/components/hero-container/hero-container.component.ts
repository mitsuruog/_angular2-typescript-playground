import {Component} from 'angular2/core';
import {HeroListComponent} from '../hero-list/hero-list.component';
import {TaxCalculatorComponent} from '../tax-calculator/tax-calculator.component';

import {HeroBackendService} from '../../services/hero-backend.service';
import {HeroService} from '../../services/hero.service';
import {TaxCalculatorService} from '../../services/tax-calculator.service';


@Component({
  selector: 'my-hero',
  templateUrl: 'app/components/hero-container/hero-container.html',
  directives: [HeroListComponent, TaxCalculatorComponent],
  providers: [HeroBackendService, HeroService, TaxCalculatorService]
})

export class HeroContainerComponent { }
