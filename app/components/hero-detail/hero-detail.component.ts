import {Component, Input} from 'angular2/core';
import {Hero} from '../../models/hero';

@Component({
  selector: 'hero-detail',
  templateUrl: 'app/components/hero-detail/hero-detail.html'
})

export class HeroDetailComponent {
  // [MEMO] metadata decorators
  // Input - ts https://angular.io/docs/ts/latest/api/core/Input-var.html
  // Declares a data-bound input property. Compenentから外にデータを連携する仕組み
  @Input() hero: Hero
  
}
