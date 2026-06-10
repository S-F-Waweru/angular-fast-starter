import { ApiError } from './api-error.model';

export interface ApiSuccess<T> {
  ok: true;
  data: T;
  error: null;
}

export interface ApiFailure {
  ok: false;
  data: null;
  error: ApiError;
}

export type ApiResult<T> = ApiSuccess<T> | ApiFailure;

export function apiSuccess<T>(data: T): ApiSuccess<T> {
  return {
    ok: true,
    data,
    error: null,
  };
}

export function apiFailure(error: ApiError): ApiFailure {
  return {
    ok: false,
    data: null,
    error,
  };
}
