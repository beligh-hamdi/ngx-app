import { Component, OnInit } from '@angular/core';
import {CoreService} from '../../services/core.service';
import {map} from 'rxjs/operators';
import {Observable} from 'rxjs/Observable';
import {Repository, RepositoryEntity, RepositoryMapper} from '../../models/repository';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {
  repos$: Observable<Repository>;
  constructor(private coreService: CoreService) { }

  ngOnInit() {
    this.repos$ = this.loadRepos('angular');
  }

  private loadRepos(query: string ): Observable<Repository> {
    return this.coreService.fetch(query).pipe(
      map((res: any) => res.items),
      map((res: any) =>  this.filterRepo(res))
    );
  }

  private filterRepo(repos: any) {
    return repos.map((data: any) => {
      const repositoryEntity: RepositoryEntity = Object.assign({}, {
        name: data.name,
        full_name: data.full_name,
        description: data.description
      });
      return RepositoryMapper.entityToDto(repositoryEntity);
    });
  }

}
