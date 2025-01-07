import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  constructor(private http: HttpClient) {}

  WebBaseurl = 'https://localhost:8080';
  getData(url: string): Observable<any> {
    return this.http.get<any>(url);
  }

  postData(url: string, data: any): Observable<any> {
    return this.http.post<any>(url, data);
  }
}
