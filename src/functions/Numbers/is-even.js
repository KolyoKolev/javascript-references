function isEvenVersionOne(n) {
  if (n == 0) return true;
  else if (n == 1) return false;
  else if (n < 0) return isEvenVersionOne(-n);
  else return isEvenVersionOne(n - 2);
}

function isEvenVersionTwo(n) {
  if (n % 2 == 0) return true;
  else if (n % 1 == 0) return false;
}

isEvenVersionOne(89);
isEvenVersionOne(90);
isEvenVersionOne(-89);
isEvenVersionOne(-90);
isEvenVersionTwo(89);
isEvenVersionTwo(90);
isEvenVersionTwo(-89);
isEvenVersionTwo(-90);
