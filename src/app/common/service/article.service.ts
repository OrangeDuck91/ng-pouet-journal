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
    return this.http.get<Article[]>(`${endpoint}/articles`);
  }

  getArticleById(id: number): Observable<Article> {
    return this.http.get<Article>(`${endpoint}/articles/${id}`);
  }

  getArticlesByTag(tag: string): Observable<Article[]> {
    return this.http.get<Article[]>(`${endpoint}/tags/${tag}/articles`);
  }
}
