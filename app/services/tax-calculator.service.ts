import {Injectable} from 'angular2/core';

const TAX_RATE = 0.08;

@Injectable()
export class TaxCalculatorService {

  // [MEMO] | を使うと複数typeを指定できる
  calculate(input: string | number): number {
    let amount: number;
    amount = (typeof input === 'string') ? parseFloat(input) : input;
    return (amount || 0) * TAX_RATE;
  }

}