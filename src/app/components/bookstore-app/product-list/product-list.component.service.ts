import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http"
import { book } from "./model/book";


@Injectable()

export class booksService {
    private url = ' https://localhost:44382/api/bookstore';
    httpOptions = {
        Headers: new HttpHeaders({ 'content-type': 'application/jason' })
    }
    constructor(private http: HttpClient) { }

    getbook() {
        return this.http.get(this.url)
    }





}