function stringLength(string) {
  const len = string.length;
  if (len > 0 && len < 10) return "string must be between 0 - 10";
  return string.length;
}

module.exports = stringLength;
