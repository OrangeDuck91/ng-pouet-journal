import { Injectable } from '@angular/core';
import { Article } from '../model/article.model';
import { Observable, of } from 'rxjs';

@Injectable()
export class ArticleService {

  constructor() { }

  getAllArticles(): Observable<Article[]> {
    return of(MOCK_ARTICLES);
  }

  getArticleById(id: number): Observable<Article> {
    return of(MOCK_ARTICLES.find(art => art.id === id));
  }

  getArticlesByTag(tag: string): Observable<Article[]> {
    return of(MOCK_ARTICLES.filter(art => art.tags.includes(tag)));
  }

}
/* tslint:disable max-line-length */
const MOCK_ARTICLES = [
  {
    id: 1,
    title: 'Article 1',
    intro: 'Ceci est l\'intro de l\'article 1.',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum',
    picture: '../assets/images/article1.jpg',
    tags: ['science', 'space']
  },
  {
    id: 2,
    title: 'Article 2',
    intro: 'Ceci est l\'intro de l\'article 2.',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum',
    picture: '../assets/images/article2.jpg',
    tags: ['science', 'medecine']
  },
  {
    id: 3,
    title: 'Article 3',
    intro: 'Ceci est l\'intro de l\'article 3.',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum',
    picture: '../assets/images/article3.jpg',
    tags: ['sport', 'hockey']
  },
  {
    id: 4,
    title: 'Article 4',
    intro: 'Ceci est l\'intro de l\'article 4.',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum',
    picture: '../assets/images/article4.jpg',
    tags: ['sport', 'motoGP']
  },
  {
    id: 5,
    title: 'Article 5',
    intro: 'Ceci est l\'intro de l\'article 5.',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum',
    picture: '../assets/images/article5.jpg',
    tags: ['politics', 'trump']
  },
  {
    id: 6,
    title: 'Article 6',
    intro: 'Ceci est l\'intro de l\'article 6.',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum',
    picture: '../assets/images/article6.jpg',
    tags: ['politics', 'yellow jackets']
  }
] as Article[];

/* tslint:enable max-line-length */