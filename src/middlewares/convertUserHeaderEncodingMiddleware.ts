import { Request, Response, NextFunction } from "express";

function convertUserHeaderEncodingMiddleware(req: Request, _res: Response, next: NextFunction) {
  const userHeaderValue = req.headers.user;
  const userHeaderIsString = typeof userHeaderValue === "string";

  if (userHeaderIsString) {
    const latin1Buffer = Buffer.from(userHeaderValue, "latin1");
    const utf8UserHeader = latin1Buffer.toString("utf8");
    req.headers.user = utf8UserHeader;
  }

  next();
}

export default convertUserHeaderEncodingMiddleware;
