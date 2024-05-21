const images = [
  "1.jpeg",
  "2.jpeg",
  "3.jpeg",
  "4.jpeg",
  "5.jpeg",
  "6.jpeg",
  "7.jpeg",
];

const randomImages = images[Math.floor(Math.random() * images.length)];
const etPng = document.createElement("img");

etPng.src = `img/${randomImages}`;
document.body.appendChild(etPng);

//const png = [`${i}.png`]

// function randompicker(arrT) {
//   var t1 = arrT;
//   if (Array.isArray(t1)) {
//     var t2 = "";
//     var t3 = 0;
//     var t4 = Math.floor(Math.random() * arrT.length);
//     if (typeof t1[t4] == "string") {
//       t2 = t1[t4];
//     } else if (typeof t1[t4] == "number") {
//       t3 = t1[t4];
//     }

//     var result = t2 == "" ? t3 : t2;

//     return result;
//   }
// }
