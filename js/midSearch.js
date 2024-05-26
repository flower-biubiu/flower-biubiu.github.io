const data = [4,6,7,18,19,20,25]


const method = function (arr, value) {
    let left = 0
    let right = arr.length - 1
    

    while(left <= right) {
        let mid = Math.floor((left + right) / 2)

        if(arr[mid] === value) {
            return mid
        } else if(arr[mid] < value) {
            left = mid + 1
        } else {
            right = mid - 1
        }
    }

    return -1
}

console.log('6:',method(data, 6))
console.log('4:',method(data, 4))
console.log('5:',method(data, 5))
console.log('17:', method(data, 17))
console.log('20:', method(data, 20))
console.log('30:',method(data, 30))
console.log('25:',method(data,25))
