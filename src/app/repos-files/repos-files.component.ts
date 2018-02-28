import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-repos-files',
  templateUrl: './repos-files.component.html',
  styleUrls: ['./repos-files.component.sass']
})
export class ReposFilesComponent implements OnInit {

  @Input() repoName: any;


  constructor() { }

  ngOnInit() {
  //   this.reposService.getFiles(this.repoName, this.folderName).then((res)=>{
  //     this.files = res.data;
  // });

  }

}
