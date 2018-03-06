import { Component, OnInit, Output } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/switchMap';
import {environment} from './../../environments/environment'
import {Transition} from "ui-router-ng2"

@Component({
  selector: 'app-repos-page',
  templateUrl: './repos-page.component.html',
  styleUrls: ['./repos-page.component.sass']
})
export class ReposPageComponent implements OnInit {
  private url = environment.api + 'api/repos';

  private repoName: String;
  private readMe: String;

  constructor(private http: HttpClient, private trans:Transition) {
    this.repoName = trans.params().name;
  }

  // constructor() {}
  ngOnInit() {
    this.getReadMe(this.repoName).subscribe(data => this.readMe = data);
  }


  private getReadMe(repoName) {
    return this.http.get(`${this.url}/${repoName}/readme`);
  }
}
