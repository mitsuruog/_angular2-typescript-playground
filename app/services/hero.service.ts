import {Injectable} from 'angular2/core';
import {Hero} from '../models/hero';
import {BackendService} from './backend.service';
import {Logger} from './logger.service';

@Injectable()
export class HeroService {

  private heroes: Hero[] = [];

  constructor(
    private backend: BackendService,
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