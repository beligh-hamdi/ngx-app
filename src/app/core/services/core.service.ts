import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class CoreService {

  constructor(private httpClient: HttpClient) { }

  fetch(query: string) {
    return this.httpClient.get(`https://api.github.com/search/repositories?q=${query}`);
  }

  fetchConfig() {
    return this.httpClient.get(`assets/configuration.json`);
  }

}
