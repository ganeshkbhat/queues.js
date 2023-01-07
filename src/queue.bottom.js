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

const { Base, BaseLowFootprint, AsyncBase, AsyncBaseLowFootPrint } = require("./base.js");

/**
 *
 *
 */
function Queue() {

    Base.call(this);

    this.superBase = this;

    // 
    //   <==   [1,2,3,4]  <==
    // 
    this.fifo = {
        enqueue: (item) => this.push(item),
        dequeue: () => this.shift(),

        add: (item) => this.push(item),
        insert: (item) => this.push(item),
        push: (item) => this.push(item),

        shift: () => this.shift(),
        remove: () => this.shift(),

        clear: () => this.clear(),
        isEmpty: () => this.isEmpty(),
        peek: () => this.peek(),
        size: () => this.size(),
        toArray: () => this.toArray(),
        getFront: () => this.getFront(),
        getRear: () => this.getRear()
    };

    // 
    //   [1,2,3,4]  <==
    //              ==>
    // 
    this.lifo = {
        enqueue: (item) => this.push(item),
        dequeue: () => this.pop(),

        add: (item) => this.push(item),
        push: (item) => this.push(item),
        insert: (item) => this.push(item),

        pop: () => this.pop(),
        remove: () => this.pop(),


        clear: () => this.clear(),
        isEmpty: () => this.isEmpty(),
        peek: () => this.peek(),
        size: () => this.size(),
        toArray: () => this.toArray(),
        getFront: () => this.getFront(),
        getRear: () => this.getRear()
    }

    return { lifo: this.lifo, fifo: this.fifo };

}


/**
 *
 *
 */
function QueueLifo() {

    Base.call(this);

    this.superBase = this;

    // 
    //   [1,2,3,4]  <==
    //              ==>
    // 
    this.lifo = {
        enqueue: (item) => this.push(item),
        dequeue: () => this.pop(),

        add: (item) => this.push(item),
        push: (item) => this.push(item),
        insert: (item) => this.push(item),

        pop: () => this.pop(),
        remove: () => this.pop(),

        clear: () => this.clear(),
        isEmpty: () => this.isEmpty(),
        peek: () => this.peek(),
        size: () => this.size(),
        toArray: () => this.toArray(),
        getFront: () => this.getFront(),
        getRear: () => this.getRear()
    }

    return this.lifo;

}

/**
 *
 *
 */
function QueueFifo() {

    Base.call(this);

    this.superBase = this;

    // 
    //   <==   [1,2,3,4]  <==
    // 
    this.fifo = {
        enqueue: (item) => this.push(item),
        dequeue: () => this.shift(),

        add: (item) => this.push(item),
        insert: (item) => this.push(item),
        push: (item) => this.push(item),

        shift: () => this.shift(),
        remove: () => this.shift(),

        clear: () => this.clear(),
        isEmpty: () => this.isEmpty(),
        peek: () => this.peek(),
        size: () => this.size(),
        toArray: () => this.toArray(),
        getFront: () => this.getFront(),
        getRear: () => this.getRear()
    };

    return this.fifo;

}

/**
 *
 *
 */
function QueueLowFootprint() {
    BaseLowFootprint.call(this);

    this.superBase = this;

    // this.enqueue = function enqueue(item) { }
    // this.dequeue = function dequeue() { }

    //
    //   <==   [1,2,3,4]  <==
    // 
    this.fifo = {
        enqueue: (item) => this.push(item),
        dequeue: () => this.shift(),

        add: (item) => this.push(item),
        insert: (item) => this.push(item),
        push: (item) => this.push(item),

        shift: () => this.shift(),
        remove: () => this.shift(),

        clear: () => this.clear(),
        isEmpty: () => this.isEmpty(),
        peek: () => this.peek(),
        size: () => this.size(),
        toArray: () => this.toArray(),
        getFront: () => this.getFront(),
        getRear: () => this.getRear()
    };

    // 
    //   [1,2,3,4]  <==
    //              ==>
    //
    this.lifo = {
        enqueue: (item) => this.push(item),
        dequeue: () => this.pop(),

        add: (item) => this.push(item),
        push: (item) => this.push(item),
        insert: (item) => this.push(item),

        pop: () => this.pop(),
        remove: () => this.pop(),

        clear: () => this.clear(),
        isEmpty: () => this.isEmpty(),
        peek: () => this.peek(),
        size: () => this.size(),
        toArray: () => this.toArray(),
        getFront: () => this.getFront(),
        getRear: () => this.getRear()
    }

    return { lifo: this.lifo, fifo: this.fifo };
}


/**
 *
 *
 */
function QueueLowFootprintFifo() {
    BaseLowFootprint.call(this);

    this.superBase = this;

    // console.log(this.items)

    // this.enqueue = function enqueue(item) { }
    // this.dequeue = function dequeue() { }

    //
    //   <==   [1,2,3,4]  <==
    // 
    this.fifo = {
        enqueue: (item) => this.push(item),
        dequeue: () => this.shift(),

        add: (item) => this.push(item),
        insert: (item) => this.push(item),
        push: (item) => this.push(item),

        shift: () => this.shift(),
        remove: () => this.shift(),

        clear: () => this.clear(),
        isEmpty: () => this.isEmpty(),
        peek: () => this.peek(),
        size: () => this.size(),
        toArray: () => this.toArray(),
        getFront: () => this.getFront(),
        getRear: () => this.getRear()
    };

    return this.fifo;
}


/**
 *
 *
 */
function QueueLowFootprintLifo() {
    BaseLowFootprint.call(this);

    this.superBase = this;

    // 
    //   [1,2,3,4]  <==
    //              ==>
    //
    this.lifo = {
        enqueue: (item) => this.push(item),
        dequeue: () => this.pop(),

        add: (item) => this.push(item),
        push: (item) => this.push(item),
        insert: (item) => this.push(item),

        pop: () => this.pop(),
        remove: () => this.pop(),

        clear: () => this.clear(),
        isEmpty: () => this.isEmpty(),
        peek: () => this.peek(),
        size: () => this.size(),
        toArray: () => this.toArray(),
        getFront: () => this.getFront(),
        getRear: () => this.getRear()
    }

    return this.lifo;
}

/**
 *
 *
 */
function AsyncQueue() {
    AsyncBase.call(this);
}

/**
 *
 *
 */
function AsyncQueueLowFootprint() {
    AsyncBaseLowFootPrint.call(this);
}


Queue.prototype = Object.create(Base.prototype);
Queue.prototype.constructor = Queue;

QueueLifo.prototype = Object.create(Base.prototype);
QueueLifo.prototype.constructor = QueueLifo;

QueueFifo.prototype = Object.create(Base.prototype);
QueueFifo.prototype.constructor = QueueFifo;

QueueLowFootprint.prototype = Object.create(BaseLowFootprint.prototype);
QueueLowFootprint.prototype.constructor = QueueLowFootprint;

QueueLowFootprintLifo.prototype = Object.create(BaseLowFootprint.prototype);
QueueLowFootprintLifo.prototype.constructor = QueueLowFootprintLifo;

QueueLowFootprintFifo.prototype = Object.create(BaseLowFootprint.prototype);
QueueLowFootprintFifo.prototype.constructor = QueueLowFootprintFifo;


AsyncQueue.prototype = Object.create(AsyncBase.prototype);
AsyncQueue.prototype.constructor = AsyncQueue;

AsyncQueueLowFootprint.prototype = Object.create(AsyncBaseLowFootPrint.prototype);
AsyncQueueLowFootprint.prototype.constructor = AsyncQueueLowFootprint;

module.exports.Queue = Queue;
module.exports.QueueLowFootprint = QueueLowFootprint;

module.exports.QueueLifo = QueueLifo;
module.exports.QueueFifo = QueueFifo;
module.exports.QueueLowFootprintLifo = QueueLowFootprintLifo;
module.exports.QueueLowFootprintFifo = QueueLowFootprintFifo;

module.exports.AsyncQueue = AsyncQueue;
module.exports.AsyncQueueLowFootprint = AsyncQueueLowFootprint;

module.exports.default = { Queue, QueueLowFootprint, QueueLifo, QueueFifo, QueueLowFootprintLifo, QueueLowFootprintFifo, AsyncQueue, AsyncQueueLowFootprint }
