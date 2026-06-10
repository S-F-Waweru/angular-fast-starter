import { HttpClient, HttpContext, HttpHeaders, HttpParams } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { API_CONFIG } from './api.config';
import { toApiResult } from './api-operators';
import { ApiResult } from './api-result.model';

type ApiParams = HttpParams | Record<string, string | number | boolean | readonly (string | number | boolean)[]>;

export interface ApiRequestOptions {
  headers?: HttpHeaders | Record<string, string | string[]>;
  params?: ApiParams;
  context?: HttpContext;
}

@Injectable({ providedIn: 'root' })
export class ApiClient {
  private readonly http = inject(HttpClient);
  private readonly config = inject(API_CONFIG);

  get<T>(path: string, options?: ApiRequestOptions): Observable<ApiResult<T>> {
    return this.http.get<T>(this.url(path), options).pipe(toApiResult());
  }

  post<T>(path: string, body: unknown, options?: ApiRequestOptions): Observable<ApiResult<T>> {
    return this.http.post<T>(this.url(path), body, options).pipe(toApiResult());
  }

  put<T>(path: string, body: unknown, options?: ApiRequestOptions): Observable<ApiResult<T>> {
    return this.http.put<T>(this.url(path), body, options).pipe(toApiResult());
  }

  patch<T>(path: string, body: unknown, options?: ApiRequestOptions): Observable<ApiResult<T>> {
    return this.http.patch<T>(this.url(path), body, options).pipe(toApiResult());
  }

  delete<T>(path: string, options?: ApiRequestOptions): Observable<ApiResult<T>> {
    return this.http.delete<T>(this.url(path), options).pipe(toApiResult());
  }

  private url(path: string) {
    if (/^https?:\/\//.test(path)) {
      return path;
    }

    const baseUrl = this.config.baseUrl.replace(/\/$/, '');
    const normalizedPath = path.startsWith('/') ? path : `/${path}`;

    return `${baseUrl}${normalizedPath}`;
  }
}
