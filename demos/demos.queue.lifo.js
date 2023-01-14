/**
 * 
 * Package: queues.js
 * Author: Ganesh B
 * Description: 
 * Install: npm i queues.js --save
 * Github: https://github.com/ganeshkbhat/queues.js
 * npmjs Link: https://www.npmjs.com/package/queues.js
 * File: .js
 * File Description: .js 
 * 
*/

/* eslint no-console: 0 */

'use strict';

var Queue = require("../index.js").QueueLifo;
var lifo = new Queue();

lifo.enqueue(1);
lifo.add(2);
lifo.insert(3);
lifo.push(4);
lifo.enqueue(5);
lifo.add(6);
lifo.insert(7);
lifo.push(8);

console.log(".size()", lifo.size());
console.log(".toArray()", lifo.toArray());

console.log(lifo.dequeue());
console.log(lifo.pop());
console.log(lifo.remove());

console.log(".size()", lifo.size());
console.log(".toArray()", lifo.toArray());
