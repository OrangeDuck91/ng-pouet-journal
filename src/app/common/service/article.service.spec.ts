import { async, TestBed } from '@angular/core/testing';

import { ArticleService } from './article.service';

describe('ArticleService', () => {

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      providers: [ArticleService]
    })
    .compileComponents().catch();
  }));
  it('should be created', () => {
    const service: ArticleService = TestBed.get(ArticleService);
    expect(service).toBeTruthy();
  });
});
