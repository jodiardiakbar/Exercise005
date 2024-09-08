// Soal 1
// without sort
let arr1: number[] = [12, 5, 23, 18, 4, 45, 32];
function withoutSort(arr: number[]) {
  let _lowest: number = Math.min(...arr);
  let _highest: number = Math.max(...arr);
  let _average: number =
    arr.reduce(function (pv, cv) {
      return pv + cv;
    }, 0) / arr.length;

  return { lowest: _lowest, highest: _highest, average: _average };
}
console.log(withoutSort(arr1));

// Soal 1a
// with sort
function withSort(arr: number[]) {
  let _sortedArray: number[] = arr.sort(function (a, b) {
    return a - b;
  });
  let _sortedArray2: number[] = [..._sortedArray];
  console.log(arr);
  return {
    lowest: _sortedArray[0],
    highest: _sortedArray2.reverse()[0],
    average:
      arr.reduce(function (pv, cv) {
        return pv + cv;
      }, 0) / arr.length,
  };
}
console.log(withSort(arr1));

// Soal 2
let arr2: string[] = [`apple`, `banana`, `cherry`, `date`];
function arrToWords(arr: string[]) {
  for (let i = 0; i < arr2.length; i++) {
    if (i === arr2.length - 1) {
      arr2[i] = `and ${arr2[i]}`;
    }
  }
  return arr2.join();
}
console.log(arrToWords(arr2));

// Soal 3
let arr3: number[] = [5, 3, 1, 7, 2, 6];
function secondSmallestNumber(arr: number[]) {
  return arr.sort(function (a, b) {
    return a - b;
  })[1];
}
console.log(secondSmallestNumber(arr3));

// Soal 4
let arr4: number[] = [1, 2, 3];
let arr4a: number[] = [3, 2, 1];
function sumTwoArrays(arr: number[], _arr: number[]) {
  let arrResult: number[] = [];
  for (let i: number = 0; i < arr.length; i++) {
    arrResult.push(arr[i] + _arr[i]);
  }
  return arrResult;
}
console.log(sumTwoArrays(arr4, arr4a));

// Soal 5
let newElement: number = 7;
let arr5: number[] = [1, 2, 3, 4];
function addingLast(arr: number[]) {
  let _arr: number[] = [...arr];
  if (_arr.pop() !== newElement) {
    arr.push(newElement);
  }
  return arr;
}
console.log(addingLast(arr5));

// Soal 6
let arr6: any[] = [`3`, 1, `string`, null, false, undefined, 2];
function sumOnlyNumbers(arr: any[]) {
  let sumResult: number = 0;
  for (let i: number = 0; i < arr.length; i++) {
    if (typeof arr[i] === `number`) {
      sumResult += arr[i];
    }
  }
  return sumResult;
}
console.log(sumOnlyNumbers(arr6));

// Soal 7
// let _arr7: number[] = new Array(2);
// console.log(_arr7.length)
function createArrayFromIntegers(maxSize: number, ...input) {
  let arrResult: number[] = [];
  for (let i: number = 0; i < maxSize; i++) {
    arrResult.push(input[i]);
  }
  return arrResult;
}
console.log(createArrayFromIntegers(5, 1, 2, 3, 4, 5, 6, 7, 8));

// Soal 8
let arr8: number[] = [1, 2, 3];
let arr8a: number[] = [4, 5, 6];
function combineArray(arr: number[], _arr: number[]) {
  let arrResult: number[] = [...arr, ..._arr];
  return arrResult;
}
console.log(combineArray(arr8, arr8a));

// Soal 9
let arr9: number[] = [1, 2, 2, 2, 3, 3, 4, 5, 5];
function findDuplicate(arr: number[]) {
  const elementTracker = {};
  const duplicates: number[] = [];

  arr.forEach((item) => {
    if (elementTracker[item]) {
      elementTracker[item] += 1;
      //   duplicates.push(item);
    } else {
      elementTracker[item] = 1;
    }
  });

  for (let member in elementTracker) {
    console.log(elementTracker[member]);
    if (elementTracker[member] > 1) {
      duplicates.push(parseInt(member));
    }
  }
  //   return elementTracker;
  return duplicates;
}
console.log(findDuplicate(arr9));

// Soal 10
let arr10: number[] = [1, 2, 3, 4, 5];
let arr10a: number[] = [3, 4, 5, 6, 7];
function symmetricDifference(arr: number[], _arr: number[]) {
  let symDiff = arr
    .filter((x) => !_arr.includes(x))
    .concat(_arr.filter((x) => !arr.includes(x)));
  return symDiff;
}
console.log(symmetricDifference(arr10, arr10a));

// Soal 11
let arr11: any[] = [1, [], undefined, {}, `string`, {}, []];
function returnPrimitiveOnly(arr: any[]) {
  let arrResult: any[] = [];
  for (let item of arr) {
    // console.log(item)
    // console.log(typeof(item))
    if (typeof item !== `object`) {
      arrResult.push(item);
    }
  }
  return arrResult;
}
console.log(returnPrimitiveOnly(arr11));

// Soal 12
let arr12: number[] = [10, 20, 40, 10, 50, 30, 10, 60, 10];
function sumOfDuplicateValues(arr: number[]) {
  let elementTracker = {};
  let _counter: number = 0;

  for (let item of arr) {
    if (elementTracker[item]) {
      elementTracker[item] += 1;
    } else {
      elementTracker[item] = 1;
    }
  }

  for (let member in elementTracker) {
    if (elementTracker[member] > 1) {
      _counter += elementTracker[member] * member;
    }
  }
  return _counter;
}
console.log(sumOfDuplicateValues(arr12));

// Soal 13
let str13: string = "rock";
let arr13: string[] = [`rock`, `paper`, `scissor`];
function rockPaperScissor(str: string, arr: string[]) {
  let randomPick: string = Math.floor(Math.random() * arr.length);
  console.log(randomPick, arr[randomPick]);
  switch (str) {
    case (randomPick, arr[randomPick])[1] === "scissor":
      return `Win`;
    case (randomPick, arr[randomPick])[1] === "paper":
      return `Lose`;
    case (randomPick, arr[randomPick])[1] === "rock":
      return `Draw`;
  }
}
console.log(rockPaperScissor(str13, arr13));
