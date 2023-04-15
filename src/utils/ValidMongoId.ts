function validMongoId(input: string | number) {
  const isStringOf24HexCharacters = typeof input === "string" && input.length === 24 && /^[0-9a-fA-F]+$/.test(input);
  const isStringOf12Bytes = typeof input === "string" && input.length === 12 && /^[0-9a-fA-F]+$/.test(input);
  const isNumberConvertibleTo24Hex =
    Number.isInteger(input) && /^[0-9a-fA-F]{1,8}$/.test(input.toString(16)) && input.toString(16).padStart(24, "0");

  if (isStringOf24HexCharacters || isStringOf12Bytes || isNumberConvertibleTo24Hex) {
    return input;
  } else {
    return 0;
  }
}

export default validMongoId;
