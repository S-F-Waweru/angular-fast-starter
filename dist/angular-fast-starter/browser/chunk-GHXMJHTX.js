import {
  HttpErrorResponse
} from "./chunk-XVYRP3BM.js";

// src/app/core/api/api-error.model.ts
function isApiError(error) {
  return typeof error === "object" && error !== null && "status" in error && "retryable" in error;
}
function apiErrorMessage(error, fallback = "Something went wrong") {
  return toApiError(error, fallback).message;
}
function toApiError(error, fallback = "Something went wrong") {
  if (isApiError(error)) {
    return error;
  }
  if (error instanceof HttpErrorResponse) {
    return fromHttpError(error, fallback);
  }
  if (isRecord(error) && "status" in error) {
    const status = asNumber(error["status"]) ?? 500;
    const body = isRecord(error["error"]) ? error["error"] : void 0;
    return {
      status,
      message: asString(body?.["message"]) ?? asString(error["message"]) ?? fallback,
      code: asString(body?.["code"]) ?? asString(error["code"]),
      fieldErrors: collectFieldErrors(body?.["errors"] ?? body?.["fieldErrors"]),
      correlationId: asString(body?.["correlationId"]) ?? asString(error["correlationId"]),
      retryable: isRetryable(status),
      details: error
    };
  }
  return {
    status: 500,
    message: fallback,
    retryable: true,
    details: error
  };
}
function fromHttpError(error, fallback) {
  const body = isRecord(error.error) ? error.error : void 0;
  return {
    status: error.status || 500,
    message: asString(body?.["message"]) ?? error.message ?? fallback,
    code: asString(body?.["code"]),
    fieldErrors: collectFieldErrors(body?.["errors"] ?? body?.["fieldErrors"]),
    correlationId: asString(body?.["correlationId"]) ?? error.headers.get("x-correlation-id") ?? void 0,
    retryable: isRetryable(error.status),
    details: error
  };
}
function collectFieldErrors(value) {
  if (Array.isArray(value)) {
    const errors = value.filter(isRecord).map((item) => ({
      field: asString(item["field"]) ?? "",
      message: asString(item["message"]) ?? "Invalid value"
    })).filter((item) => item.field);
    return errors.length ? errors : void 0;
  }
  if (isRecord(value)) {
    const errors = Object.entries(value).flatMap(([field, messages]) => {
      if (Array.isArray(messages)) {
        return messages.map((message) => ({ field, message: String(message) }));
      }
      return [{ field, message: String(messages) }];
    });
    return errors.length ? errors : void 0;
  }
  return void 0;
}
function isRetryable(status) {
  return status === 0 || status === 408 || status === 429 || status >= 500;
}
function isRecord(value) {
  return typeof value === "object" && value !== null;
}
function asString(value) {
  return typeof value === "string" && value.trim() ? value : void 0;
}
function asNumber(value) {
  return typeof value === "number" ? value : void 0;
}

export {
  apiErrorMessage,
  toApiError
};
//# sourceMappingURL=chunk-GHXMJHTX.js.map
