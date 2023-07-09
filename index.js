function hasTargetSum(arr, target) {
  const complementSet = new Set();

  for (let num of arr) {
    const complement = target - num;
    if (complementSet.has(complement)) {
      return true;
    }
    complementSet.add(num);
  }

  return false;
}

module.exports = hasTargetSum;
function hasTargetSum(arr, target) {
  const complementSet = new Set();

  for (let num of arr) {
    const complement = target - num;
    if (complementSet.has(complement)) {
      return true;
    }
    complementSet.add(num);
  }

  return false;
}

module.exports = hasTargetSum;


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
}

module.exports = hasTargetSum;
