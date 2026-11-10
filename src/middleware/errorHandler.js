const errorHandler = (error, req, res, _next) => {
  const status = error.status ?? error.statusCode ?? 500;
  const safeStatus = status >= 400 && status < 600 ? status : 500;

  if (safeStatus === 500) {
    req.log?.error(error);
  }

  res.status(safeStatus).json({ message: error.message || 'Internal Server Error' });
};

export default errorHandler;