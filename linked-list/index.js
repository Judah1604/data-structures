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
list.insert(30);

console.log('head:', list.head);

const values = makeArrayFromNode(list)
console.log('Values: ', values)

function makeArrayFromNode (list) {
    let result = [], current = list.head

    result.push(current.value)

    while (current.next !== null) {
		current = current.next
        result.push(current.value)
	}

    return result
}
