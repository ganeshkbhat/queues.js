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

// var Queue = require("../index.js").Semaphore;
// var semaphore = new Queue();


function Semaphore(initialValue) {

  // this.awaiters = new Queue();
  this.maxCount = initialValue;
  this.count = 0;
  this.waiting = [];

  async function acquire() {
    if (this.count < this.maxCount) {
      this.count++;
      return;
    }

    await new Promise((resolve) => {
      this.waiting.push(resolve);
    });
    this.count++;
  }

  function release() {
    if (this.count === 0) {
      throw new Error('Semaphore underflow');
    }

    this.count--;
    if (this.waiting.length > 0) {
      const resolve = this.waiting.shift();
      resolve();
    }
  }

  async function run(taskName, args) {
    console.log(`${taskName} is waiting for a permit`);
    await acquire();
    console.log(`${taskName} has acquired a permit`);
    // Run some code here
    console.log(`${taskName} is releasing the permit`);
    console.log(args);
    release(args);
  }

  return {
    acquire,
    release,
    run
  }
}

const semaphore = new Semaphore(2);

console.log(semaphore);

function run() {

  semaphore.run('Task 1', "a").then(v => console.log(v));
  semaphore.run('Task 2', "b").then(v => console.log(v));
  semaphore.run('Task 3', "c").then(v => console.log(v));
  semaphore.run('Task 4', "d").then(v => console.log(v));

}

run();
