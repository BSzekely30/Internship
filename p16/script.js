console.log("FIRST EXERCISE");

function first(arr, number) {
  let index = 0;
  arr.forEach((element) => {
    if (number === element) {
      index++;
    }
  });
  return index;
}

console.log(first([1, 2, 2, 2, 3, 2], 5));

console.log("2ND EXERCISE");

function second(arr) {
  let newArr = [];

  arr.forEach((element) => {
    if (element % 2 === 0) {
      newArr.push(element);
    }
  });

  let uniqueArr = [...new Set(newArr)];
  return uniqueArr;
}

console.log(second([1, 2, 2, 2, 2, 3, 4]));

console.log("3RD EXERCISE");

function arrToObj(arr) {
  let count = {};

  for (let i = 0; i <= arr.length - 1; i++) {
    let element = arr[i];

    if (count[element]) {
      count[element]++;
    } else {
      count[element] = 1;
    }
  }

  return count;
}

console.log(arrToObj(["A", "B", "C", "A", "A", "C"]));

console.log("4TH EXERCISE");

function shallowClone(obj) {
  const newObj = {};
  Object.keys(obj).forEach((key) => {
    newObj[key] = obj[key];
  });
  return newObj;

  // let cloneObj = { ...obj };
  // return cloneObj;
}

console.log(shallowClone({ a: 1, b: 2, c: { d: 3 } }));

console.log("5TH EXERCISE");

function deepClone(obj) {
  // let cloneObj = JSON.parse(JSON.stringify(obj));
  // return cloneObj;

  let clone, value, key;
  if (typeof obj !== "object") {
    return obj;
  }

  clone = {};
  for (key in obj) {
    value = obj[key];
    clone[key] = deepClone(value);
  }

  return clone;
}

console.log(deepClone({ a: 1, b: 2, c: { d: 3 } }));

console.log("6TH EXERCISE");

function executorFunction(arr, validate) {
  let index = 0;
  arr.forEach((element) => {
    if (validate(element)) {
      index++;
    }
  });

  if (index === arr.length) {
    console.log("VALID");
  } else {
    console.log("NOT VALID");
  }
}

function validate(e) {
  return e % 2 === 0;
}

executorFunction([2, 2, 6, 4, 8], validate);

console.log("7TH EXERCISE");

function validateKeys(obj, arr) {
  let keys = Object.keys(obj);
  let isFound = (element) => arr.includes(element);

  return keys.every(isFound);
}

console.log(validateKeys({ name: "Steve", age: 23 }, ["name", "age"]));

console.log("8TH EXERCISE");

let validElements = (arr, validateEven) => {
  let newArr = [];

  arr.forEach((element) => {
    if (validateEven(element)) {
      newArr.push(element);
    }
  });
  return newArr;
};

let validateEven = (e) => {
  return e % 2 === 0;
};

console.log(validElements([1, 2, 3, 4, 5, 6, 8, 7], validateEven));

console.log("9TH EXERCISE");

const validEven = (element) => element % 2 !== 0;
const validSmaller = (element) => element < 10;

const funcsArray = [validEven, validSmaller];

const allValidElements = (arr, funcsArr) => {
  return arr.every((element) => {
    return funcsArr.every((functionItem) => {
      if (functionItem(element)) {
        return true;
      }
      return false;
    });

    // funcsArr.every((validateFunction) => validateFunction(element));
  });
};

// const allValidElements(arr, funcsArray) => arr.every((e) => funcsArr.every((validateFunction) => validateFunction(element)))

console.log(allValidElements([1, 3, 5, 7, 9], funcsArray));

console.log("10TH EXERCISE");

const diffValues = (arr1, arr2) => {
  let newArr1 = [];
  let newArr2 = [];

  newArr1 = arr1.filter((element) => !arr2.includes(element));
  newArr2 = arr2.filter((element) => !arr1.includes(element));
  return newArr1.concat(newArr2);
};

console.log(diffValues([1, 3, 1, 3, 5, 7, 9, 11], [1, 3, 1, 8, 10, 10]));

console.log("11TH EXERCISE");

function generateCSV(input) {
  const output = [];
  let header = [];

  input.forEach((element) => {
    const keys = Object.keys(element);
    keys.forEach((key) => {
      if (!header.includes(key)) {
        header.push(key);
      }
    });
  });

  const headerString = header.join(";");
  output.push(headerString);

  input.forEach((inputItem) => {
    let row = [];
    header.forEach((headerItem) => {
      let rowValue = inputItem[headerItem];
      if (Object.keys(inputItem).includes(headerItem)) {
        row.push(rowValue);
      } else {
        row.push('""');
      }
    });
    const rowString = row.join(";");
    output.push(rowString);
  });
  return output;
}

console.log(
  generateCSV([
    { a: 1, b: 2 },
    { a: 2, c: 3 },
  ])
);

console.log("12TH EXERCISE");

function ungenerateCSV(input) {
  const output = [];
  const [header, ...rows] = input;

  const headerArr = header.split(";");

  rows.forEach((row) => {
    const rowArr = row.split(";");
    const rowObj = {};
    headerArr.forEach((headerItem, index) => {
      const rowValue = rowArr[index];
      if (rowValue !== '""') {
        rowObj[headerArr[index]] = rowValue;
      }
    });
    output.push(rowObj);
  });
  return output;
}

console.log(ungenerateCSV(["a;b;c", '1;2;""', '2;"";3']));

console.log("13TH EXERCISE");

function compareObj(obj1, obj2) {
  let sameObj = true;
  for (let [key, value] of Object.entries(obj1)) {
    if (typeof value === "object") {
      sameObj = compareObj(obj1[key], obj2[key]);
    } else {
      if (obj1[key] != obj2[key]) sameObj = false;
    }
  }

  return sameObj;
}

console.log(
  compareObj({ a: 1, b: 2, c: { d: 3 } }, { a: 1, b: 2, c: { d: 3 } })
);

console.log("14TH EXERCISE");

function setKey(obj, key, value) {
  if (obj[key] === value) {
    return obj;
  } else {
    obj[key] = value;
    return obj;
  }
}
console.log(setKey({ a: 1, b: 2, c: 3 }, "b", 7));

console.log("15TH EXERCISE");

function deepProperty(obj, arrKeys, value) {
  if (arrKeys.length === 1) {
    obj[arrKeys[0]] = value;
    return obj;
  } else {
    obj[arrKeys[0]] = deepProperty(
      obj[arrKeys[0]] || {},
      arrKeys.slice(1),
      value
    );
    return obj;
  }
}

console.log(deepProperty({ a: 1, b: { d: 3 } }, ["b", "c", "d"], 100));
