// TASK H:

// Raqamlardan iborat arrayni argument sifatida qabul qiladigan
// function tuzing. Ushbu function faqatgina positive sonlarni olib
// string holatida return qilsin.
// MASALAN: getPositive([1, -4, 2]) return qiladi "12".
function getPositive(arr: number[]): string {
  const new_arr: number[] = [];
  for (let num of arr) {
    if (num > 0) {
      new_arr.push(num);
    }
  }
  return new_arr.join("");
}

console.log(getPositive([1, -4, 2])); // "12"
console.log(getPositive([1, 5, -4, -2])); // "15"

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
