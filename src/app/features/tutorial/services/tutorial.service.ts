import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class TutorialService {

  constructor(private  httpClient: HttpClient) { }

  fetch() {
    const url = 'assets/Français/Deviens_un_Ninja_avec_Angular.html';
    return this.httpClient.get(`${url}`, { responseType: 'text' });
  }

}
