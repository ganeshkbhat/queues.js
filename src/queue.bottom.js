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
function Queue(method = "fifo") {

    Base.call(this);

    this.superBase = this;
    this.method = method;

    this.size = function size() {
        return this.items.length - this.offset;
    }

    this.toArray = function toArray() {
        return [...this.items];
    }

    this.reset = function reset() {
        this.offset = 0;
    }

    this.lifoSize = function size() {
        return (this.offset === 0) ? this.items.length : this.offset + 1;
    }

    this.lifoToArray = function toArray() {
        return [...this.items];
    }

    this.lifoReset = function reset() {
        this.offset = this.items.length;
    }

    // 
    //   <==   [1,2,3,4]  <==
    // 
    this.fifo = {
        enqueue: (item) => this.push(item),
        dequeue: () => this.shift("+"),

        add: (item) => this.push(item),
        insert: (item) => this.push(item),
        push: (item) => this.push(item),

        shift: () => this.shift("+"),
        remove: () => this.shift("+"),

        clear: () => this.clear(),
        reset: () => this.reset("fifo"),
        isEmpty: () => this.isEmpty(),
        peek: () => this.peek(),
        size: () => this.size("fifo"),
        toArray: () => this.toArray("fifo"),
        getFront: () => this.getFront(),
        getRear: () => this.getRear()
    };

    // 
    //   [1,2,3,4]  <==
    //              ==>
    // 
    this.lifo = {
        enqueue: (item) => { if (!!this.size()) { this.offsetCounter("+"); } return this.push(item) },
        dequeue: () => this.pop("-"),

        add: (item) => { if (!!this.size()) { this.offsetCounter("+"); } return this.push(item) },
        push: (item) => { if (!!this.size()) { this.offsetCounter("+"); } return this.push(item) },
        insert: (item) => { if (!!this.size()) { this.offsetCounter("+"); } return this.push(item) },

        pop: () => this.pop("-"),
        remove: () => this.pop("-"),

        clear: () => this.clear(),
        reset: () => this.lifoReset(),
        isEmpty: () => this.isEmpty(),
        peek: () => this.peek(),
        size: () => this.lifoSize("lifo"),
        toArray: () => this.lifoToArray(),
        getFront: () => this.getFront(),
        getRear: () => this.getRear()
    }

    return { lifo: this.lifo, fifo: this.fifo };

}


/**
 *
 *
 */
function QueueLifo(method = "lifo") {

    Base.call(this);

    this.superBase = this;
    this.method = method;

    this.size = function size() {
        return (this.method === "lifo") ? (this.offset === 0) ? this.items.length : this.offset + 1 : this.items.length - this.offset;
    }

    this.toArray = function toArray() {
        return [...this.items];
    }

    this.reset = function reset() {
        this.offset = (this.method = "lifo") ? this.items.length : 0;
    }

    // 
    //   [1,2,3,4]  <==
    //              ==>
    // 
    this.lifo = {
        enqueue: (item) => { if (!!this.size()) { this.offsetCounter("+"); } return this.push(item) },
        dequeue: () => this.pop("-"),

        add: (item) => { if (!!this.size()) { this.offsetCounter("+"); } return this.push(item) },
        push: (item) => { if (!!this.size()) { this.offsetCounter("+"); } return this.push(item) },
        insert: (item) => { if (!!this.size()) { this.offsetCounter("+"); } return this.push(item) },

        pop: () => this.pop("-"),
        remove: () => this.pop("-"),

        clear: () => this.clear(),
        reset: () => this.reset(),
        isEmpty: () => this.isEmpty(),
        peek: () => this.peek(),
        size: () => this.size("lifo"),
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
function QueueFifo(method = "fifo") {

    Base.call(this);

    this.superBase = this;
    this.method = method;

    // 
    //   <==   [1,2,3,4]  <==
    // 
    this.fifo = {
        enqueue: (item) => this.push(item),
        dequeue: () => this.shift("+"),

        add: (item) => this.push(item),
        insert: (item) => this.push(item),
        push: (item) => this.push(item),

        shift: () => this.shift("+"),
        remove: () => this.shift("+"),

        clear: () => this.clear(),
        reset: () => this.reset("fifo"),
        isEmpty: () => this.isEmpty(),
        peek: () => this.peek(),
        size: () => this.size("fifo"),
        toArray: () => this.toArray("fifo"),
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
