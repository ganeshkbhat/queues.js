/**
 * 
 * Package: scale.concurrency
 * Author: Ganesh B
 * Description: 
 * Install: npm i scale.concurrency --save
 * Github: https://github.com/ganeshkbhat/scale.concurrency
 * npmjs Link: https://www.npmjs.com/package/scale.concurrency
 * File: .js
 * File Description: .js 
 * 
*/

/* eslint no-console: 0 */

'use strict';

const { Circular } = require("../index");

let c = new Circular();

c.add([1, 2, 3, 4, 5, 6]);
console.log(c.items);
c.add([1, 32]);
console.log(c.items);
c.pop();
c.pop();
c.pop();
console.log(c.items);
c.pop();
c.pop();
console.log(c.items);
c.pop();
c.pop();
console.log(c.items);

