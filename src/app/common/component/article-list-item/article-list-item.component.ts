import { Component, Input } from "@angular/core";
import { Router } from "@angular/router";
import { Article } from "../../model/article.model";

@Component({
  selector: "sii-article-list-item",
  templateUrl: "./article-list-item.component.html",
  styleUrls: ["./article-list-item.component.scss"]
})
export class ArticleListItemComponent {
  /**
   * The article to display
   */
  @Input()
  public article: Article;

  /**
   * Creates an ArticleListItemComponent
   * @param router - The app router
   */
  constructor(private router: Router) {}

  /**
   * Navigates to article page.
   */
  public gotToDetail() {
    this.router
      .navigate(["/article", this.article.id])
      .catch(err => console.error(err));
  }
}
