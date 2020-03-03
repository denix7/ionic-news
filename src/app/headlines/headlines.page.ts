import { Component, OnInit } from '@angular/core';
import { NewsService } from '../services/news.service';

@Component({
  selector: 'app-headlines',
  templateUrl: './headlines.page.html',
  styleUrls: ['./headlines.page.scss'],
})
export class HeadlinesPage implements OnInit {

  categories = ['Coronavirus', 'Covid-19', 'Bolivia', 'Ultima hora', 'Deportes', 'Tecnologia', 'Negocios', 'Ciencia', 'Peliculas', 'series', 'musica'];
  news;

  constructor(private newsService:NewsService) { }

  ngOnInit() {
    this.newsService.getData(`everything?q=actualidad&`)
      .subscribe(data => {
        this.news = data.articles;
      })
  }

  getCategory(category)
  {
    this.newsService.getData(`everything?q=${category.toLowerCase()}&`)
      .subscribe(data => {
        this.news = data.articles;
      });
  }

}
