import { Injectable } from "@angular/core";
import { Article } from "../model/article.model";
import { Observable, of } from "rxjs";
import {
  HttpClient,
  HttpHeaders,
  HttpErrorResponse
} from "@angular/common/http";

const endpoint = "http://localhost:8080/article-api";
const httpOptions = {
  headers: new HttpHeaders({
    "Content-Type": "application/json"
  })
};

@Injectable()
export class ArticleService {
  constructor(private http: HttpClient) {}

  getAllArticles(): Observable<Article[]> {
    return this.http.get<Article[]>(`${endpoint}/articles`).pipe(catchError(this.handleError('getAticles', [])));
  }

  getArticleById(id: number): Observable<Article> {
    return this.http.get<Article>(`${endpoint}/articles/${id}`).pipe(catchError(this.handleError('getAticles', new Article())));
  }

  getArticlesByTag(tag: string): Observable<Article[]> {
    return this.http.get<Article[]>(`${endpoint}/tags/${tag}/articles`).pipe(catchError(this.handleError('getAticles', [])));
  }

  /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
  */
  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
 
      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead
 
      // TODO: better job of transforming error for user consumption
 
      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
 
}
