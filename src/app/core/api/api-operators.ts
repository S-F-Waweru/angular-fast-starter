import { catchError, map, Observable, of, OperatorFunction } from 'rxjs';
import { toApiError } from './api-error.model';
import { apiFailure, ApiResult, apiSuccess } from './api-result.model';

export function toApiResult<T>(fallbackMessage?: string): OperatorFunction<T, ApiResult<T>> {
  return (source: Observable<T>) =>
    source.pipe(
      map((data) => apiSuccess(data)),
      catchError((error) => of(apiFailure(toApiError(error, fallbackMessage))))
    );
}
