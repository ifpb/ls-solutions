import { min, max, range, zip, uniq, sortNum } from "./array-util.mjs";

// finding lowest value
console.log(min([1, 4, 2, 6, 10, 3]));
console.log(min([1, 4, -1, 6, 10, 3]));

// finding greatest value
console.log(max([1, 4, 2, 6, 10, 3]));
console.log(max([1, 4, 28, 6, 190, 3]));
console.log(max([1, 40, 2, 6, 10, 3]));
console.log(max([1, 4, 20, 6, 10, 3]));
console.log(max([100, 4, 20, 6, 10, 3]));
console.log(max([1, 4, 2, 69, 10, 30]));


/* 
    // generating range of numbers from 0 to 10
    console.log(range(10));

    // generating range of numbers from 1 to 11
    console.log(range(1, 11));

    // generating range of numbers from 0 to 10 with steps
    console.log(range(0, 30, 5));

    // generating zip of [\'moe\', \'larry\'] and [30, 40]
    console.log(zip(["moe", "larry"], [30, 40]));

    // generating zip of [\'moe\', \'larry\', \'curly\'], [30, 40, 50] and [true, false, false]
    console.log(zip(["moe", "larry", "curly"], [30, 40, 50], [true, false, false]));

    // removing duplicate values in [1, 2, 1, 4, 1, 3]
    console.log(uniq([1, 2, 1, 4, 1, 3]));

    // removing duplicate values in [1, 2, 1, 3, 3]
    console.log(uniq([1, 2, 1, 3, 3]));

    // sorting number values in [1, 3, 2]
    console.log(sortNum([1, 3, 2]));

    // sorting number values in [1, 2, 10, 3, 32]
    console.log(sortNum([1, 2, 10, 3, 32]));
 */