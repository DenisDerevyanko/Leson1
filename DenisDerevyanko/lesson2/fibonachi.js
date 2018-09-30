function fibonachi(n) {
  var number;

  if (n >= 2) {
    number = fibonachi(n - 1) + fibonachi(n - 2);
  } else {
    number = n
  }
  return number;
}
alert(fibonachi(8)); 