class LinkedList {
	constructor() {
		this.head = null;
	}

	insert(value) {
		const newNode = new Node(value);
		let current = this.head;

		if (current === null) {
			current = newNode;
		} else {
            while (current.next !== null) {
                current = current.next
            }
		}
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

console.log(list.head);
console.log(list.head.value);
