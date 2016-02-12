import {Injectable} from 'angular2/core';
import {Hero} from '../models/hero';
import {HeroBackendService} from './hero-backend.service';
import {Logger} from '../../common/services/logger.service';

@Injectable()
export class HeroService {

  private heroes: Hero[] = [];

  constructor(
    private backend: HeroBackendService,
    private logger: Logger
   ) { }

  getHeros() {
    this.backend.getAll(Hero).then((heroes) => {
      this.logger.log(`Fetched ${heroes.length} heroes.`);
      // [MEMO] ...は配列を展開するシンタックスシュガーみたい
      this.heroes.push(...heroes);
    })
    return this.heroes;
  }

}