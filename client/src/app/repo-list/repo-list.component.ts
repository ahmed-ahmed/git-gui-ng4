import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import {environment} from './../../environments/environment'

@Component({
  selector: 'app-repo-list',
  templateUrl: './repo-list.component.html',
  styleUrls: ['./repo-list.component.sass']
})
export class RepoListComponent implements OnInit {
  private url = environment.api + 'api/repos';
  private repos = [];



  constructor(private http: HttpClient) {
    console.log('Repo List Component');
   }


  ngOnInit() {
    this.getRepos().subscribe(items => this.repos = items);
  }

  private getRepos(): Observable<any[]> {
      return this.http.get<any[]>(this.url);
  }

}



// import template from './repos-list.html';
// import app from '../../modules.js';


// class ReposListController{
//     constructor(reposService) {
//         this.service = reposService;
        
//         reposService.getRepos().then((res)=>{
//             this.repos = res.data;
//             console.log(this.repos);
//         });
//     }
// }


// let component = {
//     bindings: {
//         // userName: '@',
//         // enableNavigationBar: '<'
//     },
//     template,
//     controller: ReposListController
// };

// app.component('reposList', component);

// export default component;
