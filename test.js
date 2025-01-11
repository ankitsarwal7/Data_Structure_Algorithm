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
 
}
const myDoublyLinkedList = new DoublyLinkedList(0)

myDoublyLinkedList.push(1)
console.log(myDoublyLinkedList);
