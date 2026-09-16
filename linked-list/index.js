class LinkedList {
	constructor() {
		this.head = Node;
	}

    insert () {
        
    }
}

class Node {
	constructor(value) {
		this.value = value;
		this.next = null;
	}
}

const list = new LinkedList()
const myNode = new Node(10)

list.head = myNode

console.log(list.head)
console.log(list.head.value)
