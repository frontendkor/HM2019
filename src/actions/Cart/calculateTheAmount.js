// Calculate the total amount of purchases

let calculateTheAmount = cart => {
  let arrSum = cart.map(({ price }) => {
    return +price;
  });
  let sum = arrSum.reduce((intermediateResult, item) => {
    return intermediateResult + item;
  }, 0);
  return sum.toFixed(1);
};

export default calculateTheAmount;
