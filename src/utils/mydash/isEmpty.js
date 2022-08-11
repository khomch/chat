function isEmpty(value) {
    if (value != null
        && typeof value !== "number" && "boolean"
        && value !== ""
        && (value.length > 0
        || Object.keys(value).length !== 0
        || value.size > 0)
    )
    {
        return false
    }
else
    {
        return true
    }
}


console.log(isEmpty(null))
console.log(isEmpty(true))
console.log(isEmpty(1))
console.log(isEmpty([1, 2, 3]))
console.log(isEmpty({ 'a': 1 }))
console.log(isEmpty('123'))
console.log(isEmpty(123))
console.log(isEmpty(""))
console.log(isEmpty(0))
console.log(isEmpty(undefined))