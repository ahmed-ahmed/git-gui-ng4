import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-repos-page',
  templateUrl: './repos-page.component.html',
  styleUrls: ['./repos-page.component.sass']
})
export class ReposPageComponent implements OnInit {
  private url = 'http://ama29-desktop2.sf.cloud.cas.org:3000/api/repos';

  private repoName;// = "git-gui";
  private readMe;

  constructor(private http: HttpClient,   private router: Router,   private route: ActivatedRoute) { }
  // constructor() {}
  ngOnInit() {
    this.repoName = this.route.snapshot.paramMap.get('name');

    // this.route.paramMap.switchMap((params: ParamMap) => this.service.getHero(params.get('id')));
    
    this.getReadMe(this.repoName).subscribe(items => this.readMe = items);
  }

//   getReadMe(repoName) {
//     // var data = `"# git gui\n\nA`
//     // var deferred = $q.defer();
//     // deferred.resolve({data: data});
//     // return deferred.promise;
//     // var data = `"# git gui\n\nA graphical user interface to manage git repos\n\n```\nnpm start \nwebpack --watch\n```"
//     return this.$http.get(`/api/repos/${repoName}/readme`);
// }


  private getReadMe(repoName) {
      return this.http.get<any[]>(this.url)
  }
}



// import app from '../../modules.js';
// import template from './repos-page.html';

// class ReposPageController{
//     constructor(reposService){
//         this.reposService = reposService;
//     }

//     $onInit() {
//         this.reposService.getReadMe(this.repoName).then((res)=>{
//             this.readme = res.data
//         });
//     }
// }

// const component = {
//     bindings: {
//         repoName: '<'
//     },
//     controller: ReposPageController,
//     template
// };

// app.component('reposPage', component);
