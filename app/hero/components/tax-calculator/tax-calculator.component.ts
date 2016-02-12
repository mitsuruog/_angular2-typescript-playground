import {Component} from 'angular2/core';
import {TaxCalculatorService} from '../../services/tax-calculator.service';

@Component({
  selector: 'tax-calculator',
  templateUrl: 'app/hero/components/tax-calculator/tax-calculator.html',
  providers: [TaxCalculatorService]
})

export class TaxCalculatorComponent {
  
  constructor(private calculator: TaxCalculatorService) {}
  
  getTax(amount: number): number {
    return this.calculator.calculate(amount);
  }
  
}