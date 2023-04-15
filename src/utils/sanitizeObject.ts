import { stripHtml } from "string-strip-html";

function isString(value: unknown): value is string {
  return typeof value === "string";
}

function sanitizeString(value: string) {
  return stripHtml(value).result.trim();
}

function sanitizeObject(obj: Record<string, any>) {
  for (const key in obj) {
    if (!obj.hasOwnProperty(key)) {
      continue;
    }

    const value = obj[key];

    if (isString(value)) {
      obj[key] = sanitizeString(value);
    } else {
      obj[key] = sanitizeObject(value);
    }
  }

  return obj;
}

export default sanitizeObject;
