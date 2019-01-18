import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { ArticleListItemComponent } from "./article-list-item.component";
import { RouterTestingModule } from "@angular/router/testing";
import { Article } from "../../model/article.model";
import { Router } from "@angular/router";
import { NO_ERRORS_SCHEMA } from "@angular/core";
import { ArticleDetailComponent } from "src/app/views/article-detail/article-detail.component";
import { ViewsModule } from "src/app/views/views.module";
import { throwError } from "rxjs";

describe("ArticleListItemComponent", () => {
  let component: ArticleListItemComponent;
  let fixture: ComponentFixture<ArticleListItemComponent>;
  let routerStub;

  beforeEach(() => {
    // Mock for router.navigate function
    routerStub = {
      navigate: jasmine.createSpy("navigate")
    };

    TestBed.configureTestingModule({
      declarations: [ArticleListItemComponent, ArticleDetailComponent],
      providers: [{ provide: Router, useValue: routerStub }],
      schemas: [NO_ERRORS_SCHEMA]
    });
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ArticleListItemComponent);
    component = fixture.componentInstance;
    const art = new Article();
    art.id = 1;
    component.article = art;
    fixture.detectChanges();
  });

  it("should create ArticleListItemComponent", () => {
    expect(component).toBeTruthy();
  });

  it("should navigate to detail", async(() => {
    routerStub.navigate.and.returnValue(new Promise(null));
    component.gotToDetail();
    expect(routerStub.navigate).toHaveBeenCalledWith([
      "/article",
      component.article.id
    ]);
  }));
});
