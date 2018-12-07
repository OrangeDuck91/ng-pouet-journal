import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ArticleListComponent } from './views/article-list/article-list.component';
import { ContactUsComponent } from './views/contact-us/contact-us.component';
import { ArticleDetailComponent } from './views/article-detail/article-detail.component';
import { ArticleListResolver } from './common/resolver/article-list.resolver';


export const APP_ROUTES: Routes = [

  {
    path: 'home',
    component: ArticleListComponent,
    resolve: {
      articles: ArticleListResolver
    }
  },
  {
    path: 'home/:tag',
    component: ArticleListComponent,
    resolve: {
      articles: ArticleListResolver
    }
  },
  {
    path: 'article/:articleId',
    component: ArticleDetailComponent
  },
  {
    path: 'contact',
    component: ContactUsComponent
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: '**',
    redirectTo: 'home',
    pathMatch: 'full'
  },
];


@NgModule({
  imports: [RouterModule.forRoot(APP_ROUTES)],
  exports: [RouterModule],
  providers : [ArticleListResolver]
})
export class AppRoutingModule { }
