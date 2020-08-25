import { TestBed } from '@angular/core/testing';

import { TokenInterceptorService } from './token-interceptor.service';

describe('TokenInterceptorInterceptor', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      TokenInterceptorService
    ]
  }));

  it('should be created', () => {
    const interceptor: TokenInterceptorService = TestBed.inject(TokenInterceptorService);
    expect(interceptor).toBeTruthy();
  });
});
