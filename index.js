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

 //  9 =>  

 // The program is commonly referred to as "Two Sum".

// This problem is a classic array-based coding challenge and is widely used in programming interviews and competitive programming platforms like LeetCode, HackerRank, and Codewars.

// If you'd like, you can name the function or file something descriptive, such as:

// twoSum.js (file name)

 


    function twoSum(nums, target) {
        const map = new Map(); // Create a map to store numbers and their indices.
    
        for (let i = 0; i < nums.length; i++) {
            const complement = target - nums[i]; // Calculate the number needed to add to nums[i] to reach the target.
    
            if (map.has(complement)) {
                return [map.get(complement), i]; // If the complement exists in the map, return its index and the current index.
            }
    
            map.set(nums[i], i); // Otherwise, store the current number and its index in the map.
        }
    
        return []; // If no solution is found, return an empty array.
    }
    
    const nums = [2, 7, 11, 15];
    const target = 9;
    
    // console.log(twoSum(nums, target)); // Output: [0, 1]
    
//-------------------------------------------------------------------------






//.......................SINGLE ----- LINKEDLIST..................... 







 //  10 =>  LinkedList push method
 
// // Node class to represent each node in the linked list
// class Node {
//     constructor(data) {
//         this.data = data; // The value stored in the node
//         this.next = null; // Pointer to the next node (initially null)
//     }
// }

// // LinkedList class to manage the list
// class LinkedList {
//     constructor() {
//         this.head = null; // The head (start) of the list, initially null
//     }

//     // Push method to add a new node at the end of the list
//     push(data) {
//         const newNode = new Node(data); // Create a new node with the given data

//         if (this.head === null) {
//             // If the list is empty, the new node becomes the head
//             this.head = newNode;
//             return;
//         }

//         // Otherwise, traverse to the end of the list
//         let current = this.head;
//         while (current.next !== null) {
//             current = current.next; // Move to the next node
//         }

//         // Add the new node at the end of the list
//         current.next = newNode;
//     }

//     // Helper method to print the linked list
//     printList() {
//         let current = this.head;
//         while (current !== null) {
//             // console.log(current.data);
//             current = current.next; // Move to the next node
//         }
//     }
// }

// // Example usage
// const linkedList = new LinkedList();

// // Add nodes to the list using push
// linkedList.push(10);
// linkedList.push(20);
// linkedList.push(30);

// // Print the linked list
// linkedList.printList();

 
//-------------------------------------------------------------------------

 //  11 =>  LinkedList ALL OPERATION  method

// created a node
class Node {
     constructor (value) {
        this.head = value 
        this.next = null
    }
}

class LinkedList {
    constructor(value){
        this.head = new Node(value)
        this.tail = this.head
        this.length = 1
    }
}

const myLinkedList = new LinkedList(1)
console.log(myLinkedList);
 
 








