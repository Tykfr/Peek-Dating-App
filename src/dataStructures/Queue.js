class Queue {
    
    constructor(arrayOfData){
        this.maxSize= arrayOfData.length;
        this.container = arrayOfData;
    }

    //prints out contents
    display(){
        console.log(this.container)
    }
    //returns boolean if contents is empty
    isEmpty(){
        return this.container.length === 0;
    }
    //returns boolean if contents is full 
    isFull(){
        return this.container.length === this.maxSize;
    }
    //push element to back of the queue
    enqueue(elem){
        if(this.isFull()){
            console.log("Queue is full");
            return;
        }
        this.container.push(elem);
    }
    //pops element from front of the queue
    dequeue(){
        if(this.isEmpty()){
            console.log("Queue is empty");
            return;
        }
       return this.container.shift();
    }

    //returns first element of the queue
    peek(){
        if(this.isEmpty()){
            console.log("Queue is empty");
            return;
        }
        return this.container[0];
    }
    //Empty the container
    clear(){
        this.container=[]
    }

    size(){
        console.log(this.container.length)
    }
}

export default Queue;