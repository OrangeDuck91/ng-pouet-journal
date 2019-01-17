import { ComponentFixture, TestBed, async } from "@angular/core/testing";
import { ArticleListComponent } from "./article-list.component";
import { Article } from "src/app/common/model/article.model";
import { ArticleService } from "src/app/common/service/article.service";
import { ActivatedRoute, Params } from "@angular/router";
import { of, Subject } from "rxjs";
import { SharedModule } from "src/app/common/shared.module";

describe("ArticleListComponent", () => {
  let fixture: ComponentFixture<ArticleListComponent>;
  let component: ArticleListComponent;
  let articleServiceStub: any;
  let article: Article;
  let stubParams;
  const articleId = 2,
    tag = "science";

  beforeEach(() => {
    article = new Article();
    article.id = articleId;
    // Moock for ArticleService
    articleServiceStub = {
      getArticlesByTag: jasmine
        .createSpy("getArticlesByTag")
        .and.returnValue(of([article])),
      getAllArticles: jasmine
        .createSpy("getAllArticles")
        .and.returnValue(of([article]))
    };
    // Mock for Params
    stubParams = new Subject<Params>();

    TestBed.configureTestingModule({
      declarations: [ArticleListComponent],
      providers: [
        { provide: ArticleService, useValue: articleServiceStub },
        { provide: ActivatedRoute, useValue: { params: stubParams } }
      ],
      imports: [SharedModule]
    });

    fixture = TestBed.createComponent(ArticleListComponent);
    component = fixture.debugElement.componentInstance;
  });

  it("should create the ArticleListComponent", () => {
    expect(component).toBeTruthy();
  });

  it("should call getAllArticles if no tag in param", async(() => {
    component.ngOnInit();
    stubParams.next({});
    expect(articleServiceStub.getAllArticles).toHaveBeenCalled();
  }));

  it("should call getAllArticles if ther is a tag in param", async(() => {
    component.ngOnInit();
    stubParams.next({ tag });
    expect(articleServiceStub.getArticlesByTag).toHaveBeenCalled();
  }));

  it("should values articles property", async(() => {
    component.ngOnInit();
    stubParams.next({});
    expect(component.articles).toBeDefined();
  }));
});
