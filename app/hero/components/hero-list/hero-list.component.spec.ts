import {
it,
inject,
injectAsync,
beforeEachProviders,
TestComponentBuilder
} from 'angular2/testing';

import {Component, provide} from 'angular2/core';
import {Router} from 'angular2/router';
import {BaseRequestOptions, Http} from 'angular2/http';
import {MockBackend} from 'angular2/http/testing';

import {Logger} from '../../../common/services/logger.service';
import {Hero} from '../../models/hero';
import {HeroService} from '../../services/hero.service';
import {HeroListComponent} from './hero-list.component';

describe('Test: HeroListComponent', () => {
  
  beforeEachProviders(() => {
    HeroListComponent,
    HeroService,
    Router
  });
  
  describe('Test: inital state', ()=> {
    
    it('Heroが3件表示されること', inject([HeroListComponent, Router, HeroService], (testee: HeroListComponent) => {
      expect(testee.heroes.length).toEqual(0);
      testee.ngOnInit();
      expect(testee.heroes.length).toEqual(3);
    }));
        
  });
  
  describe('Test: select hero', () => {
    
  });
  
  it('', injectAsync([TestComponentBuilder], (tcb) => {
    
    
  }));
  
});