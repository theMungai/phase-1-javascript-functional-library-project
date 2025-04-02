
function myEach(collection, callback) {
    if (Array.isArray(collection)) {
        for (let i = 0; i < collection.length; i++) {
            callback(collection[i]);
        }
    } else {
        for (const key in collection) {
            callback(collection[key]);
        }
    }
    return collection;
}

function myMap(collection, callback) {
    const result = [];
    myEach(collection, (item) => {
        result.push(callback(item));
    });
    return result;
}

function myReduce(collection, callback, acc) {
    let startIdx = 0;
    const values = Array.isArray(collection) ? collection : Object.values(collection);

    if (acc === undefined) {
        acc = values[0];
        startIdx = 1;
    }

    for (let i = startIdx; i < values.length; i++) {
        acc = callback(acc, values[i], collection);
    }
    return acc;
}

function myFind(collection, predicate) {
    const values = Array.isArray(collection) ? collection : Object.values(collection);
    for (let i = 0; i < values.length; i++) {
        if (predicate(values[i])) {
            return values[i];
        }
    }
    return undefined;
}

function myFilter(collection, predicate) {
    const result = [];
    myEach(collection, (item) => {
        if (predicate(item)) {
            result.push(item);
        }
    });
    return result;
}

function mySize(collection) {
    return Array.isArray(collection) ? collection.length : Object.keys(collection).length;
}

// Array Functions

function myFirst(array, n = 1) {
    return n === 1 ? array[0] : array.slice(0, n);
}

function myLast(array, n = 1) {
    return n === 1 ? array[array.length - 1] : array.slice(-n);
}

// Object Functions

function myKeys(object) {
    return Object.keys(object);
}

function myValues(object) {
    return Object.values(object);
}

// Utility functions (provided in test file)
function arraysEqual(arrA, arrB) {
    if (arrA.length !== arrB.length) return false;
    for (let idx = 0; idx < arrA.length; idx++) {
        if (Array.isArray(arrA[idx]) && Array.isArray(arrB[idx])) {
            arraysEqual(arrA[idx], arrB[idx]);
        } else if (arrA[idx] !== arrB[idx]) {
            return false;
        }
    }
    return true;
}

function objectsEqual(objA, objB) {
    return (JSON.stringify(objA) === JSON.stringify(objB));
}