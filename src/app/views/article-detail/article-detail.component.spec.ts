import { TestBed, ComponentFixture, async } from "@angular/core/testing";
import { ArticleDetailComponent } from "./article-detail.component";
import { Article } from "src/app/common/model/article.model";
import { of } from "rxjs";
import { ArticleService } from "src/app/common/service/article.service";
import { ActivatedRoute } from "@angular/router";

describe("ArticleDetailComponent", () => {
  let fixture: ComponentFixture<ArticleDetailComponent>;
  let component: ArticleDetailComponent;
  let articleServiceStub: any;
  let article: Article;
  const articleId = 2;

  beforeEach(() => {
    article = new Article();
    article.id = articleId;
    // Moock for ArticleService
    articleServiceStub = {
      getArticleById: jasmine
        .createSpy("getArticleById")
        .and.returnValue(of(article))
    };
    // Mock for ActivatedRoute
    const activatedRouteStub = {
      params: of({ articleId })
    };

    TestBed.configureTestingModule({
      declarations: [ArticleDetailComponent],
      providers: [
        { provide: ArticleService, useValue: articleServiceStub },
        { provide: ActivatedRoute, useValue: activatedRouteStub }
      ]
    });

    fixture = TestBed.createComponent(ArticleDetailComponent);
    component = fixture.debugElement.componentInstance;
  });

  it("should create the ArticleDetailComponent", () => {
    expect(component).toBeTruthy();
  });

  it("should call getArticleById() with route param articleId", async(() => {
    component.ngOnInit();
    expect(articleServiceStub.getArticleById).toHaveBeenCalledWith(articleId);
  }));

  it("should value article property", async(() => {
    component.ngOnInit();
    expect(component.article).toBeDefined();
    expect(component.article.id).toEqual(articleId);
  }));
});
