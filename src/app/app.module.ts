import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { RepoListComponent } from './repo-list/repo-list.component';
import { HttpClientModule } from '@angular/common/http';
import  { RouterModule, Routes }  from '@angular/router';
import { ReposPageComponent } from './repos-page/repos-page.component';
import { ReposFilesComponent } from './repos-files/repos-files.component';

const appRoutes: Routes = [
  { path: 'repo-list', component: RepoListComponent },
  { path: 'repo-page/:name', component: ReposPageComponent },
  
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
  { path: '**', component: RepoListComponent }
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
     RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
