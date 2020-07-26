function getName(node) {
  return Object.values(node)[0];
}

function headNode(linkedList, collection) {
  return collection[linkedList];
}

function next(head, collection) {
  return collection[head.next];
}

function nodeAt(index,linkedList, collection) {
  let currentNode = headNode(linkedList, collection);

  for (let i=0; i < index ; i++) {
    currentNode = next(currentNode, collection);
  }
  return currentNode;
}

function addressAt(index, linkedList, collection){
  const currentNode = nodeAt(index, linkedList, collection)
  return findKeyValue(collection, currentNode)
}

function findKeyValue(collection, value){
  return Object.keys(collection).find(key => collection[key] === value)
}

function indexAt(node, collection, linkedList){
  let currentNode = headNode(linkedList, collection);
  let i = 0;
  while (node != currentNode){
    currentNode = next(currentNode, collection);
    i++
  }
  return i;
}

function insertNodeAt(index, newAddress, linkedList, collection) {
  const newNode = collection[newAddress];
  newNode.next = addressAt(index, linkedList, collection);
  const previousNode = nodeAt(index - 1, linkedList, collection);
  previousNode.next = newAddress
}

function deleteNodeAt(index, linkedList, collection) {
  const nodeToBeDeleted = nodeAt(index, linkedList, collection);
  let nextNode = nodeAt(index + 1, linkedList, collection);
  let previousNode = nodeAt(index - 1, linkedList, collection);
  previousNode.next = findKeyValue(collection, nextNode)
}
