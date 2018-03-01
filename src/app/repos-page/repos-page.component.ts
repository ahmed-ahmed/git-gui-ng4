import { Component, OnInit, Output } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'app-repos-page',
  templateUrl: './repos-page.component.html',
  styleUrls: ['./repos-page.component.sass']
})
export class ReposPageComponent implements OnInit {
  private url = 'api/repos';

  @Output() private repoName: String;
  private readMe: String;

  constructor(private http: HttpClient,   private router: Router,   private route: ActivatedRoute) { }
  // constructor() {}
  ngOnInit() {
    this.route.params.subscribe(params => {
        console.log(params);
    });

    // this.route.paramMap
    // .switchMap((params: ParamMap) => {
    //   console.log(params.get('name'));
    //   console.log(params.get('folder'));
    // });

    // this.repoName = 'git-gui' ;//this.route.snapshot.paramMap.get('name');

    // this.route.paramMap.switchMap((params: ParamMap) => this.service.getHero(params.get('id')));
    // this.getReadMe(this.repoName).subscribe(items => this.readMe = items);
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
      return this.http.get<any[]>(this.url);
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
