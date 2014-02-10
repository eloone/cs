/*

How to find maximum path sum in a binary tree. 
http://www.careercup.com/question?id=14946937
The path need not be a top-bottom, can start and end nodes need not be root or leaf, path can start in left/right subtree and end in right/left subtree wrt any node.

*/


/*

Create a binary tree 

*/

var vals = ['B', 'C', 'D', 'E', 'F', 'G'];

function Node(val){
	this.value = val;
	this.left = null;
	this.right = null;
}

function tree(){
	var A = new Node('A');
	var B = A.left = new Node('B');
	var C = A.right = new Node('C');
	var D = B.left = new Node('D');
	var E = B.right = new Node('E');
	var F = C.left = new Node('F');
	var G = C.right = new Node('G');

	return A;
}

var tree = new tree();

console.log(tree);
