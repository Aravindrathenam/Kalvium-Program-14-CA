// Task 4 :-Create a for loop to print all the even numbers from 1 - 200 and return the same inside the function.You will need to create an empty array, create the logic and push the output to the array and return it inside the function.

function loop(){
    let evenNumbers = []; 
    for (let i = 2; i<= 200; i += 2){
        evenNumbers.push(i);
    }
    return evenNumbers;

}
// Task 5 :- create a variable of string datatype and return the string output inside the function given below

function printStr(){
    let mystring = "Hellow World";
    return mystring;
  
}

//Task 6:- Using DOM methods, access the id 'task6' from index.html and return the text content of id 'task6' in the same function below.

function domManip() {
    let text = document.getElementById("task6").textContent;
    return text;

}
