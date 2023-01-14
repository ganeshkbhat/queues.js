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

var Queue = require("../index.js").QueueLowFootprintFifo;
var fifo = new Queue();

fifo.enqueue(1);
fifo.add(2);
fifo.insert(3);
fifo.push(4);
fifo.enqueue(5);
fifo.add(6);
fifo.insert(7);
fifo.push(8);


console.log(".size()", fifo.size());
console.log(".toArray()", fifo.toArray());


console.log(fifo.dequeue());
console.log(fifo.shift());
console.log(fifo.remove());


console.log(".size()", fifo.size());
console.log(".toArray()", fifo.toArray());

