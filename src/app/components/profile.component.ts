import { Component } from '@angular/core';
import { GithubService } from '../services/github.service';

@Component({
    moduleId: module.id,
    selector: 'profile',
    templateUrl: './profile.component.html',
  //styleUrls: ['./app.component.css']
})
export class ProfileComponent {
  constructor(private _githubService: GithubService){
      this._githubService.getUser().subscribe(user => {
        console.log(user);
      });
  }
}
