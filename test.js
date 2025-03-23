  //DOUBLE LINKEDLIST 


//------------------------------------------------------------------
  
class Node {
  constructor(value){
    this.value = value;
    this.prev = null
    this.next = null
  }
}

class DoublyLinkedList{
  constructor(value){
    const newNode = new Node(value)
    this.head = newNode

     this.tail = this.head
     this.length = 1
  }

//  push method

  push(value){
    const newNode = new Node(value)
    
    if (!this.head) {
      this.head = newNode
      this.tail = newNode
      
    }
    this.tail.next = newNode
    newNode.prev = this.tail
    this.tail = newNode
 
    this.length++
    return this;

  }
 
 //pop method

  pop(){
    
    if(this.length===0){
      return undefined
    }
    let temp = this.tail

    if (this.length===1) {
      this.head = null
      this.tail = null
    }
    this.tail = this.tail.prev
    this.tail.next = null
    temp.prev = null
    this.length--
    return temp;
  }
 
  // unshift method its add element in starting the list

  unshift(value){
    let newNode = new Node(value)
    
    if (this.length===0){
      this.head = newNode
      this.tail = newNode
     }
      



      
    }


  }



}
const myDoublyLinkedList = new DoublyLinkedList(0)

myDoublyLinkedList.push(1)
myDoublyLinkedList.push(2)
myDoublyLinkedList.push(3)
 
console.log(myDoublyLinkedList.pop())
 