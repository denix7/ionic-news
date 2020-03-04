import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss'],
})
export class ArticleComponent implements OnInit {
  @Input() article;

  constructor() { }

  ngOnInit() {
    console.warn(this.article)
  }

  goToLink()
  {
    window.location.href = `${this.article.url}`;
  }

}
