//refactored version
function hasTargetSum(array, target) {
  const seenNumbers = {};
  for (const number of array) {
    const complement = target - number
    if (complement in seenNumbers) return true;
    seenNumbers[number] = true;
    console.log(seenNumbers)
  }
  return false
}




// function hasTargetSum(array, target) {
//   const seenNumbers = {};
//   for (let i=0; i < array.length; i++) {
//     const complement = target - array[i]
//     if (seenNumbers[complement]) return true;
//     seenNumbers[array[i]] = true;
//     console.log(seenNumbers)
//   }
//   return false
// }

// function hasTargetSum(array, target) {
//   for (let i = 0; i < array.length; i++) {
//     // n steps
//     for (let j = i + 1; j < array.length; j++) {
//       // n * n steps (loop inside a loop)
//       const complement = target - array[i]
//       if (array[j] === complement)
//         return true
//     }
//   }
//   return false
// }

/* 
  Write the Big O time complexity of your function here
  Runtime: O(n^2)
  Space: O(n) only the Array is involved in taking space
*/

/* 
  Add your pseudocode here
  Check if any numbers in the array are smaller than the target number
    If an element is smaller than the target, add it to a newArray that only contains numbers smaller than the target.

    The below code didn't work because when a negative number was involved, higher values were needed
     newArray = []
  array.forEach(element => {
    if (element <= target) {
      newArray.push(element)
    }
  })
*/

/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));

  console.log('Expecting: true')
  console.log('=>', hasTargetSum([5, 9, 10, 3, 4, 2, 1, 6], 16))
}

module.exports = hasTargetSum;
