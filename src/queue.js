/**
 * 
 * Package: queues.js
 * Author: Ganesh B
 * Description: npm module for start ended lifo/ fifo, normal js ended lifo/ fifo, double ended queue and semaphore queue implementation
 * Install: npm i queues.js --save
 * Github: https://github.com/ganeshkbhat/queues.js
 * npmjs Link: https://www.npmjs.com/package/queues.js
 * File: src/queue.js
 * File Description: queues.js 
 * 
*/

/* eslint no-console: 0 */

'use strict';

const { Base, BaseLowFootprint, AsyncBase, AsyncBaseLowFootPrint } = require("./base");

function Queue() {
    Base.call(this);
}

function QueueLowFootprint() {
    BaseLowFootprint.call(this);

    // this.enqueue = function enqueue(item) { }
    // this.dequeue = function dequeue() { }

    //   <==   [1,2,3,4]  <==
    this.fifo = {
        enqueue: this.push,
        dequeue: this.shift,

        add: this.push,
        insert: this.push,
        push: this.push,

        shift: this.shift,
        remove: this.shift
    };

    //   [1,2,3,4]  <==
    //              ==>
    this.lifo = {
        enqueue: this.push,
        dequeue: this.pop,

        add: this.push,
        push: this.push,
        insert: this.push,

        pop: this.pop,
        remove: this.pop
    }

}

function AsyncQueue() {
    AsyncBase.call(this);
}

function AsyncQueueLowFootprint() {
    AsyncBaseLowFootPrint.call(this);
}

Queue.prototype = Object.create(Base.prototype);
Queue.prototype.constructor = Queue;

QueueLowFootprint.prototype = Object.create(BaseLowFootprint.prototype);
QueueLowFootprint.prototype.constructor = QueueLowFootprint;

AsyncQueue.prototype = Object.create(AsyncBase.prototype);
AsyncQueue.prototype.constructor = AsyncQueue;

AsyncQueueLowFootprint.prototype = Object.create(AsyncBaseLowFootPrint.prototype);
AsyncQueueLowFootprint.prototype.constructor = AsyncQueueLowFootprint;

module.exports.Queue = Queue;
module.exports.QueueLowFootprint = QueueLowFootprint;
module.exports.AsyncQueue = AsyncQueue;
module.exports.AsyncQueueLowFootprint = AsyncQueueLowFootprint;

module.exports.default = { Queue, QueueLowFootprint, AsyncQueue, AsyncQueueLowFootprint }
