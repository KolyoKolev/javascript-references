function stringEndsWithVersionOne(originStr, end) {
  return originStr.substring(originStr.length - end.length) == end;
}

function stringEndsWithVersionTwo(originStr, end) {
  return originStr.endsWith(end);
}

stringEndsWithVersionOne('ill', 'fill'); // false
stringEndsWithVersionTwo('ill', 'fill'); // false
stringEndsWithVersionOne('123', ''); // true
stringEndsWithVersionTwo('123', ''); // true
