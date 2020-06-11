function Average(array) {
    var total=0
    for (var index = 0; index < array.length; index++) {
        total += array[index];
    }

    var avg=total/array.length
    avg=Math.round(avg)
    return avg
}

const array=[90,98,89,100,100,86,94]
const array2=[40,65,77,82,80,74,73,63,95,49]

console.log(Average(array))
console.log(Average(array2))