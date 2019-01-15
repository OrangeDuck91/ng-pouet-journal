import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { ArticleService } from "src/app/common/service/article.service";
import { Article } from "src/app/common/model/article.model";
import { mergeMap } from "rxjs/operators";

@Component({
  selector: "sii-article-detail",
  templateUrl: "./article-detail.component.html",
  styleUrls: ["./article-detail.component.scss"]
})
export class ArticleDetailComponent implements OnInit {
  public article: Article;

  constructor(
    private route: ActivatedRoute,
    private articleService: ArticleService
  ) {}

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
