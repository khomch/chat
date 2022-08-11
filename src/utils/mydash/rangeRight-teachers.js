function rangeRight(start, end, step) {
    return range(start, end, step, true);
}

const baseRange = (start, end, step, isRight) => {
    let index = -1;
    step = end < 0 && step === 1 ? -1 : step;

    let length = Math.max(Math.ceil((end - start) / (step || 1)), 0);
    const result = new Array(length);


    // if (isRight) {
    //     while (length--) {
    //         result[++index] = start;
    //         start += step;
    //     }
    //     let newArr = [];
    //     for (let i = 0; i <= result.length - 1; i++) {
    //         newArr[i] = result[result.length - 1 - i]
    //     }
    //     return newArr;
    // }

    while (length--) {
        result[isRight ? length : ++index] = start;
        start += step;

    }

    return result;
}

function range(start = 0, end, step = 1, isRight = false) {
    if (end === undefined) {
        end = start;
        start = 0;
    }
    step = step === undefined ? (start < end ? 1 : -1) : step;
    return baseRange(start, end, step, isRight);
}

console.log(rangeRight(4))
console.log(rangeRight(-4))
console.log(rangeRight(1, 5))
console.log(rangeRight(0, 20, 5))
console.log(rangeRight(0, -4, -1))
console.log(rangeRight(1, 4, 0))
console.log(rangeRight(0))


//
// const baseRange = (start, end, step, isRight) => {
//     let index = -1;
//     let length = Math.max(Math.ceil((end - start) / (step || 1)), 0);
//     const result = new Array(length);
//
//     while (length--) {
//         result[isRight ? length : ++index] = start;
//         start += step;
//     }
//
//     return result;
// }
//
// // Проверку на типы данных не добавлял, но студенты должны будут
// function range(start = 0, end, step, isRight = false) {
//     if (end === undefined) {
//         end = start;
//         start = 0;
//     }
//
//     step = step === undefined ? (start < end ? 1 : -1) : step;
//     return baseRange(start, end, step, isRight);
// }
//
// function rangeRight(start, end, step) {
//     return range(start, end, step, true);
// }