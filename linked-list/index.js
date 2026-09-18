class LinkedList {
	constructor() {
		this.head = null;
	}

	insert(value) {
		const newNode = new Node(value);
		let current = this.head;

		if (current === null) {
			this.head = newNode;
		} else {
            while (current.next !== null) {
                current = current.next
            }
            current.next = newNode
		}
        console.log('Current' ,current)
	}
}

class Node {
	constructor(value) {
		this.value = value;
		this.next = null;
	}
}

const list = new LinkedList();

list.insert(10);
list.insert(20);

console.log('head:' ,list.head);
