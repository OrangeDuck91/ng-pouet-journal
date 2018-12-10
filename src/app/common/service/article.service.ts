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
    title: 'Soviet N1 Rocket that failed to go to the moon',
    intro: 'In the 60\s, cold war is at it\s peek and the race to the moon concentrate the best scientific efforts of the two blocks. The N1 rocket is built as a response to the massive Saturn V launcher.',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum',
    picture: '../assets/images/article1.jpg',
    tags: ['science', 'space']
  },
  {
    id: 2,
    title: 'Top 10 of the viruses that nearly destroyed humanity.',
    intro: 'Form the Black Plague to the HIV, human race as always been threatened by epidemics. Among theses viruses, some of them were close to destroy humanity.',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum',
    picture: '../assets/images/article2.jpg',
    tags: ['science', 'medecine']
  },
  {
    id: 3,
    title: 'Why you should go to a hockey game in Canada.',
    intro: 'An article to explain why you should spend 200$ on a ticket to see armored guys battle on ice.',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum',
    picture: '../assets/images/article3.jpg',
    tags: ['sport', 'hockey']
  },
  {
    id: 4,
    title: 'Marquez VS Rossi, the battle on GP tracks.',
    intro: 'The first one won the world championish on his first year at the age of 20. The second is 9 times world champion and on track for more than 15 years. A clash of generations.',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum',
    picture: '../assets/images/article4.jpg',
    tags: ['sport', 'motoGP']
  },
  {
    id: 5,
    title: 'D.Trump to Kim Jon Un : "My red button is bigger"',
    intro: 'Once again, the US president uses his legendary diplomatic way to cool down relations with North Korea. Another great lesson in geopolitics.',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum',
    picture: '../assets/images/article5.jpg',
    tags: ['politics', 'trump']
  },
  {
    id: 6,
    title: 'France: yellow jackets riots knockin\' on Macron\'s door.',
    intro: 'For the fourth consecutive saturday, the yellow jackets filled the streets of France. E.Macron stays deaf to his people and send more police.',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum',
    picture: '../assets/images/article6.jpg',
    tags: ['politics', 'yellow jackets']
  }
] as Article[];

/* tslint:enable max-line-length */