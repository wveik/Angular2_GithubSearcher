import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class GithubService {
    private username: string;
    private client_id = 'f0388b4a1582a28238a7';
    private client_secret = 'e2fe49c40e80db699de3292bfc83213d24f23a8d';

    constructor(private _http: Http){
        console.log("Guthub Service ready...");
        this.username = 'wveik';
    }

    getUser(){
        return this._http.get('http://api.github.com/users/' + this.username + "?client_id=" + this.client_id + "&client_secret=" + this.client_secret)
                    .map(res => res.json());
    }

    getRepos(){
        return this._http.get('http://api.github.com/users/' + this.username + "/repos?client_id=" + this.client_id + "&client_secret=" + this.client_secret)
                    .map(res => res.json());
    }
}



