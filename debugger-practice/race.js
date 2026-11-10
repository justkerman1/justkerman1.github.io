let racerXs = [10, 0, 0];
let moves = [3, 2, 1];

for (let round = 1; round <= 3; round++) {
  for (let i = 0; i < racerXs.length; i++) {
    racerXs[i] += moves[i];
    if (racerXs[i] > 12) {
      moves[i] -= 1;
    }
  }
}

console.log("Positions:", racerXs);
console.log("Moves:", moves);
//the original code was useing [round-1] in line 8, but round has nothing to do with the racer it just checked
//i first tried [round-2], and that worked for the first round, but broke on the second.
//then i realised that round has nothing to do with the racer it just checked, so i tried [i], and that worked