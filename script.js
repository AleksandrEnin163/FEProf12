// let someObj = {
//     key1: 'value1',
//     key2: 'value2',
//     key3: 'value3',
//     key4: 'value4',
//     }

// function getKey(obj){
//     const keys = []
//     for (const i in obj) {
//         keys.push(i)
//     }
//     return keys;
// }

// const array = [1,2,3,4,5]

// function getAvg(array){
//     let result = 0;
//     for (const i of array) {
//         result += i
//     }
//     return result / array.length
// }


const array1 = [1,true,'3','value1',9,'key']

function countString(array){
    console.log(array.filter(el => typeof el == 'string').length)
}

let someObj = {
    key1: 'value1',
    key2: 'value2',
    key3: 'value3',
    key4: 'value4',
    }

function getEntries(obj){
    const result = []
    for (const key in obj) {
        result.push([key, obj[key]])
    }
    return result
}

const array2 = [1,true,'3','value1',9,'key']

function convertToObject(array) {
    let obj = {};
    for (let i = 0; i < array.length; i++) {
      obj['key' + (i + 1)] = array[i];
    }
    return obj;
}