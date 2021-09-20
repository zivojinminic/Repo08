// Only change code below this line
function randomRangeNumber(minNumber, maxNumber) {
    return console.log(Math.floor(Math.random() * (maxNumber - minNumber +1)) + minNumber);
}
randomRangeNumber(5,25);
// Only change code above this line
module.exports = randomRangeNumber;