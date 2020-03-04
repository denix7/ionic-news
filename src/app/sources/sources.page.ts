import { Component, OnInit } from '@angular/core';
import { NewsService } from '../services/news.service';

@Component({
  selector: 'app-sources',
  templateUrl: './sources.page.html',
  styleUrls: ['./sources.page.scss'],
})
export class SourcesPage implements OnInit {

  sources:any [];

  constructor(private newsService:NewsService) { }

  ngOnInit() {
    this.getSources();
  }

  getSources()
  {
    this.newsService.getData('sources?')
      .subscribe(data => {
        console.warn(data);
        this.sources = data.sources;
      })
  }

}
