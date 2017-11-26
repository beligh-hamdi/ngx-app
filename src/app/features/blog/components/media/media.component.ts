import {ChangeDetectionStrategy, Component, Input, OnInit} from '@angular/core';
import {BlogService} from '../../services/blog.service';
import {Observable} from 'rxjs/Observable';

@Component({
  selector: 'app-media',
  templateUrl: './media.component.html',
  styleUrls: ['./media.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MediaComponent implements OnInit {
  @Input() id: number;
  @Input() config: any;
  media$: Observable<string>;

  constructor(private blogService: BlogService) {}

  ngOnInit() {
    if (this.id) {
      this.fetchMediaById(this.id);
    }
  }

  checkConfig() {
    return this.config && this.config.class;
  }

  fetchMediaById(id: number) {
    this.media$ = this.blogService.fetchMediaById(id).map(data => data.guid.rendered);
  }
}
