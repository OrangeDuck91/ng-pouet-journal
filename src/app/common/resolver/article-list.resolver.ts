import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { Article } from '../model/article.model';
import { ArticleService } from '../service/article.service';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable()
export class ArticleListResolver implements Resolve<Article[]> {

  constructor(private articleService: ArticleService) { }

  resolve(route: ActivatedRouteSnapshot): Observable<Article[]> {
    const tag = route.params['tag'];
    return tag ? this.articleService.getArticlesByTag(tag) :
      this.articleService.getAllArticles();
  }
}
