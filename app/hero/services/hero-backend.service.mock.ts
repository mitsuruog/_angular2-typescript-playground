import {Injectable, Type} from 'angular2/core';
import {Logger} from '../../common/services/logger.service';
import {Hero} from '../models/hero';

const HEROES = [
  new Hero('Magneta', 'Manipulates metalic objects')
];

@Injectable()
export class HeroBackendServiceMock {

  constructor(private logger: Logger) { }

  getAll(type: Type): PromiseLike<any[]> {
     if(type == Hero) {
       // [MEMO] return mock data
       return Promise.resolve<Hero[]>(HEROES);
     }
  }
  
}
