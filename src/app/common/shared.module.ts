import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { TopNavBarComponent } from "./component/top-nav-bar/top-nav-bar.component";
import { RouterModule } from "@angular/router";
import { ArticleListItemComponent } from "./component/article-list-item/article-list-item.component";
import { ArticleService } from "./service/article.service";

const MODULES = [CommonModule, RouterModule];

const PIPES = [];

const DIRECTIVES = [];

const COMPONENTS = [TopNavBarComponent, ArticleListItemComponent];

const SERVICES = [ArticleService];

@NgModule({
  imports: [...MODULES],
  declarations: [...DIRECTIVES, ...PIPES, ...COMPONENTS],
  exports: [...DIRECTIVES, ...PIPES, ...COMPONENTS, ...MODULES],
  providers: [...SERVICES]
})
export class SharedModule {}
