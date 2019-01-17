import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { ArticleListComponent } from "./views/article-list/article-list.component";
import { ContactUsComponent } from "./views/contact-us/contact-us.component";
import { ArticleDetailComponent } from "./views/article-detail/article-detail.component";

export const APP_ROUTES: Routes = [
  {
    path: "home",
    component: ArticleListComponent
  },
  {
    path: "home/:tag",
    component: ArticleListComponent
  },
  {
    path: "article/:articleId",
    component: ArticleDetailComponent
  },
  {
    path: "contact",
    component: ContactUsComponent
  },
  {
    path: "",
    redirectTo: "home",
    pathMatch: "full"
  },
  {
    path: "**",
    redirectTo: "home",
    pathMatch: "full"
  }
];

@NgModule({
  imports: [RouterModule.forRoot(APP_ROUTES, { anchorScrolling: "enabled" })],
  exports: [RouterModule]
})
export class AppRoutingModule {}
