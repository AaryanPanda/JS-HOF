const foods = ["pizza", "burger", "fingerChips", "donuts", "springRoll"];
const numberArray = [12,324,213,4,2,3,45,4234];
const myArray = [11, 34, 20, 5, 53, 16];

// Progression 1:

let modifiedFood = foods;
function slice() {
  return modifiedFood.slice(1, 4);
}

// Progression 2:

function spliced() {
    let modifiedArr = foods;
    modifiedArr.splice(2, 0, 'noodles', 'icecream');
    return modifiedArr;
  }


// Progression 3:

function isEven(number){
    if (number%2==0){return true}
  }
  
  function isPrime(number){
    for (let i = 2; i<number; i++){
      if (number%i==0){
        return false
      }
    }
    return true
  }
  
  function checkNumber(numberArray,operation){
    return numberArray.filter(operation)
  }


// Progression 4:

function reject(numberArray,operation){
    let output = []
    numberArray.forEach((element)=>{
      if (!operation(element)){
        output.push(element)
      }
    })
    return output
  }
  
  function nonPrime(numberArray){
    return reject(numberArray,isPrime)
  }


// Progression 5:

let isEvenUsingLambda = (number) => number%2==0;


// Progression 6:

function findSquareOfNumbers(myArray){
    return myArray.map((element)=>element*element)
  }


// Progression 7:

function multiply(myArray){
    return myArray.reduce((a,num)=>a*num,1)
  }
  
  function sumOfSquares(myArray){
    return myArray.map((element)=>element*element).reduce((a,num)=>a+num,0)
  }


