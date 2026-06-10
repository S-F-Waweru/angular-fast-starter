import { HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { catchError, throwError } from 'rxjs';
import { AuthTokenService } from '../auth/auth-token.service';
import { toApiError } from './api-error.model';

export const apiInterceptor: HttpInterceptorFn = (request, next) => {
  const tokens = inject(AuthTokenService);
  const accessToken = tokens.getAccessToken();
  const headers: Record<string, string> = {
    Accept: 'application/json',
  };

  if (accessToken) {
    headers['Authorization'] = `Bearer ${accessToken}`;
  }

  const apiRequest = request.clone({
    setHeaders: headers,
  });

  return next(apiRequest).pipe(
    catchError((error) => {
      return throwError(() => toApiError(error));
    })
  );
};
