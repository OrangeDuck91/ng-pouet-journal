import { Component, Input, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { Article } from "../../model/article.model";

@Component({
  selector: "sii-article-list-item",
  templateUrl: "./article-list-item.component.html",
  styleUrls: ["./article-list-item.component.scss"]
})
export class ArticleListItemComponent {
  @Input()
  public article: Article;

  constructor(private router: Router) {}

  public gotToDetail() {
    this.router
      .navigate(["/article", this.article.id])
      .catch(err => console.error(err));
  }
}
