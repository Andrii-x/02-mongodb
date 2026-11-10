import { HttpError } from 'http-errors';

export const errorHandler = (error, req, res, _next) => {
  const isHttpError = error instanceof HttpError;
  const status = isHttpError ? error.status : 500;
  const safeStatus = status >= 400 && status < 600 ? status : 500;
  const message =
    error.message || (isHttpError ? error.name : 'Internal Server Error');

  if (safeStatus === 500) {
    req.log?.error(error);
  }

  res.status(safeStatus).json({ message });
};