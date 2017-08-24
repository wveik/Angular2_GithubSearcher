import { Component } from '@angular/core';
import { GithubService } from '../services/github.service';

@Component({
    moduleId: module.id,
    selector: 'profile',
    templateUrl: './profile.component.html',
  //styleUrls: ['./app.component.css']
})
export class ProfileComponent {
  user: any[];
  repos: any[];
  filterd_repos: any[];
  username: string;

  constructor(private _githubService: GithubService){
    this._githubService.getUser().subscribe(user => {
      this.user = user;
    });
    this._githubService.getRepos().subscribe(repos => {
      this.repos = repos;
      this.filterd_repos = repos;
    });
  }

  searchUser(){
    if(this.username == ""){
      this.filterd_repos = this.repos;
      return;
    }
    this.filterd_repos = [];
    this.repos.forEach(item => {
      if( item.name.toLowerCase().indexOf(this.username.toLowerCase()) >= 0){
        this.filterd_repos.push(item);
      }
    });
  }
}
