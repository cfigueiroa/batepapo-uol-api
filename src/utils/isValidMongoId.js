function isValidMongoId(input) {
  return typeof input === "string" && input.length === 24 && /^[0-9a-fA-F]+$/.test(input);
}

export default isValidMongoId;
