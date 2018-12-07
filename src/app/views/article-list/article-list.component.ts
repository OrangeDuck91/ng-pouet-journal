import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Article } from 'src/app/common/model/article.model';

@Component({
  selector: 'a1-article-list',
  templateUrl: './article-list.component.html',
  styleUrls: ['./article-list.component.scss']
})
export class ArticleListComponent implements OnInit {

  protected articles: Article[];

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.articles = this.route.snapshot.data['articles'];
  }

}
