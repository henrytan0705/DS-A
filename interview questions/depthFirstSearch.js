class Node {
  constructor(name) {
    this.name = name;
    this.children = [];
  }

  addChild(name) {
    this.children.push(new Node(name));
    return this;
  }

  depthFirstSearch(array) {
    array.push(this.name);

    for (let i = 0; i < this.children.length; i++) {
      const child = this.children[i];
      child.depthFirstSearch(array);
    }

    return array;
  }
}
