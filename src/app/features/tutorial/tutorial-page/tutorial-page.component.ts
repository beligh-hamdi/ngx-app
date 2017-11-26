import { Component, OnInit } from '@angular/core';
import {TutorialService} from '../services/tutorial.service';
import {map} from 'rxjs/operators';

@Component({
  selector: 'app-tutorial-page',
  templateUrl: './tutorial-page.component.html',
  styleUrls: ['./tutorial-page.component.css']
})
export class TutorialPageComponent implements OnInit {

  text: any;
  pdfSrc: string = 'assets/Become_a_Ninja_with_Angular/Français/Deviens_un_Ninja_avec_Angular.pdf';

  constructor(private tutorialService: TutorialService) { }

  ngOnInit() {
    this.tutorialService.fetch().pipe(
      map((data: any) => {
        console.log('data', data);
       // this.text = data;
      } )
    ).subscribe();
  }

}
