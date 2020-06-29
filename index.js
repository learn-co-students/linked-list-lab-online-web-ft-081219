function getName(node){
    return node.name
}

function headNode(list, collection){
    return collection[list]
}

function next(head, collection){
    return collection[head.next]
}

function nodeAt(index, list, collection){
    let head = headNode(list, collection)
    for(let i = 0; i < index; i++){
        head = next(head, collection)
    }
    return head
}

function addressAt(index, list, collection){
    if (index === 0) {
        return list
    } else {
        let head = nodeAt(index - 1, list, collection)
        return head.next
    }
}

function indexAt(head, collection, list){
    let currentHeadNode = headNode(list, collection)
    let i = 0
    for (; currentHeadNode != head; i++) {
        currentHeadNode = next(currentHeadNode, collection)
    }
    return i
}

function insertNodeAt(index, newAddress, list, collection){
    let prevNode = nodeAt(index - 1, list, collection)
    let nextNode = nodeAt(index, list, collection)
    let nextAddress = addressAt(nextNode, list, collection)

    prevNode.next = newAddress
    let newNode = collection[newAddress]
    newNode.next = nextAddress
}

function deleteNodeAt(index, list, collection){
    let deleted = nodeAt(index, list, collection)
    let prevNode = nodeAt(index - 1, list, collection)

    prevNode.next = deleted.next
}