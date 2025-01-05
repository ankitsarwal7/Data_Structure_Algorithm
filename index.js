//  1 => Program Question: Search and Count Students in an Array
// Write a program that includes a list of student names. Implement a function that performs the following tasks:

// Searches for a specific student's name in the array.
// If the name is found, output a message indicating the name was found.
// If the name is not found, output a message saying it was not found.


 
// const StudentName = ['ankit', 'amit', 'sumit', 'rohit']

function findstudent (allStudent, studentName) {
     for(let i= 0; i < allStudent.length; i++) {
        if( allStudent[i] === studentName) {
            console.log(` found ${studentName}`)
        }
        else (!studentName)
        // console.log("name not found ");
        
     }
 
}
// findstudent(StudentName, 'alex')



//-------------------------------------------------------------------------------------------


// 2 => Custom Array Class Implementation

 

class myArray {
    constructor() {
        this.lenght = 0,
        this.data = {}
    }


Push(item) {
    this.data[this.lenght] = item;
    this.lenght++;
    return this.lenght;
}

get(index) {
    return this.data[index]
}

pop() {
  const lastItme = this.data[this.lenght - 1]

  delete this.data[this.lenght - 1]

  this.lenght--;

  return lastItme;


 }

 shift(){
    const firstitem = this.data[0]

   for (let i = 0; i < this.data.lenght; i++) {
        this.data[i] = this.data[i+1]
    }
    delete this.data[this.lenght -1]
    this.lenght--
    return firstitem;
 
 }
   // delete by index
   delete(index) {
      const item = this.data[index]

    for (let i = 0; i < this.lenght ; i++) {
         this.data[i]= this.data[i+1]        
    }

    delete this.data[this.lenght - 1]
    this.lenght--
    return item;

   }





}


const myNewArray = new myArray();
myNewArray.Push('apple');
myNewArray.Push('banana');
myNewArray.Push('mango');
myNewArray.Push('guavava');
// myNewArray.pop();



// console.log(myNewArray);
// console.log(myNewArray.shift());
// console.log(myNewArray);
 

// console.log(myNewArray.get(1));

// console.log(myNewArray.delete(1));

// console.log(myNewArray, );

 
 

//---------------------------------------------------------------------------------



// 3 => reverse string


const reverseStr = (str) =>  str.split("").reverse("").join('')
// console.log(reverseStr("hello"));
// console.log(reverseStr("ankit"));



//-------------------------------------------------------------------------

//  4 => palindrome 

const palindrome = (str) => str.split('').reverse('').join('') === str
// console.log(palindrome('abba'));


//-------------------------------------------------------------------------

//  5 => reverse int 

const reverseInt = n => {
    const reversed = n.toString().split('').reverse('').join('')
     return parseInt(reversed) * Math.sign(n)
}
// console.log(reverseInt(4321));


 //-------------------------------------------------------------------------

//  6 => capitilize string

function capitilize(str) {
    if(!str){
        return str(" ")
    }
    return str[0].toUpperCase() + str.slice(1)
}
// console.log(capitilize("jordan"));


 //-------------------------------------------------------------------------

 //  7 => fizz buzz

const fizzBuzz = (n) =>  {
    for (let i = 1; i<= n; i++) {
    if(i % 3 ===0 && i % 5 ===0){
        // console.log('fizzBuzz');
        
    }
   else if (i % 3 === 0) {
        // console.log('fizz');
        
    }
   else if (i % 5 === 0 ) {
    //    console.log('buzz');
       
   }
   else {
    // console.log(i);
    
   }
}
}
// fizzBuzz(15)


 //-------------------------------------------------------------------------

 //  8 => Maximum Profit from Stock Prices


function maxProfit(prices) {
    let minPrice = Infinity
    let maxProfit = 0

for( let price of prices){
    if( price < minPrice){
        minPrice = price
    }else {
        maxProfit = Math.max(maxProfit, price - minPrice)
    }
}
return maxProfit;
}

const prices = [7, 1, 5, 3, 6, 4];
// console.log(maxProfit(prices));




 //-------------------------------------------------------------------------

 //  8 =>  chunk 
  
function chunkArray(array, chunkSize){
    const chunks = [];
    let index = 0;
   
    while(index < array.length) {
        const chunk = array.slice(index, index + chunkSize);
        chunks.push(chunk);
        index += chunkSize;


    }
    
return chunks;

}

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const size = 3

// console.log(chunkArray(arr, size));



 //-------------------------------------------------------------------------

 //  8 =>  chunk 






 