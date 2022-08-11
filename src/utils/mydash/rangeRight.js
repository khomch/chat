function rangeRight(start = null, end = null, step = null) {
    let arr = []

    if (start > 0 && end === null && step === null) {
        for (let i = start - 1; i >= 0; i--) {
            arr.push(i)
        }
        return arr
    }

    if (start < 0 && end === null && step === null) {
        for (let i = start + 1; i <= 0; i++) {
            arr.push(i)
        }
        return arr
    }

    if (start !== null && end > 0 && step === null) {
        for (let i = end - 1; i >= start; i--) {
            arr.push(i)
        }
        return arr
    }

    if (start !== null && end > 0 && step > 0) {
        for (let i = end - step; i >= start; i = i - step) {
            arr.push(i)

        }
        return arr
    }

    if (start !== null && end < 0 && step < 0) {
        for (let i = end - step; i <= start; i = i - step) {
            arr.push(i)
        }
        return arr
    }

    if (start > 0 && end > 0 && step === 0) {
        for (let i = start; i < end; i++) {
            arr.push(start)
        }
        return arr
    }

    if (start === 0 && end === null, step === null ) {
        for (let i = start; i < end; i++) {
            arr.push(start)
        }
        return arr
    }
}

