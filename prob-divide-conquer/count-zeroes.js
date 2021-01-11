function countZeroes(arr, val) {

    let leftIdx = 0;
    let rightIdx = arr.length - 1;
  
    if (arr[0] === arr[arr.length-1]) {
      return 0
    }
  
    while (leftIdx <= rightIdx) {
      let middleIdx = Math.floor((leftIdx + rightIdx) / 2);
      let middleVal = arr[middleIdx];
  
      if (middleVal === 1) {
        leftIdx = middleIdx + 1;
      } else if (middleVal === 0 && (arr[middleIdx-1] === 1)) {
        console.log("arr.length", arr.length);
        console.log("middleIdx", middleIdx);
        let zeroCount = arr.length - middleIdx;
        if (zeroCount === (-1)){
          zeroCount = 0
        }
        return (zeroCount);
      }
        else if (middleVal === 0) {
        rightIdx = middleIdx - 1;
      }
    }
  }


module.exports = countZeroes