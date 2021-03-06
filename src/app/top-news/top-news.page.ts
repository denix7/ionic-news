import { Component, OnInit } from '@angular/core';
import { NewsService } from '../services/news.service';

@Component({
  selector: 'app-top-news',
  templateUrl: './top-news.page.html',
  styleUrls: ['./top-news.page.scss'],
})
export class TopNewsPage implements OnInit {

  news: any[];

  constructor(private newsServices:NewsService) { }

  ngOnInit()
  {
    this.getNews();
  }

  getNews()
  {
      this.newsServices.getData('everything?q=noticia&')
        .subscribe(data => {
          this.news = data.articles;
      });
  }

  doRefresh(event)
  {
    this.getNews();
    event.target.complete();
  }
}
