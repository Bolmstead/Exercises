function findMean(numsArr){
    let total = 0;
    for(let i = 0; i < numsArr.length; i++) {
        total += numsArr[i];
    };
    let avg = total / numsArr.length;
    return avg;
}

function findMedian(numsArr){
  let arrSort = numsArr.sort();
    let mid = Math.ceil(numsArr.length / 2);
    let median = numsArr.length % 2 == 0 ? (arrSort[mid] + arrSort[mid - 1]) / 2 : arrSort[mid - 1];
    return median;
}

function findMode(numsArr){
    let frequency = {}; // array of frequency.
    let maxFreq = 0; // holds the max frequency.
    let modes = [];

    for (let i in array) {
        frequency[array[i]] = (frequency[array[i]] || 0) + 1; // increment frequency.

        if (frequency[array[i]] > maxFreq) { // is this frequency > max so far ?
        maxFreq = frequency[array[i]]; // update max.
        }
    }

    for (let k in frequency) {
        if (frequency[k] == maxFreq) {
        modes.push(k);
        }
    }
    return modes;
}

module.exports = {
  findMean: findMean,
  findMedian: findMedian,
  findMode: findMode,
};