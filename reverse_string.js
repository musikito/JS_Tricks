/*
Different ways to reverse a string, or a sentence.
*/

/*
First one is using the built in .reverse() function
*/

function reverseString(str){
    return str.split("").reverse().join("");
    //if you want to switch the words when separated by space
    //put a space BTW the quotes mark:
    //return str.split(" ").reverse().join(" ");

}//end of function

const test1 = reverseString("Hola Mundo Hermoso");
console.log("Using reverse()",test1);

const test2 = reverseString("Javascript");
console.log("Using reverse()",test2);

/*
The second case is using loops, in a more "pure"Javascript fashion
*/
function reverseStringLoops(str){
    let reversedStr = "";
    for(var i = str.length -1; i>= 0; --i){
        reversedStr += str[i];
    }//end for

    return reversedStr;

}//end of function

const test11 = reverseStringLoops("Hola Mundo Cruel");
console.log("Using for loop",test11);

const test21 = reverseStringLoops("Javascript");
console.log("Using for loop",test21);

/*
The third way is using a self calling function (Recursion) to complete the task
*/

function reverseStringRecurr(str){
    if(str===""){
        return str;
    }//end if
    else{
        return reverseStringRecurr(str.substr(1)) + str[0];
    }//end else
}//end function

const test111 = reverseStringRecurr("Adios Mundo");
console.log("Using recursion",test111);

const test211 = reverseStringRecurr("Javascript");
console.log("Using recursion",test211);

