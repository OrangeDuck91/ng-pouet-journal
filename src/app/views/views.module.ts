import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArticleListComponent } from './article-list/article-list.component';
import { ArticleDetailComponent } from './article-detail/article-detail.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { SharedModule } from '../common/shared.module';

@NgModule({
  declarations: [
    ArticleListComponent,
    ArticleDetailComponent,
    ContactUsComponent
  ],
  exports: [
    ArticleListComponent,
    ArticleDetailComponent,
    ContactUsComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ]
})
export class ViewsModule { }
