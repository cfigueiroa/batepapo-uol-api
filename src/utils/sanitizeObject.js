import { stripHtml } from "string-strip-html";

function isString(value) {
  return typeof value === "string";
}

function sanitizeString(value) {
  return stripHtml(value).result.trim();
}

function sanitizeObject(obj) {
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
