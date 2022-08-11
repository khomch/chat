// function range(start = null, end = null, step = null) {
//     let arr = []
//
//     if (start > 0 && end === null && step === null) {
//         for (let i = 0; i < start; i++) {
//             arr.push(i)
//         }
//         return arr
//     }
//
//     if (start < 0 && end === null && step === null) {
//         for (let i = 0; i > start; i--) {
//             arr.push(i)
//         }
//         return arr
//     }
//
//     if (start !== null && end > 0 && step === null) {
//         for (let i = start; i < end; i++) {
//             arr.push(i)
//         }
//         return arr
//     }
//
//     if (start !== null && end > 0 && step > 0) {
//
//         for (let i = start; i < end; i = i + step) {
//             arr.push(i)
//
//         }
//         return arr
//     }
//
//     if (start !== null && end < 0 && step < 0) {
//         for (let i = start; i > end; i = i + step) {
//             arr.push(i)
//         }
//         return arr
//     }
//
//     if (start > 0 && end > 0 && step === 0) {
//         for (let i = start; i < end; i++) {
//             arr.push(start)
//         }
//         return arr
//     }
//
//     if (start === 0 && end === null, step === null ) {
//         for (let i = start; i < end; i++) {
//             arr.push(start)
//         }
//         return arr
//     }
// }




const baseRange = (start, end, step) => {
    let index = -1;
    let length = Math.max(Math.ceil((end - start) / (step || 1)), 0);
    const result = new Array(length);

    while (length--) {
        result[++index] = start;
        start += step;
    }

    return result;
}

// Проверку на типы данных не добавлял, но студенты должны будут
function range(start = 0, end, step) {
    if (end === undefined) {
        end = start;
        start = 0;
    }

    step = step === undefined ? (start < end ? 1 : -1) : step;
    return baseRange(start, end, step);
}

console.log(range(-4))
