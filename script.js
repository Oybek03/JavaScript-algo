// let arr = [1, 2000, 300, 5];
// let opshi = arr
//   .filter((val) => val > 2)
//   .map((val) => val * 5)
//   .reduce((yig, val) => {
//     return yig + val;
//   }, 20);
// console.log(opshi);

// let obj1 = {
//   name: "umid",
//   age: 22,
// };
// let obj2 = {
//   name: "oybek",
//   age: 26,
// };
// let obj3 = {
//   name: "doston",
//   age: 19,
// };
// let arr = [obj1, obj2, obj3];

// let x = arr.findIndex((val) => val.name == "doston");
// console.log(x);

// let arr = [10, -5, 8, 9];

// let bor = arr.some((val) => val > 1);
// console.log(bor);

// let yoq = arr.every((val) => val > 1);
// console.log(yoq);

// let arrrr = ["a", "b", "c"];
// let y = arrrr.every((val) => val == "a");
// console.log(y);

// let arr = [[1, 2], 7, 8, [4, 7, [8, 5]]];
// let d = arr.flat(2).map((val) => val * 5);
// console.log(d);

// let arr = [[1, 2], 7, 8, [4, 7, [8, 5]]];
// let arr2 = [[1, 5], 4, 8, [[5, 8, 7]]];
// let arr3 = [1, 8, 7, [8, 7], 7, 3, [5, 9]];
// let arr0 = [arr, arr2, arr3];
// let x = arr0.flatMap(function (val) {
//   return val;
// });
// console.log(x);

// let ara = ["a", "d", "r", "t", "q"];
// let soso = ara.sort();
// console.log(soso);

// let son = [1, 9, 7, 5, 8, 3, 0, 1, 3];
// console.log(son.sort());

// Javascript program to find the string which
// contain the first character of each word
// of another string.

// Function to find string which has first
// // character of each word.
// function firstLetterWord(str) {
//   let result = "";

// Traverse the string.
//   let v = true;
//   for (let i = 0; i < str.length; i++) {
//     // If it is space, set v as true.
//     if (str[i] == " ") {
//       v = true;
//     }

//     // Else check if v is true or not.
//     // If true, copy character in output
//     // string and set v as false.
//     else if (str[i] != " " && v == true) {
//       result += str[i];
//       v = false;
//     }
//   }
//   return result;
// }

// let str = "geeks for geeks";
// document.write(firstLetterWord("alom"));

// function isPangram(sentence) {
//   let lowerCased = sentence.toLowerCase();
//   let letters = "abcdefghijklmnopqrstuvwxyz";
//   // traditional for loop can also be used
//   for (let char of letters) {
//     if (!lowerCased.includes(char)) return false;
//   }
//   return true;
// }
// console.log(isPangram("char"));

// let s = "jdefdmajwiegokfewidjwcijfwsoft";
// let m = "magicsoft";
// let ma = m.split("");
// let a = s.split("");

// let obshi = function () {
//   for (let i = 0; i < a.length; i++) {
//     if (ma[0] == a[i]) {
//       console.log("topdim");
//     } else {
//       console.log("topolmadim");
//     }
//   }
// };
// console.log(obshi());
// let opshi = a.filter(function (val) {
//   for (let i = 0; i < a.length; i++) {
//     if (a[i] == ma[i]) {
//       console.log("topdim");
//     } else {
//       console.log("topolmadim");
//     }
//     a[i] == ma[i];
//   }
// });
// console.log(opshi);

//14-masala

// let a = [4, 7, 5];
// if (a[0] > a[1]) {
//   console.log(a[1]);
// }
// else if(a[0]<a[1]){
//   console.log(a[0]);
// }
// else if(a[])

//for 4-masala
// let narx = 5;
// for (let i = 1; i <= 10; i++) {
//   console.log(narx * i);
// }

// for 5-masala
// let first = 1;
// let second = 5;
// for (let i = first; i <= second; i++) {
//   console.log(i + (second - i));
// }

//for masala 11

//if 1
// let num = Number(prompt("son kiriting"));

// if (num > 0) {
//   console.log(num + 1);
// } else {
//   console.log(num);
// }

//if2

// let num = Number(prompt("son kiriting"));

// if (num > 0) {
//   console.log(num + 1);
// } else {
//   console.log(num + 2);
// }

// if3
// let sum = Number(prompt(""));
// if (sum > 0) {
//   console.log(sum + 1);
// } else if (sum < 0) {
//   console.log(sum - 1);
// } else if (sum == 0) {
//   console.log(10);
// }

//if4

// let x = prompt("1-son");
// let y = prompt("2-son kirit");
// let z = prompt("3-kirit");
// let x1 = x.split("");
// let x2 = y.split("");
// let x3 = z.split("");
// let full = [...x1, ...x2, ...x3];

// let musbat = 0;
// let manfiy = 0;
// for (let el of full) {
//   if (Number(el) > 0) {
//     musbat++;
//   } else if (Number(el) < 0) {
//     manfiy++;
//   }
// }

// console.log(`Musbat sonlar ${musbat}ta,manfiy sonlar ${manfiy}ta`);

//if 6

// let x = Number(prompt("1-son kirit"));
// let y = Number(prompt("2-son kirit"));

// if (x > y) {
//   console.log(x);
// } else if (x < y) {
//   console.log(y);
// } else if (x == y) {
//   console.log(`${x} = ${y}`);
// } else {
//   console.log("nimadir xato");
// }

//if13

// let bir = Number(prompt("1-son"));
// let ikki = Number(prompt("2-son"));
// let uch = Number(prompt("3-son"));

// if (
//   bir > ikki > uch ||
//   uch > ikki > bir ||
//   bir < ikki < uch ||
//   uch < ikki < bir
// ) {
//   alert(`${ikki}`);
// } else if (
//   ikki > bir > uch ||
//   uch > bir > ikki ||
//   ikki < bir < uch ||
//   uch < bir < ikki
// ) {
//   alert(`${bir}`);
// } else if (
//   ikki > uch > bir ||
//   bir > uch > ikki ||
//   ikki < uch < bir ||
//   bir < uch < ikki
// ) {
//   alert(`${uch}`);
// }
// if (bir == ikki || bir == uch || uch == ikki) {
//   alert("qaysidir qiymatlaringiz bir xil");
// } else {
//   aler("yana bilmadim");
// }

//if 15

// let a = Number(prompt("1-son"));
// let b = Number(prompt("2-son"));
// let c = Number(prompt("3-son"));

// if (a + b > c + a && a + b > b + c) {
//   console.log(a, b);
// } else if (a + c > b + c && a + c > a + b) {
//   console.log(a, c);
// } else if (b + c > a + b && b + c > a + c) {
//   console.log(b, c);
// }

//if 17

// let a = Number(prompt("1-son"));
// let b = Number(prompt("2-son"));
// let c = Number(prompt("3-son"));

// if (a > b > c || a < b < c) {
//   console.log(a * 2, b * 2, c * 2);
// } else {
//   console.log(a * -1, b * -1, c * -1);
// }

// so'zni  top

// let s = "qwertyuiopasdfghjklzxcvbnm";
// let str = prompt("ss");

// let arr = s.toLowerCase();
// let new10 = [];
// let index = -8;

// for (let i = 0; i < str.length; i++) {
//   for (let j = 0; j < arr.length; j++) {
//     if (str[i] == arr[j]) {
//       if (index < j) {
//         index = j;
//         new10.push(arr[j]);
//         break;
//       }
//     }
//   }
// }
// if (new10.length == str.length) {
//   console.log(`topdim`);
// } else {
//   console.log(`topolmadim`);
// }
// console.log(new10);

// let x = "umid".split("");
// let a = ["umid", "ulug", "oybek", "jamil", "amam"];
// console.log(x.sort(), a.sort());
// let uu = "u1id";
// let oo = uu.charCodeAt(1);
// console.log(oo);
// console.log(x);

// for (let i = 0; i < x.length; i++) {
//   if (x[i].charCodeAt(i) > x[i + 1].charCodeAt(i)) {
//     [x[i], x[i + 1]] = [x[i + 1], x[i]];
//     // console.log(x[i].replice(x[i], x[i + 1]));
//   }
// }
// let summ = 2436655;
// let numm = [12, 22, 252, 78, 11111];
// console.log(numm.sort());
// console.log(summ.sort());

// let xas = String.fromCharCode(55);
// console.log(xas);

// let son = numm.sort((a, b) => {
//   if (a > b) return 1;
//   else return -1;
// });
// console.log(son);
// let son1 = numm.sort((a, b) => {
//   if (a < b) return 1;
//   else return -1;
// });
// console.log(son1);

//1 - MASALA

// for (let belgi = "*"; belgi.length < 8; belgi = belgi + "*") {
//   console.log(belgi);
// }

// // 2 - MASALA
// let natija = "";
// let line1 = " * * * * * * * *";
// let line2 = "* * * * * * * *";

// for (let i = 0; i < 8; i++) {
//   if (i % 2 == 0) {
//     natija = natija + line1 + "\n";
//   } else {
//     natija = natija + line2 + "\n";
//   }
// }
// console.log(natija);

//if20;
// let A = Number(prompt("A ni kirit"));
// let B = Number(prompt("B ni kirit"));
// let C = Number(prompt("C ni kirit"));

// if (Math.abs(A - B) < Math.abs(A - C)) {
//   console.log(
//     `A nuqtaga eng yaqin nuqta: ${B}, va uning uzinligi: ${Math.abs(A - B)}`
//   );
// } else if (Math.abs(A - C) < Math.abs(A - B)) {
//   console.log(
//     `A nuqtaga eng yaqin nuqta: ${Math.abs(C)}, va uning uzinligi: ${Math.abs(
//       A - C
//     )}`
//   );
// }

//if 23
// let X = Number(prompt("x ning qiymatini kiritig"));
// let Y = Number(prompt("y ning qiymatini kiriting"));

// if (X > 0 && Y > 0) {
//   console.log("birinchi chorakda yotadi");
// } else if (X > 0 && Y < 0) {
//   console.log("turtinchi  chorakda yotadi");
// } else if (X < 0 && Y < 0) {
//   console.log("uchinch chorakda yotadi");
// } else if (X < 0 && Y > 0) {
//   console.log("ikkinchi chorakda yotadi");
// } else {
//   console.log("o'qlar ustida yotdi");
// }

//if 28

let yil = Number(prompt("yilni kiriting"));
if (yil % 4 == 0 && yil % 400 == 0) {
  alert("bu yilda 366 kun bor ");
} else {
  alert("bu yilda 365 kun bor");
}
