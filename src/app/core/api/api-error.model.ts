import { HttpErrorResponse } from '@angular/common/http';

export interface ApiFieldError {
  field: string;
  message: string;
}

export interface ApiError {
  status: number;
  message: string;
  code?: string;
  fieldErrors?: ApiFieldError[];
  correlationId?: string;
  retryable: boolean;
  details?: unknown;
}

export function isApiError(error: unknown): error is ApiError {
  return typeof error === 'object' && error !== null && 'status' in error && 'retryable' in error;
}

export function apiErrorMessage(error: unknown, fallback = 'Something went wrong') {
  return toApiError(error, fallback).message;
}

export function toApiError(error: unknown, fallback = 'Something went wrong'): ApiError {
  if (isApiError(error)) {
    return error;
  }

  if (error instanceof HttpErrorResponse) {
    return fromHttpError(error, fallback);
  }

  if (isRecord(error) && 'status' in error) {
    const status = asNumber(error['status']) ?? 500;
    const body = isRecord(error['error']) ? error['error'] : undefined;

    return {
      status,
      message: asString(body?.['message']) ?? asString(error['message']) ?? fallback,
      code: asString(body?.['code']) ?? asString(error['code']),
      fieldErrors: collectFieldErrors(body?.['errors'] ?? body?.['fieldErrors']),
      correlationId: asString(body?.['correlationId']) ?? asString(error['correlationId']),
      retryable: isRetryable(status),
      details: error,
    };
  }

  return {
    status: 500,
    message: fallback,
    retryable: true,
    details: error,
  };
}

function fromHttpError(error: HttpErrorResponse, fallback: string): ApiError {
  const body = isRecord(error.error) ? error.error : undefined;

  return {
    status: error.status || 500,
    message: asString(body?.['message']) ?? error.message ?? fallback,
    code: asString(body?.['code']),
    fieldErrors: collectFieldErrors(body?.['errors'] ?? body?.['fieldErrors']),
    correlationId: asString(body?.['correlationId']) ?? error.headers.get('x-correlation-id') ?? undefined,
    retryable: isRetryable(error.status),
    details: error,
  };
}

function collectFieldErrors(value: unknown): ApiFieldError[] | undefined {
  if (Array.isArray(value)) {
    const errors = value
      .filter(isRecord)
      .map((item) => ({
        field: asString(item['field']) ?? '',
        message: asString(item['message']) ?? 'Invalid value',
      }))
      .filter((item) => item.field);

    return errors.length ? errors : undefined;
  }

  if (isRecord(value)) {
    const errors = Object.entries(value).flatMap(([field, messages]) => {
      if (Array.isArray(messages)) {
        return messages.map((message) => ({ field, message: String(message) }));
      }

      return [{ field, message: String(messages) }];
    });

    return errors.length ? errors : undefined;
  }

  return undefined;
}

function isRetryable(status: number) {
  return status === 0 || status === 408 || status === 429 || status >= 500;
}

function isRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === 'object' && value !== null;
}

function asString(value: unknown) {
  return typeof value === 'string' && value.trim() ? value : undefined;
}

function asNumber(value: unknown) {
  return typeof value === 'number' ? value : undefined;
}
