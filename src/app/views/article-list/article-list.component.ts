import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Article } from "src/app/common/model/article.model";
import { ArticleService } from "src/app/common/service/article.service";
import { mergeMap } from "rxjs/operators";
import { Observable } from "rxjs";

@Component({
  selector: "sii-article-list",
  templateUrl: "./article-list.component.html",
  styleUrls: ["./article-list.component.scss"]
})
export class ArticleListComponent implements OnInit {
  protected articles: Article[];

  constructor(
    private route: ActivatedRoute,
    private articleService: ArticleService
  ) {}

  public ngOnInit() {
    this.route.params
      .pipe(mergeMap(param => this.getArticlesFromUrlParam(param)))
      .subscribe(articles => (this.articles = articles));
  }

  private getArticlesFromUrlParam(param): Observable<Article[]> {
    const { tag } = param;
    return tag
      ? this.articleService.getArticlesByTag(tag)
      : this.articleService.getAllArticles();
  }
}
