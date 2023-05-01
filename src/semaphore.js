/**
 * 
 * Package: queues.js
 * Author: Ganesh B
 * Description: npm module for start ended lifo/ fifo, normal js ended lifo/ fifo, double ended queue and semaphore queue implementation
 * Install: npm i queues.js --save
 * Github: https://github.com/ganeshkbhat/queues.js
 * npmjs Link: https://www.npmjs.com/package/queues.js
 * File: semaphore.js
 * File Description: .js 
 * 
*/

/* eslint no-console: 0 */

'use strict';

const { Base, BaseLowFootprint, AsyncBase, AsyncBaseLowFootPrint } = require("./base.js");


// /**
//  *
//  *
//  * @param {*} initialValue
//  */
// function SemaphoreQueue(initialValue) {

//   Base.call(this);
//   this.superBase = this;

//   this.count = initialValue;
//   this.lock = false;

//   /**
//    * Decrement the semaphore
//    */
//   async function P() { }

//   /**
//    * Increment the semaphore
//    */
//   async function V() { }

//   async function use() { }

//   function value() {
//     return this.count;
//   }


// }


// /**
//  *
//  *
//  * @param {*} initialValue
//  */
// function Semaphore(initialValue) {
//   this.count;
//   this.awaiters = new Queue();
//   this.count = initialValue;

//   /**
//    * Decrement the semaphore
//    */
//   async function P() {
//     this.count--;
//     if (this.count < 0) {
//       // accept should be a function
//       await new Promise((accept) => {
//         this.awaiters.enqueue(accept);
//       });
//     }
//   }

//   /**
//    * Increment the semaphore
//    */
//   function V() {
//     this.count++;
//     if (this.count <= 0) {
//       setImmediate(this.awaiters.dequeue());
//     }
//   }

//   async function use(thunk) {
//     try {
//       await this.P();
//       await thunk();
//     } finally {
//       this.V();
//     }
//   }

//   function value() {
//     return this.count;
//   }
// }

function Semaphore(initialValue) {

  Base.call(this);
  this.superBase = this;

  // this.awaiters = new Queue();
  this.maxCount = initialValue;
  this.count = 0;
  this.waiting = [];

  async function acquire(item) {
    if (this.count < this.maxCount) {
      this.count++;
      return;
    }

    await new Promise((resolve) => {
      this.waiting.push(resolve);
    });
    this.count++;
    this.items.push(item);
  }

  function release(args) {
    if (this.count === 0) {
      throw new Error('Semaphore underflow');
    }
    this.count--;
    if (this.waiting.length > 0) {
      const resolve = this.waiting.shift();
      let fnc = this.items[this.count];
      resolve(fnc(args));
    }
  }

  async function run(taskName, args) {
    console.log(`${taskName} is waiting for a permit`);
    await acquire();
    console.log(`${taskName} has acquired a permit`);
    // Run some code here
    console.log(`${taskName} is releasing the permit`);
    release(args);
  }

}

SemaphoreQueue.prototype = Object.create(SemaphoreQueue.prototype);
SemaphoreQueue.prototype.constructor = SemaphoreQueue;


module.exports.Semaphore = Semaphore;
module.exports.SemaphoreQueue = SemaphoreQueue;

module.exports.default = { Semaphore, SemaphoreQueue };

