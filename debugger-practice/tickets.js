let prices = [5, 2];
let quantities = [1, 4];
let total = 0;

for (let i = 0; i < prices.length; i++) {
  let lineTotal = prices[i] * quantities[i];
  if (quantities[i] >= 3) {
    lineTotal -= quantities[i];
  }
  total += lineTotal;
}

console.log("Total:", total);
//at first, i didnt know what the instructions ment, so i desided to figure out why the total was NaN
//i put a breakpoint at line 10, and steped through it
//everything was as expected, until on the last loop, lineTotal was NaN
//i realised that the loop was runing one time more than expected, so lineTotal was trying to read an array index that didnt exist
//once i fixed that (line 5 btw) everything ran as expected