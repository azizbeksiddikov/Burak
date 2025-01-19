// T-TASK

// Shunday function tuzing, u sonlardan tashkil topgan 2'ta array qabul qilsin.
// Va ikkala arraydagi sonlarni tartiblab bir arrayda qaytarsin.
// MASALAN: mergeSortedArrays([0, 3, 4, 31], [4, 6, 30]); return [0, 3, 4, 4, 6, 30, 31];
// Yuqoridagi misolda, ikkala arrayni birlashtirib, tartib raqam bo'yicha tartiblab qaytarmoqda.
function mergeSortedArrays(arr1: number[], arr2: number[]): number[] {
  const result: number[] = [];

  let i = 0,
    j = 0,
    k = 0;

  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] <= arr2[j]) {
      result[k] = arr1[i];
      i++;
    } else {
      result[k] = arr2[j];
      j++;
    }
    k++;
  }

  while (i < arr1.length) {
    result[k] = arr1[i];
    i++;
    k++;
  }

  while (j < arr2.length) {
    result[k] = arr2[j];
    j++;
    k++;
  }

  return result;
}

console.log(mergeSortedArrays([0, 3, 4, 31], [4, 6, 30])); // [0, 3, 4, 4, 6, 30, 31]

// S-TASK:
// Shunday function yozing, u numberlardan tashkil topgan array qabul qilsin
// va osha numberlar orasidagi tushib qolgan sonni topib uni return qilsin
// MASALAN: missingNumber([3, 0, 1]) return 2
// function missingNumber(arr: number[]) {
//   arr.sort();
//   for (let i = 1; i < arr.length; i++) {
//     const diff = arr[i] - arr[i - 1];
//     if (diff > 1) {
//       return arr[i - 1] + 1;
//     }
//   }
// }
// console.log(missingNumber([3, 0, 1])); // 2
// console.log(missingNumber([3, 0, 1, 2, 5])); // 4
// console.log(missingNumber([0, 1, 2, 5])); // 3

// Q-TASK:
// Shunday function yozing, u 2 ta parametrgga ega bolib birinchisi object, ikkinchisi string.
// Agar string parametr objectni propertysi bolsa true bolmasa false qaytarsin.
// MASALAN:
// hasProperty({name: "BMW", model: "M3"}, "model") return true;
// hasProperty({name: "BMW", model: "M3"}, "year") return false
// function hasProperty(obj: {}, word: string): boolean {
//   // return word in obj;
//   const keys = Object.entries(obj).map((ele) => {
//     return ele[0];
//   });
//   return keys.includes(word);
// }

// console.log(hasProperty({ name: "BMW", model: "M3" }, "model")); // return true;
// console.log(hasProperty({ name: "BMW", model: "M3" }, "year")); // return false
// P-TASK:

// Shunday function yozing, u object qabul qilsin va arrayni qaytarsin.
// MASALAN: objectToArray( {a: 10, b: 20}) return [['a', 10], ['b', 20]]

// function objectToArray(obj: {}) {
//   return Object.entries(obj).map(([key, val]) => {
//     return [String(key), String(val)];
//   });
// }
// // { a: 10, b: 20 } => [['a', 10], ['b', 20]]
// console.log(objectToArray({ a: 10, b: 20 })); // [['a', 10], ['b', 20]]

// O-TASK:

// Shunday function yozing, u har xil valuelardan iborat array qabul qilsin va array ichidagi sonlar yigindisini hisoblab chiqqan javobni qaytarsin.
// MASALAN: calculateSumOfNumbers([10, "10", {son: 10}, true, 35]) return 45
// function calculateSumOfNumbers(arr: any[]): number {
//   return arr.reduce((acc, ele) => (Number.isInteger(ele) ? acc + ele : acc), 0);
// }

// console.log(calculateSumOfNumbers([10, "10", { son: 10 }, true, 35])); // return 45

// N-TASK:

// Shunday function yozing, u string qabul qilsin va string palindrom yani togri oqilganda ham,
// orqasidan oqilganda ham bir hil oqiladigan soz ekanligini aniqlab boolean qiymat qaytarsin.
// MASALAN: palindromCheck("dad") return true;  palindromCheck("son") return false;
// function palindromCheck(word: string): boolean {
//   return word == word.split("").reverse().join("");
// }
// console.log(palindromCheck("dad")); // true
// console.log(palindromCheck("son")); // false

// M-TASK:

// Shunday function yozing, u raqamlardan tashkil topgan array qabul qilsin va array ichidagi
// har bir raqam uchun raqamni ozi va hamda osha raqamni kvadratidan tashkil topgan object hosil qilib,
// hosil bolgan objectlarni array ichida qaytarsin.
// MASALAN: getSquareNumbers([1, 2, 3]) return [{number: 1, square: 1}, {number: 2, square: 4}, {number: 3, square: 9}];

// function getSquareNumbers(arr: number[]) {
//   return arr.map((ele) => {
//     return { number: ele, square: ele * ele };
//   });
// }

// console.log(getSquareNumbers([1, 2, 3])); // [{number: 1, square: 1}, {number: 2, square: 4}, {number: 3, square: 9}]

// L-TASK:
// Shunday function yozing, u string qabul qilsin va string ichidagi hamma sozlarni chappasiga yozib
// va sozlar ketma-ketligini buzmasdan stringni qaytarsin.
// MASALAN: reverseSentence("we like coding") return "ew ekil gnidoc";
// function reverseSentence(sentence: string): string {
//   const arr: string[] = sentence.split(" ");
//   for (let i = 0; i < arr.length; i++) {
//     arr[i] = arr[i].split("").reverse().join("");
//   }
//   return arr.join(" ");
// }

// function reverseSentence(sentence: string): string {
//   return sentence
//     .split(" ")
//     .map((word) => word.split("").reverse().join(""))
//     .join(" ");
// }

// console.log(reverseSentence("we like coding")); // "ew ekil gnidoc";

// K-TASK:
// Shunday function yozing, u string qabul qilsin va string ichidagi unli harflar sonini qaytarsin.
// MASALAN: countVowels("string") return 1;

// function countVowels(word: string): number {
//   const vowels = ["a", "e", "i", "o", "u"];
//   const letters = word.toLocaleLowerCase().split("");

//   const sum = letters.reduce((acc, char) => {
//     if (vowels.includes(char)) {
//       // console.log(char);
//       acc++;
//     }
//     return acc;
//   }, 0);

//   return sum;
// }

// console.log(countVowels("string")); // 1
// console.log(countVowels("Hello")); // 2

// J-TASK:
// Shunday function yozing, u string qabul qilsin va string ichidagi eng uzun sozni qaytarsin.
// MASALAN: findLongestWord("I come from Uzbekistan") return "Uzbekistan"
// function findLongestWord(sentence: string): string {
//   const words = sentence.split(" ");
//   let max_length = 0,
//     max_word: string = "";
//   for (let i = 0; i < words.length; i++) {
//     if (words[i].length > max_length) {
//       max_length = words[i].length;
//       max_word = words[i];
//     }
//   }
//   return max_word;
// }
// console.log(findLongestWord("I come from Uzbekistan"));

// I-TASK:
// Shunday function yozing, u parametridagi array ichida eng kop takrorlangan raqamni topib qaytarsin.
// MASALAN: majorityElement([1,2,3,4,5,4,3,4]) return 4
// function majorityElement(arr: number[]): number {
//   // freqMap
//   const freqMap: { [key: number]: number } = {};
//   for (const num of arr) {
//     freqMap[num] = (freqMap[num] || 0) + 1;
//   }

//   // find the most freq num
//   let mostFreqNum = Number.MIN_SAFE_INTEGER;
//   let mostFreq = 0;
//   for (const num in freqMap) {
//     if (freqMap[num] > mostFreq) {
//       mostFreqNum = parseInt(num);
//       mostFreq = freqMap[num];
//     }
//   }

//   // return
//   return mostFreqNum;
// }

// console.log(majorityElement([1, 2, 3, 4, 5, 4, 3, 4])); // 4
// console.log(majorityElement([1, 3, 3, 4, 5, 4, 3, 3])); // 3

/**
Projects Standars:
  - Logging Standards
  - Naming Standards
    function, method, variable => CAMEL   case goHome
    class => PASCAL case                  MemberService
    folder => KEBAB                       open-csv
    css => SNAKE                          button_style
  - Error Handling

    Express res types: send, json, redirect, end, render

 */

// H2-TASK:

// Shunday function tuzing, unga string argument pass bolsin. Function ushbu agrumentdagi digitlarni yangi stringda return qilsin
// MASALAN: getDigits("m14i1t") return qiladi "141"
// function getDigits(word: string): string {
//   let arr: number[] = [];

//   for (let char of word) {
//     if ("0" <= char && char <= "9") {
//       arr.push(Number(char));
//     }
//   }

//   return arr.join("");
//   // return word.replace(/\D/g, "");
// }

// console.log(getDigits("m14i1t")); // "141"

// TASK H:

// Raqamlardan iborat arrayni argument sifatida qabul qiladigan
// function tuzing. Ushbu function faqatgina positive sonlarni olib
// string holatida return qilsin.
// MASALAN: getPositive([1, -4, 2]) return qiladi "12".
// function getPositive(arr: number[]): string {
//   const new_arr: number[] = [];
//   for (let num of arr) {
//     if (num > 0) {
//       new_arr.push(num);
//     }
//   }
//   return new_arr.join("");
// }

// console.log(getPositive([1, -4, 2])); // "12"
// console.log(getPositive([1, 5, -4, -2])); // "15"

// G-TASK:

// Shunday function tuzingki unga integerlardan iborat array pass bolsin va
// function bizga osha arrayning eng katta qiymatiga tegishli birinchi indexni qaytarsin.
// MASALAN: getHighestIndex([5, 21, 12, 21, 8]) return qiladi 1 sonini.

// function getHighestIndex(arr: number[]): number {
//   let max_num: number = Number.MIN_VALUE,
//     max_idx: number = 0;
//   for (let index = 0; index < arr.length; index++) {
//     if (arr[index] > max_num) {
//       max_num = arr[index];
//       max_idx = index;
//     }
//   }
//   return max_idx;
// }

// console.log(getHighestIndex([5, 21, 12, 21, 8])); // 1
// console.log(getHighestIndex([5, 21, 12, 21, 50, 8])); // 4
