//Ham map
function map(arr,functionSub){
    const result=[];
    for(let i=0;i<arr.length;i++){
        result.push(functionSub(arr[i],i,arr));
    }
    return result;
}

//Ham foreach
function forEach(arr,functionSub){
    for(let i=0;i<arr.length;i++){
        functionSub(arr[i],i,arr);
    }
}

//Ham find
function find(arr,functionSub){
    for(let i=0;i<arr.length;i++){
        if(functionSub(arr[i],i,arr)){
            return arr[i];
        }
    }
    return undefined;
}

//Ham find Index
function findIndex(arr,functionSub){
    for(let i=0;i<arr.length;i++){
        if(functionSub(arr[i],i,arr)){
            return i;
        }
    }
    return 0;
}

//Ham reduce
function reduce(arr,functionSub){
    var result;
    for(let i=0;i<arr.length;i++){
        functionSub(result,arr[i],i,arr);
    }
    return result;
}

//Ham filter
function filter(arr,functionSub){
    const result=[];
    for(let i=0;i<arr.length;i++){
        if(functionSub(arr[i],i,arr)){
            result.push(arr[i]);
        }
    }
    return undefined;
}

//#Array method
//Merge a to b and print new array
function merge(a,b){
    const result=b.concat(a);
    console.log(result);
}

//Print yes if even numbers otherwise print No
function check(value,index,arr){
    return value%2==0
}
if(arr.every(check)){
    console.log("YES");
}else{
    console.log("NO")
}

//print yes if some of element is even numbers
function check(value,index,arr){
    return value%2==0
}
if(arr.some(check)){
    console.log("Yes");
}else{
    console.log("NO");
}

//print a new array positive numbers
const arr=[1,-2,3,4,-5];
function check(value,index,arr){
    return value>0
}
const result=arr.filter(check);
console.log(result);

//find first positive number
function check(value,index,arr){
    return value>0
}
if(arr.find(check)!==undefined){
    console.log(`${arr.findIndex(check)}` `${arr.find(check)}`)
}else{
    console.log("No result");
}

//print element divisible by 5
arr.forEach(myfunction)
function myfunction(value,index, arr){
    if(value%5===0){
        console.log(value);
    }
}

//find and print first and last index of value 2
if(arr.findIndex(value=>value==2)>=0){
    console.log(`${arr.findIndex(value=>value==2)}` `${arr.findLastIndex(value=>value==2)}`)
}else{
    console.log("No result");
}

//join an print all elements seperated by commas and space
console.log(arr.join(", "));

//Convert all of element of array to absolutea value and print
const resultt=arr.map(value=>Math.abs(value));
