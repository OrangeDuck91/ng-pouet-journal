import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArticleListComponent } from './article-list/article-list.component';
import { ArticleDetailComponent } from './article-detail/article-detail.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { SharedModule } from '../common/shared.module';
import { FormsModule } from '@angular/forms';

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
    SharedModule,
    FormsModule
  ]
})
export class ViewsModule { }
