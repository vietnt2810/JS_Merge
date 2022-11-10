function mergeObject(obj1, obj2) {
    let result = { ...obj1 }

    for (let key in obj2) {
        if (obj1[key] === undefined || typeof obj1[key] !== 'object') {
            result[key] = obj2[key]
        }

        if (typeof obj1[key] === 'object' && typeof obj2[key] !== 'object') {
            result[key] = obj2[key]
        }

        if (typeof obj1[key] === 'object' && typeof obj2[key] === 'object') {
            result[key] = mergeObject(obj1[key], obj2[key])
        }
    }
    return result
}

let obj1 = {
    a: {
        c: 3,
        d: {
            a: 12
        }
    },
    b: 23
}

let obj2 = {
    a: {
        c: 6,
        d: {
            c: 5
        }
    },
    b: {
        c: 3
    }
}


console.log(mergeObject(obj1, obj2))

