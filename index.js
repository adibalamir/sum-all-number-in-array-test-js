let sum = 0
function sumItems(array) {
  // Sum all the numbers in the array
  array.forEach((item) => {
        if (Array.isArray(item)) {
          sumItems(item);
        } else {
          sum += item;
        }
    });
  return sum
}

module.exports = sumItems;