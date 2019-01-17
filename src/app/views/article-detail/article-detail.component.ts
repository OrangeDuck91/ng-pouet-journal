import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { mergeMap } from "rxjs/operators";
import { ArticleService } from "src/app/common/service/article.service";
import { Article } from "src/app/common/model/article.model";

@Component({
  selector: "sii-article-detail",
  templateUrl: "./article-detail.component.html",
  styleUrls: ["./article-detail.component.scss"]
})
export class ArticleDetailComponent implements OnInit {
  /** Article */
  public article: Article;

  /**
   * Create an article detail component
   * @param route Current route
   * @param articleService Article service
   */
  constructor(
    private route: ActivatedRoute,
    private articleService: ArticleService
  ) {}

  /**
   * Get the article from the Id in route params.
   */
  public ngOnInit() {
    this.route.params
      .pipe(
        mergeMap(param => {
          const artId: number = +param.articleId;
          return this.articleService.getArticleById(artId);
        })
      )
      .subscribe(article => (this.article = article));
  }
}
