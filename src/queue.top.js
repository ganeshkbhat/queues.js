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
function QueueTop(method = "fifo") {

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

    this.fifoSize = function size() {
        return (this.offset === 0) ? this.items.length : this.offset + 1;
    }

    this.fifoToArray = function toArray() {
        return [...this.items];
    }

    this.fifoReset = function reset() {
        this.offset = this.items.length;
    }

    // 
    //   ==>   [1,2,3,4]  ==>
    // 
    this.fifo = {
        enqueue: (item) => { if (!!this.size()) { this.offsetCounter("+"); } return this.pushFront(item) },
        dequeue: () => this.pop("-"),

        add: (item) => { if (!!this.size()) { this.offsetCounter("+"); } return this.pushFront(item) },
        push: (item) => { if (!!this.size()) { this.offsetCounter("+"); } return this.pushFront(item) },
        insert: (item) => { if (!!this.size()) { this.offsetCounter("+"); } return this.pushFront(item) },

        shift: () => this.pop("-"),
        remove: () => this.pop("-"),

        clear: () => this.clear(),
        isEmpty: () => this.isEmpty(),
        reset: () => this.fifoReset(),
        peek: () => this.peek(),
        size: () => this.fifoSize("fifo"),
        toArray: () => this.fifoToArray(),
        getFront: () => this.getFront(),
        getRear: () => this.getRear()
    };

    // 
    //    ==>  [1,2,3,4]
    //    <==        
    // 
    this.lifo = {
        enqueue: (item) => this.pushFront(item),
        dequeue: () => this.shift("+"),

        add: (item) => this.pushFront(item),
        push: (item) => this.pushFront(item),
        insert: (item) => this.pushFront(item),

        pop: () => this.shift("+"),
        remove: () => this.shift("+"),

        clear: () => this.clear(),
        isEmpty: () => this.isEmpty(),
        reset: () => this.reset(),
        peek: () => this.peek(),
        size: () => this.size("fifo"),
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
function QueueTopLifo(method = "lifo") {

    Base.call(this);
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

    // 
    //    ==>  [1,2,3,4]
    //    <==        
    // 
    this.lifo = {

        enqueue: (item) => this.pushFront(item),
        dequeue: () => this.shift("+"),

        add: (item) => this.pushFront(item),
        insert: (item) => this.pushFront(item),
        push: (item) => this.pushFront(item),

        pop: () => this.shift("+"),
        remove: () => this.shift("+"),

        clear: () => this.clear(),
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
function QueueTopFifo(method = "fifo") {

    Base.call(this);
    this.method = method;

    this.fifoSize = function size() {
        return (this.offset === 0) ? this.items.length : this.offset + 1;
    }

    this.fifoToArray = function toArray() {
        return [...this.items];
    }

    this.fifoReset = function reset() {
        this.offset = this.items.length;
    }

    // 
    //   ==>   [1,2,3,4]  ==>
    // 
    this.fifo = {
        enqueue: (item) => { if (!!this.size()) { this.offsetCounter("+"); } return this.pushFront(item) },
        dequeue: () => this.pop("-"),

        add: (item) => { if (!!this.size()) { this.offsetCounter("+"); } return this.pushFront(item) },
        push: (item) => { if (!!this.size()) { this.offsetCounter("+"); } return this.pushFront(item) },
        insert: (item) => { if (!!this.size()) { this.offsetCounter("+"); } return this.pushFront(item) },

        shift: () => this.pop("-"),
        remove: () => this.pop("-"),

        clear: () => this.clear(),
        isEmpty: () => this.isEmpty(),
        reset: () => this.fifoReset(),
        peek: () => this.peek(),
        size: () => this.fifoSize("fifo"),
        toArray: () => this.fifoToArray(),
        getFront: () => this.getFront(),
        getRear: () => this.getRear()
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
        enqueue: (item) => this.pushFront(item, ""),
        dequeue: () => this.shift(""),

        add: (item) => this.pushFront(item, ""),
        insert: (item) => this.pushFront(item, ""),
        push: (item) => this.pushFront(item, ""),

        shift: () => this.shift(""),
        remove: () => this.shift(""),

        clear: () => this.clear(),
        isEmpty: () => this.isEmpty(),
        peek: () => this.peek(),
        size: () => this.size(),
        toArray: () => this.toArray(),
        getFront: () => this.getFront(),
        getRear: () => this.getRear()
    };

    // 
    //    ==>  [1,2,3,4]
    //    <==        
    // 
    this.lifo = {
        enqueue: (item) => this.pushFront(item, ""),
        dequeue: () => this.pop(""),

        add: (item) => this.pushFront(item, ""),
        push: (item) => this.pushFront(item, ""),
        insert: (item) => this.pushFront(item, ""),

        pop: () => this.pop(""),
        remove: () => this.pop(""),

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
function QueueTopLowFootprintFifo() {
    BaseLowFootprint.call(this);

    // this.enqueue = function enqueue(item) { }
    // this.dequeue = function dequeue() { }

    // 
    //   ==>   [1,2,3,4]  ==>
    // 
    this.fifo = {
        enqueue: (item) => this.pushFront(item, ""),
        dequeue: () => this.shift(""),

        add: (item) => this.pushFront(item, ""),
        insert: (item) => this.pushFront(item, ""),
        push: (item) => this.pushFront(item, ""),

        shift: () => this.shift(""),
        remove: () => this.shift(""),

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
function QueueTopLowFootprintLifo() {

    BaseLowFootprint.call(this);

    // 
    //    ==>  [1,2,3,4]
    //    <==        
    // 
    this.lifo = {
        enqueue: (item) => this.pushFront(item, ""),
        dequeue: () => this.pop(""),

        add: (item) => this.pushFront(item, ""),
        push: (item) => this.pushFront(item, ""),
        insert: (item) => this.pushFront(item, ""),

        pop: () => this.pop(""),
        remove: () => this.pop(""),

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
