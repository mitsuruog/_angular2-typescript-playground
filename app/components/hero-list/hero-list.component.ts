import {Component, OnInit} from 'angular2/core';
import {Hero} from '../../models/hero';
import {HeroService} from '../../services/hero.service';
import {HeroDetailComponent} from '../hero-detail/hero-detail.component';

@Component({
  selector: 'hero-list',
  templateUrl: 'app/components/hero-list/hero-list.html',
  // 利用するComponents or Directivesを設定する
  directives: [HeroDetailComponent],
  // 利用するdependency injection providersを設定する
  providers: [HeroService]
})

export class HeroListComponent implements OnInit {

  heroes: Hero[]
  selectedHero: Hero

  constructor(private _service: HeroService) { }

  ngOnInit() {
    this.heroes = this._service.getHeros();
  }

  selectHero(hero: Hero) {
    this.selectedHero = hero;
  }

}