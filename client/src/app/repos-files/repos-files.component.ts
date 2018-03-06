import { Component, OnInit, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Transition } from '@uirouter/core';
import { environment } from '../../environments/environment';

@Component({
  selector: 'app-repos-files',
  templateUrl: './repos-files.component.html',
  styleUrls: ['./repos-files.component.sass']
})
export class ReposFilesComponent implements OnInit {
  private url = environment.api + 'api/repos';
  private repoName: String;
  private path: String;
  private files;

  constructor(private http: HttpClient, private transition: Transition) { 
    this.repoName = transition.params().name;
    this.path = transition.params().path;
  }


  ngOnInit() {
      this.getFiles().subscribe(items => this.files = items);
  }

  getFiles() {
    let url = this.url +  `/${this.repoName}/tree/master/${this.path}`;
    console.log(url);
    // if(path) {
    //     url = url + path;
    // }
    return this.http.get<String[]>(url);
  }

  getLink(repo,path,fileName) {
    if(path) {
      return `/repo/${repo}/tree/master/${path}/${fileName}`; 
    } else {
      return `/repo/${repo}/tree/master/${fileName}`;
    }
    
  }
}