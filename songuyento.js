let count = +prompt("nhap so luong so nguyen to can lay");
let soluong = 0;
let x = 2;

// function isPrime(number) {
//   if (number < 2) return false;
//   for (i = 2; i < number ** 0.5 + 1; i++) {
//     if (number % i == 0) return false;
//   }

//   return true;
// }

while (soluong < count) {
  let isPrime = true;
  for (i = 2; i <= x ** 0.5; i++) {
    if (x % i == 0) {
      isPrime = false;
      break;
    }
  }
  if (isPrime) {
    soluong++;
    document.write(x + "<br>");
    x++;
  } else {
    x++;
  }
}
