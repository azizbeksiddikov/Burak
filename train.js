// G-TASK:

// Shunday function tuzingki unga integerlardan iborat array pass bolsin va
// function bizga osha arrayning eng katta qiymatiga tegishli birinchi indexni qaytarsin.
// MASALAN: getHighestIndex([5, 21, 12, 21, 8]) return qiladi 1 sonini.

function getHighestIndex(arr) {
  let max_num = Number.MIN_VALUE,
    max_idx = 0;
  for (index in arr) {
    if (arr[index] > max_num) {
      max_num = arr[index];
      max_idx = index;
    }
  }
  return max_idx;
}

console.log(getHighestIndex([5, 21, 12, 21, 8])); // 1
console.log(getHighestIndex([5, 21, 12, 21, 50, 8])); // 4
