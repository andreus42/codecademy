let {test, cookBeans, steamBroccoli, cookRice, bakeChicken} = require('./library2.js')

// Write your code below:

async function serveDinner() {
  const vegetablePromise = steamBroccoli();
  const starchPromise = cookRice();
  const proteinPromise = bakeChicken();
  const sidePromise = cookBeans();
  return (await vegetablePromise, starchPromise, proteinPromise, sidePromise);
  console.log(`Dinner is served. We're having ${await vegetablePromise}, ${await starchPromise}, ${await protienPromise}, and ${await sidePromise}.`);
}


serveDinner()
test()

console.log(`Dinner is served. We’re having ${foodArray[0]}, ${foodArray[1]}, ${foodArray[2]}, ${foodArray[3]}`)