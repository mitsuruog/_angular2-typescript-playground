import {Injectable, Type} from 'angular2/core';
import {Logger} from '../../common/services/logger.service';
import {Hero} from '../models/hero';

const HEROES = [
  new Hero('Windstorm', 'Weather mastery'),
  new Hero('Mr. Nice', 'Killing them with kindness'),
  new Hero('Magneta', 'Manipulates metalic objects')
];

@Injectable()
export class HeroBackendService {

  constructor(private logger: Logger) { }

  getAll(type: Type): PromiseLike<any[]> {
     if(type == Hero) {
       // [MEMO] return mock data
       return Promise.resolve<Hero[]>(HEROES);
     }
     let error = new Error(`Cannot get object of this type`);
     this.logger.error(error);
     throw error;
  }
  
}
