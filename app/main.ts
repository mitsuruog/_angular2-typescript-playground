import {bootstrap} from 'angular2/platform/browser';
import {AppComponent} from './app.component';

import {BackendService} from './services/backend.service';
import {Logger} from './services/logger.service';
import {HeroService} from './services/hero.service';
import {TaxCalculatorService} from './services/tax-calculator.service';

// [MEMO] singletonで使いたいやつはここで宣言すればいいのかな？にしても面倒だ。。。
bootstrap(AppComponent, [BackendService, Logger, HeroService, TaxCalculatorService]);
