// Minimum: Write a function that takes two arguments and returns their minimum 

function min(num1, num2){
    if(num1 <= num2) return num1; 
    else return num2;  
}

// Recursion 
function isEven(num){
    if(num < 0) num *= -1; 
    if(num <= 1){
        if(num === 1) return false; 
        if(num === 0) return true;
    }
    return isEven(num-2); 
}

// Bean Counting 
function countBs(str){
    return countChar(str, "B")
}

console.log(countBs("BBB"))

function countChar(str, char){
    let count = 0; 
    for(let i = 0; i < str.length; i++){
        if(str[i] === char) count += 1; 
    }
    return count; 
}





