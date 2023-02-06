// /**
//  * 
//  * Package: queues.js
//  * Author: Ganesh B
//  * Description: 
//  * Install: npm i queues.js --save
//  * Github: https://github.com/ganeshkbhat/queues.js
//  * npmjs Link: https://www.npmjs.com/package/queues.js
//  * File: .js
//  * File Description: .js 
//  * 
// */

// /* eslint no-console: 0 */

// 'use strict';

// const { Circular } = require("../index");

// let type = "front";
// let method = "fifo";

// let c = new Circular(type, method, 20);

// // c.add([1, 2, 3, 4, 5, 6]);
// c.add(1);
// c.add(2);
// c.add(3);
// c.add(4);
// c.add(5);
// c.add(6);

// console.log(c.toArray());

// c.add(1);
// c.add(32);

// console.log(c.toArray());

// console.log(c.pop());
// console.log(c.pop());
// console.log(c.pop());

// console.log(c.toArray());

// console.log(c.pop());
// console.log(c.pop());

// console.log(c.toArray());

// console.log(c.pop());
// console.log(c.pop());

// console.log(c.toArray());

