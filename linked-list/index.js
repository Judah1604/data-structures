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
				current = current.next;
			}
			current.next = newNode;
		}
		console.log("Current", current);
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

console.log("head:", list.head);

const values = makeArrayFromList(list);
const reversed = values.reverse();


function makeArrayFromList(list) {
	let result = [],
		current = list.head;

	result.push(current.value);

	while (current.next !== null) {
		current = current.next;
		result.push(current.value);
	}

	return result;
}

function makeListFromArray(array) {
	const newList = new LinkedList();

	for (let index = 0; index < array.length; index++) {
		const element = array[index];

		newList.insert(element);
	}

	return newList;
}
