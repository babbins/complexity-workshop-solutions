// Each of these functions should return an array with two elements, the first being the actual solution to the problem and the second being a count of the total number of operations calculated in the function

// If you need to utilize recursion to solve your problem, try defining a helper function inside the scope of the original function which utilizes closure around your counter

//O(n)
const stringSearch = (str, val) => {
  // return [true or false, number of calculations]
  let counter = 0;
  for (var i = 0; i < str.length; i++){         //n times
    counter++
    if (str[i] === val) return [true, counter];     //1 operation
  }
  return [false, counter];                      //1 op
}
//T(n) = (n*1) + 1 = n + 1 => O(n)




//O(log(n))
const sortedArrSearch = (arr, val) => {
  // how can we optimize a search if we know the array is sorted? Can we solve in O(log n)?
  let counter = 0;
  let leftPointer = 0, rightPointer = arr.length - 1;            //1 op
  while (rightPointer > leftPointer + 1){                        //log n
    counter++
    let midPoint = Math.floor((rightPointer + leftPointer) / 2)     //1
    if (arr[midPoint] === val) return [true, counter];              //2
    else if (arr[midPoint] > val){
      rightPointer = midPoint;
    } else {
      leftPointer = midPoint;
    }
  }
  return [false, counter]                                       //1
}
//T(n) = 1 + (log(n) + 1 + 2) + 1 = 1 + 3log(n) = O(log(n))




// given an array and a target value, do two elements in the array sum to the value?
//T(n^2 - n)


const pairSumNaive = (arr, sumVal) => {
  // Write a solution that solves in O(n^2)
  let counter = 0;
  for(let i = 0; i < arr.length; i++){                        //n
    for (let j = i + 1; j < arr.length; j++){                     //n
      counter++;
      if (arr[i] + arr[j] === sumVal) return [true, counter]          //1
    }
  }
  return [false, counter]                                     //1
}
//T(n)

const pairSumOptimized = (sortedArr, sumVal) => {
  // assume array passed here will be sorted. Can we solve in O(n)?
  let counter = 0;
  let leftPointer = 0, rightPointer = sortedArr.length - 1;
  while (leftPointer !== rightPointer){
    counter++;
    let toCheck = sortedArr[leftPointer] + sortedArr[rightPointer];
    if (toCheck === sumVal){
      return [true, counter];
    } else if (toCheck < sumVal){
      leftPointer++;
    } else {
      rightPointer--;
    }
  }
  return [false, counter]
}

const stairStep = (num) => {
  // A child must climb a staircase of height num. They can only take steps of length 1, 2, or 3. How many possible ways can they hop up the stairs?
  let counter = 0;
  function stepCounter (n){
    counter++
    if (n < 0){
      return 0
    } else if (n === 0) {
      return 1
    } else {
      return stepCounter(n - 1) + stepCounter(n - 2) + stepCounter(n - 3)
    }
  }
  return [stepCounter(num), counter]
}

/*                            5
*
*        4                    3                  2
*
*   3    2     1             2  1                1
*
*  2 1   1                   1
*
*  1
*
*
*
*/
module.exports = {
  stringSearch,
  sortedArrSearch,
  pairSumNaive,
  pairSumOptimized,
  stairStep
}
