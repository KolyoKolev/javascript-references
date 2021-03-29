/*
 *Simple calculation of the max profit
 based on fixed trading price for a piece of item
 */

const PRICES_PILE_1 = [6, 12, 3, 10, 7, 16, 5];
const PRICES_PILE_2 = [5, 7, 3, 11, 9, 10, 9, 1, 2, 3, 4, 10, 16, 10, 4, 16, 0];

const getRandomNum = (max = 1, min = 0) => {
  return min >= max ? max : Math.floor(Math.random() * (max - min) + min);
};

let counter = 0;
const PRICE_PILE = [];

const result = () => {
  do {
    PRICE_PILE.push(getRandomNum(16, 1));
    counter++;
  } while (counter < 12);
};

const maximizeProfit = (pileNumber, pricePile, fixedTradingPrice) => {
  result();
  console.log(`Pile ${pileNumber}`);
  const profitableFlutes = pricePile.filter(
    (a) => a < fixedTradingPrice && a > 0
  );
  const maxProfit = profitableFlutes
    .map((value) => 10 - value)
    .reduce((acc, cur) => acc + cur);
  console.log(`Max profit is ${maxProfit}.`);
  console.log(`Item's price: ${profitableFlutes.sort().join(' | ')}`);
  console.log('\n');
};

// maximizeProfit(1, PRICE_PILE, 12);
maximizeProfit(2, PRICES_PILE_1, 10);
