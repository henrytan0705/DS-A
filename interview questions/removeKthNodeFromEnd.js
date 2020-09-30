class LinkedList {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

function removeKthNodeFromEnd(head, k) {
  let first = head;
  let second = head;

  // traverse second pointer ahead by k nodes
  for (let i = 0; i < k; i++) second = second.next;

  // case of removing first node
  if (second === null) {
    head.value = head.next.value;
    head.next = head.next.next;
    return;
  }

  // traverse first and second pointers until second pointer hits last node
  while (second.next !== null) {
    first = first.next;
    second = second.next;
  }

  // remove node
  first.next = first.next.next;
}
