import {
it,
inject,
injectAsync,
beforeEachProviders,
TestComponentBuilder
} from 'angular2/testing';

import {Component, provide} from 'angular2/core';
import {BaseRequestOptions, Http} from 'angular2/http';
import {MockBackend} from 'angular2/http/testing';

import {Logger} from '../../common/services/logger.service';
import {Hero} from '../models/hero';
import {HeroBackendService} from './hero-backend.service';
import {HeroBackendServiceMock} from './hero-backend.service.mock';

describe('Test: HeroBackendService', () => {

  beforeEachProviders(() => [
    HeroBackendService,
    Hero,
    Logger,

    BaseRequestOptions,
    MockBackend,
    provide(Http, {
      useFactory: (backend, defaultOptions) => {
        return new Http(backend, defaultOptions)
      },
      deps: [MockBackend, BaseRequestOptions]
    }),
  ]);

  it('HeroBackendServiceが存在すること', inject([HeroBackendService, Logger], (testee: HeroBackendService) => {
    expect(testee).toBeDefined();
  }));

  describe('getAll(Spyなし)', () => {

    it('3件取得できること', injectAsync([HeroBackendService, Logger], (testee: HeroBackendService) => {
      return testee.getAll(Hero).then(heroes => {
        expect(heroes.length).toEqual(3);
      });
    }));

  });

  describe('getAll(Spyあり)', () => {

    it('3件取得できること', injectAsync([HeroBackendService, Logger], (testee: HeroBackendService) => {

      spyOn(testee, 'getAll').and.callFake(() => {
          return Promise.resolve([1, 2]);
      });

      return testee.getAll(Hero).then(heroes => {
        expect(heroes.length).toEqual(2);
        expect(testee.getAll).toHaveBeenCalled();
      });

    }));

  });

});

describe('Test: HeroBackendService(Mock)', () => {

  beforeEachProviders(() => [
    provide(HeroBackendService, {
      useFactory: (logger) => {
        return new HeroBackendServiceMock(logger);
      },
      deps: [Logger]
    }),
    Hero,
    Logger,

    BaseRequestOptions,
    MockBackend,
    provide(Http, {
      useFactory: (backend, defaultOptions) => {
        return new Http(backend, defaultOptions)
      },
      deps: [MockBackend, BaseRequestOptions]
    }),
  ]);

  it('HeroBackendServiceが存在すること', inject([HeroBackendService, Logger], (testee: HeroBackendService) => {
    expect(testee).toBeDefined();
  }));

  describe('getAll(Mock呼び出し)', () => {

    it('1件取得できること', injectAsync([HeroBackendService, Logger], (testee: HeroBackendService) => {
      return testee.getAll(Hero).then(heroes => {
        expect(heroes.length).toEqual(1);
      });
    }));

  });
});