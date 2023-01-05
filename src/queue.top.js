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
function QueueTop() {

    Base.call(this);

    // 
    //   ==>   [1,2,3,4]  ==>
    // 
    this.fifo = {
        enqueue: (item) => this.push(item, counter = ""),
        dequeue: () => this.pop(counter = ""),

        add: (item) => this.push(item, counter = ""),
        push: (item) => this.push(item, counter = ""),
        insert: (item) => this.push(item, counter = ""),

        pop: () => this.pop(counter = ""),
        remove: () => this.pop(counter = "")
    };

    // 
    //    ==>  [1,2,3,4]
    //    <==        
    // 
    this.lifo = {
        enqueue: (item) => this.push(item, counter = ""),
        dequeue: () => this.pop(counter = ""),

        add: (item) => this.push(item, counter = ""),
        push: (item) => this.push(item, counter = ""),
        insert: (item) => this.push(item, counter = ""),

        pop: () => this.pop(counter = ""),
        remove: () => this.pop(counter = "")
    }

}


/**
 *
 *
 */
function QueueTopLifo() {

    Base.call(this);

    // 
    //    ==>  [1,2,3,4]
    //    <==        
    // 
    this.lifo = {
        
    }

    return this.lifo;

}

/**
 *
 *
 */
function QueueTopFifo() {

    Base.call(this);

    // 
    //   ==>   [1,2,3,4]  ==>
    // 
    this.fifo = {
        enqueue: (item) => this.push(item, counter = ""),
        dequeue: () => this.shift(counter = ""),

        add: (item) => this.push(item, counter = ""),
        insert: (item) => this.push(item, counter = ""),
        push: (item) => this.push(item, counter = ""),

        shift: () => this.shift(counter = ""),
        remove: () => this.shift(counter = "")
    };

    return this.fifo;

}

/**
 *
 *
 */
function QueueTopLowFootprint() {
    BaseLowFootprint.call(this);

    // this.enqueue = function enqueue(item) { }
    // this.dequeue = function dequeue() { }

    // 
    //   ==>   [1,2,3,4]  ==>
    // 
    this.fifo = {
        enqueue: (item) => this.push(item, counter = ""),
        dequeue: () => this.shift(counter = ""),

        add: (item) => this.push(item, counter = ""),
        insert: (item) => this.push(item, counter = ""),
        push: (item) => this.push(item, counter = ""),

        shift: () => this.shift(counter = ""),
        remove: () => this.shift(counter = "")
    };

    // 
    //    ==>  [1,2,3,4]
    //    <==        
    // 
    this.lifo = {
        enqueue: (item) => this.push(item, counter = ""),
        dequeue: () => this.pop(counter = ""),

        add: (item) => this.push(item, counter = ""),
        push: (item) => this.push(item, counter = ""),
        insert: (item) => this.push(item, counter = ""),

        pop: () => this.pop(counter = ""),
        remove: () => this.pop(counter = "")
    }

}


/**
 *
 *
 */
function QueueTopLowFootprintFifo() {
    BaseLowFootprint.call(this);

    // this.enqueue = function enqueue(item) { }
    // this.dequeue = function dequeue() { }

    // 
    //   ==>   [1,2,3,4]  ==>
    // 
    this.fifo = {
        enqueue: (item) => this.push(item, counter = ""),
        dequeue: () => this.shift(counter = ""),

        add: (item) => this.push(item, counter = ""),
        insert: (item) => this.push(item, counter = ""),
        push: (item) => this.push(item, counter = ""),

        shift: () => this.shift(counter = ""),
        remove: () => this.shift(counter = "")
    };

    return this.fifo;
}


/**
 *
 *
 */
function QueueTopLowFootprintLifo() {
    BaseLowFootprint.call(this);

    // 
    //    ==>  [1,2,3,4]
    //    <==        
    // 
    this.lifo = {
        enqueue: (item) => this.push(item, counter = ""),
        dequeue: () => this.pop(counter = ""),

        add: (item) => this.push(item, counter = ""),
        push: (item) => this.push(item, counter = ""),
        insert: (item) => this.push(item, counter = ""),

        pop: () => this.pop(counter = ""),
        remove: () => this.pop(counter = "")
    }

    return this.lifo;
}

/**
 *
 *
 */
function AsyncQueueTop() {
    AsyncBase.call(this);
}

/**
 *
 *
 */
function AsyncQueueTopLowFootprint() {
    AsyncBaseLowFootPrint.call(this);
}


QueueTop.prototype = Object.create(Base.prototype);
QueueTop.prototype.constructor = QueueTop;

QueueTopLifo.prototype = Object.create(Base.prototype);
QueueTopLifo.prototype.constructor = QueueTopLifo;

QueueTopFifo.prototype = Object.create(Base.prototype);
QueueTopFifo.prototype.constructor = QueueTopFifo;

QueueTopLowFootprint.prototype = Object.create(BaseLowFootprint.prototype);
QueueTopLowFootprint.prototype.constructor = QueueTopLowFootprint;

QueueTopLowFootprintLifo.prototype = Object.create(BaseLowFootprint.prototype);
QueueTopLowFootprintLifo.prototype.constructor = QueueTopLowFootprintLifo;

QueueTopLowFootprintFifo.prototype = Object.create(BaseLowFootprint.prototype);
QueueTopLowFootprintFifo.prototype.constructor = QueueTopLowFootprintFifo;


AsyncQueueTop.prototype = Object.create(AsyncBase.prototype);
AsyncQueueTop.prototype.constructor = AsyncQueueTop;

AsyncQueueTopLowFootprint.prototype = Object.create(AsyncBaseLowFootPrint.prototype);
AsyncQueueTopLowFootprint.prototype.constructor = AsyncQueueTopLowFootprint;

module.exports.QueueTop = QueueTop;
module.exports.QueueTopLowFootprint = QueueTopLowFootprint;

module.exports.QueueTopLifo = QueueTopLifo;
module.exports.QueueTopFifo = QueueTopFifo;
module.exports.QueueTopLowFootprintLifo = QueueTopLowFootprintLifo;
module.exports.QueueTopLowFootprintFifo = QueueTopLowFootprintFifo;

module.exports.AsyncQueueTop = AsyncQueueTop;
module.exports.AsyncQueueTopLowFootprint = AsyncQueueTopLowFootprint;

module.exports.default = { QueueTop, QueueTopLowFootprint, QueueTopLifo, QueueTopFifo, QueueTopLowFootprintLifo, QueueTopLowFootprintFifo, AsyncQueueTop, AsyncQueueTopLowFootprint }
