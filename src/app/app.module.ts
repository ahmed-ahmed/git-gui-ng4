import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { RepoListComponent } from './repo-list/repo-list.component';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import { ReposPageComponent } from './repos-page/repos-page.component';
import { ReposFilesComponent } from './repos-files/repos-files.component';
import { ComplexUrlMatcher } from './complex.url.matcher';

export const appRoutes: Routes = [
  {
    path: 'repo',
    component: ReposPageComponent,
    children: [
      // {
      //   path: '',
      //   component: UserListComponent
      // },
      {
        matcher: ComplexUrlMatcher('path', /.+/),
        component: ReposPageComponent
      },
    ]
  }
];


// const appRoutes: Routes = [
//   { path: 'repo-list/:path', component: RepoListComponent },
//   { 
//     path: 'repo-page/:name', component: ReposPageComponent,
//     children: [{
//       // {page:[0-9]*}
//       // :name:[a-z]+
//       path: 'tree/master/:path:^(/)?([^/\0]+(/)?)+$',
//       // matcher: '$',
//       //:id:\\d+/:name?
//       // pathMatch: 'full',
//       component: ReposPageComponent,
//       // children: [
//       //   {
//       //     path: '$',
//       //     pathMatch: 'prefix',
//       //     // matcher: '$',
//       //     component: ReposPageComponent,
//       //   }
//       // ]
//     }]
// },
  // http://localhost:3000/repo/git-gui/tree/master/client/components
  // { path: 'repo/:name/tree/master/:path', component: ReposPageComponent },
  // { path: '',   redirectTo: 'repo/:name/tree/master/:path', pathMatch: 'prefix' , matcher: '$' },
  
  // { path: 'hero/:id',      component: HeroDetailComponent },
  // {
  //   path: 'heroes',
  //   component: HeroListComponent,
  //   data: { title: 'Heroes List' }
  // },
  // { path: '',
  //   redirectTo: '/heroes',
  //   pathMatch: 'full'
  // },
  // { path: '**', component: RepoListComponent }
// ];

// [{
//   path: 'team/:id',
//   component: Team,
//   children: [{
//     path: '',
//     component: WrapperCmp,
//     children: [{
//       path: 'user/:name',
//       component: User
//     }]
//   }]
// }]




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
     RouterModule.forRoot(
      appRoutes,
      { enableTracing: false } // <-- debugging purposes only
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
