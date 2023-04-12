function convertUserHeaderEncodingMiddleware(req, _res, next) {
  const { user: originalUserHeader } = req.headers;

  if (originalUserHeader) {
    const latin1Buffer = Buffer.from(originalUserHeader, "latin1");
    const utf8UserHeader = latin1Buffer.toString("utf8");
    req.headers.user = utf8UserHeader;
  }

  next();
}

export default convertUserHeaderEncodingMiddleware;
