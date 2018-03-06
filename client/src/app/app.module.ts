import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { RepoListComponent } from './repo-list/repo-list.component';
import { HttpClientModule, HttpClient } from '@angular/common/http';
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
  // { name: 'repo', url: '/repo/:name',  component: ReposPageComponent},
  { 
    name: 'folder', 
    url: '/repo/:name/tree/master/*path', 
    component: ReposPageComponent,
  }

  // resolve: [
  //   token: 'files',
  //   deps: [HttpClient],
  //   resolveFn: http=> http.get('data/people.json')
  //                         .map(resp =>  resp.json())
  //   .toPromise();
  // ]


  // { name: 'world', url: '/world', component: WorldComponent },
  // { name: 'world.nest', url: '/nest', component: NestComponent },
];

// .state('folder', {
//   url: '/repo/:name/tree/master/*path',
//   onEnter: function() {
//   },
//   views: {
//       'header': {
//           template: 'header'
//       },
//       'content': {
//           component: 'repoFiles'
//       }
//   },
//   resolve: {
//       repoName: ($stateParams)=> {
//           return $stateParams.name;
//       },
//       folderName: ($stateParams)=> {
//           return $stateParams.path;
//       }
//   }
// })

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
