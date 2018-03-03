import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { RepoListComponent } from './repo-list/repo-list.component';
import { HttpClientModule } from '@angular/common/http';
import { ReposPageComponent } from './repos-page/repos-page.component';
import { ReposFilesComponent } from './repos-files/repos-files.component';

import {UIRouterModule} from '@uirouter/angular';

import {Component} from '@angular/core';
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';


/** States */
// import { HelloComponent } from './hello/hello.component';
// import { WorldComponent } from './world/world.component';
// import { NestComponent } from './nest/nest.component';

const STATES = [
  { name: 'home', url: '/home', component: RepoListComponent },
  // { name: 'world', url: '/world', component: WorldComponent },
  // { name: 'world.nest', url: '/nest', component: NestComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    RepoListComponent,
    ReposPageComponent,
    ReposFilesComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    UIRouterModule.forRoot({ states: STATES })

    // UIRouterModule.forRoot({ states: states, useHash: true })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
