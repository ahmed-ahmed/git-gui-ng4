import { Component, OnInit, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-repos-files',
  templateUrl: './repos-files.component.html',
  styleUrls: ['./repos-files.component.sass']
})
export class ReposFilesComponent implements OnInit {
//   private repoName: String;
//   private path: String;
//   private files;

//   constructor(private http: HttpClient, private route: ActivatedRoute) { }

//   get url() {
//     console.log(`/api/repos/${this.repoName}/tree/master/${this.path}`);
//     return `/api/repos/${this.repoName}/tree/master/${this.path}`;
//   }

  ngOnInit() {}
//     this.route.params.subscribe(params => {
//       this.repoName = params['name'];
//       this.path = params['path'] || '';
//       // let url = `/api/repos/${this.repoName}/tree/master/`;
//       this.http.get<String[]>(this.url).subscribe(items => this.files = items);
//     });
//   }

//   getFiles(repoName, path) {
//     return this.http.get<String[]>(this.url);
// }

}
