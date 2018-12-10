import { Component, OnInit, Input } from '@angular/core';
import { Article } from '../../model/article.model';

@Component({
  selector: 'a1-article-list-item',
  templateUrl: './article-list-item.component.html',
  styleUrls: ['./article-list-item.component.scss']
})
export class ArticleListItemComponent implements OnInit {

  @Input()
  article: Article;

  constructor() { }

  ngOnInit() {
  }

}
