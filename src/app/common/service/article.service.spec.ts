import { async, TestBed } from "@angular/core/testing";

import { ArticleService } from "./article.service";

describe("ArticleService", () => {
  let service: ArticleService;
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ArticleService]
    });

    service = TestBed.get(ArticleService);
  });

  it("should be created", () => {
    expect(service).toBeTruthy();
  });

  it("getAllArticles should return 6 articles", (done: DoneFn) => {
    service.getAllArticles().subscribe(value => {
      expect(value.length).toEqual(6);
      done();
    });
  });

  it("getArticleById should return 6 articles", (done: DoneFn) => {
    service.getArticleById(3).subscribe(value => {
      expect(value.id).toEqual(3);
      done();
    });
  });

  it("getArticlesByTag should return 6 articles", (done: DoneFn) => {
    service.getArticlesByTag('science').subscribe(value => {
      expect(value.length).toEqual(2);
      done();
    });
  });
});
