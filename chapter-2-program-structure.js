/* Write a loop that makes seven calls to console.log to output the following triangle. 
 *
#
##
###
####
#####
######
#######
 */

// print a triangle 
for(let i = 1; i <= 7; i++){
    console.log("#".repeat(i));
}

let s = "#"
// for(let i = 0; i < 7; i++){
//     console.log(s)
//     s += "#"; 
// }
// fizzBuzz 
for(let i = 1; i <= 100; i++){
    if(i % 5 === 0 && i % 3 === 0) console.log("FizzBuzz"); 
    else if(i % 5 === 0) console.log("Buzz");
    else if(i % 3 === 0) console.log("Fizz");
    else console.log(i); 
}

// print a checkerboard 
let str = ""; 
let height = 0 
let width = 0; 
let size = 10;
while(height < size){
    if(width === size){
        width = 0; 
        height++; 
        str += "\n";
    }
    if(height % 2 === 0){
        if(width % 2 === 0) str += " ";
        else str += "#" 
    }else{
        if(width % 2 === 0) str+= "#"; 
        else str+= " ";
    }
    width++; 
}
console.log(str);

