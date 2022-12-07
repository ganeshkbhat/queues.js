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

function Semaphore(initialValue) {
  this.count;
  this.awaiters = new Queue();
  this.count = initialValue;

  /**
   * Decrement the semaphore
   */
  async function P() {
    this.count--;
    if (this.count < 0) {
      // accept should be a function
      await new Promise((accept) => {
        this.awaiters.enqueue(accept);
      });
    }
  }

  /**
   * Increment the semaphore
   */
  function V() {
    this.count++;
    if (this.count <= 0) {
      setImmediate(this.awaiters.dequeue());
    }
  }

  async function use(thunk) {
    try {
      await this.P();
      await thunk();
    } finally {
      this.V();
    }
  }

  function value() {
    return this.count;
  }
}

module.exports.Semaphore = Semaphore;
module.exports.default = { Semaphore };

