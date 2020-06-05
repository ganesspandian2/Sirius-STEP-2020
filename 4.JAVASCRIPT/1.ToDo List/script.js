var input=prompt("Enter the anyone of the available functions");
var arr=[];

function findMax(arr) {
    var maxi=0;

    for (let index = 0; index < arr.length; index++) {
        if (arr[index]>maxi) {
            maxi=arr[index];
        }
    }
    return maxi;
}

while (input!=="quit") {
    if (input==="add") {
        var add=prompt("Add to ToDo List");
        arr.push(Number(add));
    }

    else if(input==="view"){
        console.log(arr);
    }

    else if(input==="max"){
        console.log(findMax(arr));
    }
    var input=prompt("Enter the anyone of the available functions");
}

console.log("You\'re quitted!!");