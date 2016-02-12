import {Component} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';

import {HeroComponent} from './hero/hero.component';

@Component({
  selector: 'my-app',
  template: `
    <h1>Component Router</h1>
    <nav>
      <a [routerLink]="['Heroes']">Heroes</a>
    </nav>   
    <router-outlet></router-outlet>
  `,
  directives: [ROUTER_DIRECTIVES]
})

// TODO　ブラウザBackで戻らないんだけどなんで。。。
@RouteConfig([
  {
    path: '/heroes',
    name: 'Heroes',
    component: HeroComponent,
  }
])

export class AppComponent { }