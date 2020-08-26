class _Node {
  constructor(data, next){
    this.data = data;
    this.next = next;
  }
}

class Stack {
  constructor(){
    this.top = null;
  }

  push(data) {
    if(this.top === null){
      this.top = new _Node(data, null);
      return this.top;
    }
    const node = new _Node(data, this.top);
    this.top = node;
  }

  pop() {
    const node = this.top;
    this.top = node.next;
    return node.data;
  }

  peek(data){
    if(this.top === null){
      return 'nothing in this stack';
    }
    else(console.log(this.top.data));
  }

  isEmpty(){
    if(this.top !== null){
      return true;
    } else {
      return false;
    }
  }
}

function main() {
  let starTrek = new Stack();
  let myTrek = new Stack();
  starTrek.push('Kirk');
  starTrek.push('Spock');
  starTrek.push('McCoy');
  starTrek.push('Scotty');
  starTrek.peek();
  myTrek.isEmpty();
  console.log(starTrek);
  console.log(myTrek);

}
main();