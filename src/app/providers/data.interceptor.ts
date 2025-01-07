import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpHeaders,
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class DataInterceptor implements HttpInterceptor {
  constructor() {}

  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    const modifiedReq = request.clone({
      headers: new HttpHeaders({
        'Access-Control-Allow-Origin': 'http://localhost:4200',
        // Authorization: 'Bearer YOUR_ACCESS_TOKEN'
      }),
    });
    console.log(modifiedReq);

    return next.handle(modifiedReq);
  }
}
