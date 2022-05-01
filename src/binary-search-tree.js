const { NotImplementedError } = require('../extensions/index.js');
const util = require('util')
// const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this._root = null
  }


  root() {
    return this._root
  }

  add(data) {
    // console.log(data)
    let node = new Node(data)
    if (!this._root) 
      {
        this._root = node;
        return this;
      }
    let current = this._root;
    while (current) {
      if (data == current.data) return undefined;
      if (data < current.data) {
        if (current.left == null) {
          current.left = node;
          return this;
        }
        current = current.left
      }
      else {
        if (current.right == null) {
          
          current.right = node;
          return this;
        }
        current = current.right;
      }
    }
    
  }

  has(data, find=false) {
    if (!this._root) return false;
    let current = this._root;
    let result = false;
    while (current && !result) {
      if (data < current.data) {
        
        current = current.left

      }
      else if (data > current.data) {
        
        current = current.right
      }
      else {
        result = find ? current : true;
      }
    }
    
    return result;
  }

  find(data) {
    return this.has(data, true) || null
  }

  remove(data)
  {    
      this._root = this.removeNode(this._root, data);
  }
  
  removeNode(node, key)
  {
      if(node === null)
          return null;
  
      else if(key < node.data)
      {
          node.left = this.removeNode(node.left, key);
          return node;
      }
      else if(key > node.data)
      {
          node.right = this.removeNode(node.right, key);
          return node;
      }
      else
      {         
          if(node.left === null && node.right === null)
          {
              node = null;
              return node;
          }
          if(node.left === null)
          {
              node = node.right;
              return node;
          }         
          else if(node.right === null)
          {
              node = node.left;
              return node;
          }
          let aux = this.findMinNode(node.right);
          node.data = aux.data; 
          node.right = this.removeNode(node.right, aux.data);
          return node;
      }
  
  }

  min() {
    return this.findMinNode(this._root).data
  }

  max() {
    let current = this._root
    while (current) {
      if (!current.right) return current.data;
      current = current.right; 
    }
  }
  findMinNode(node)
  {
      if(node.left === null)
          return node;
      else
          return this.findMinNode(node.left);
  }
}

module.exports = {
  BinarySearchTree
};