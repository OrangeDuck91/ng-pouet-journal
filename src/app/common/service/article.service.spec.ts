import { TestBed } from "@angular/core/testing";

import { ArticleService } from "./article.service";
import { HttpClientTestingModule, HttpTestingController } from "@angular/common/http/testing";

describe("ArticleService", () => {
  let service: ArticleService;
  let httpMock: HttpTestingController;
  beforeEach(async() => {
    TestBed.configureTestingModule({
        imports: [HttpClientTestingModule],
        providers: [ArticleService]
    });

    service = TestBed.get(ArticleService);
    httpMock = TestBed.get(HttpTestingController);
  });

  it("should be created", () => {
    expect(service).toBeTruthy();
  });

  it("getAllArticles should return 6 articles", () => {
    service.getAllArticles().subscribe(value => {
      expect(value.length).toEqual(6);
    });

    const req = httpMock.expectOne('http://localhost:8080/article-api/articles');
    expect(req.request.method).toEqual('GET');

    httpMock.verify();
  });

  it("getArticleById should return 6 articles", () => {
    service.getArticleById(3).subscribe(value => {
      expect(value.id).toEqual(3);
    });

    const req = httpMock.expectOne('http://localhost:8080/article-api/articles/3');
    expect(req.request.method).toEqual('GET');

    httpMock.verify();
  });

  it("getArticlesByTag should return 6 articles", () => {
    service.getArticlesByTag('science').subscribe(value => {
      expect(value.length).toEqual(2);
    });

    const req = httpMock.expectOne('http://localhost:8080/article-api/tags/science/articles');
    expect(req.request.method).toEqual('GET');

    httpMock.verify();
  });
});
