function promiseAll(promises) {
    return new Promise((resolve, reject) => {
        let result = []
        let computed = 0

        promises.forEach((promise, index) => {
            Promise.resolve(promise).then((res) => {
                result[index] = res
                computed++
                if(computed === promises.length) {
                    resolve(result)
                }

            }).catch (
                reject
            )
        })
    })
}

const promises = [
    new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(`Promise 1 完成`);
        }, Math.random() * 2000)
    }),
    new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(`Promise 2 完成`);
        }, Math.random() * 2000)
    }),
    new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(`Promise 3 完成`);
        }, Math.random() * 2000)
    })
]

promiseAll(promises)
    .then(result => {
        console.log('所有 Promise 完成:', result);
    })
    .catch(error => {
        console.error('有一个 Promise 失败:', error);
    });