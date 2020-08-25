import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { JwtService } from '../services/jwt.service';

@Injectable()
export class TokenInterceptorService implements HttpInterceptor {

  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    if (
      this.jwtService.hasValidAccessToken() &&
      !request.url.startsWith(`/assets`) &&
      !request.url.includes(`/auth`)
    ) {
      request = request.clone({
        setHeaders: {
          'Authorization': `Bearer ${this.jwtService.getToken()}`
        }
      });
    }
    return next.handle(request);
  }

  constructor(private jwtService: JwtService) { }
}
