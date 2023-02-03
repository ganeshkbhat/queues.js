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
function QueueTop(type = "front", method = "fifo") {

    this.type = type;
    this.method = method;

    Base.call(this, type = this.type, method = this.method);

    this.superBase = this;
    
    this.lifosize = function size() {
        return this.items.length - this.offset;
    }

    this.lifotoArray = function toArray() {
        return [...this.items];
    }

    this.liforeset = function reset() {
        this.offset = 0;
    }

    this.fifoSize = function size() {
        return (!!this.offset) ? this.offset : this.items.length;
    }

    this.fifoToArray = function toArray() {
        return [...this.items];
    }

    this.fifoReset = function reset() {
        this.offset = this.items.length - 1;
    }

    // 
    //   ==>   [4,3,2,1]  ==>
    // 
    this.fifo = {
        enqueue: (item) => { if (!!this.size()) { this.offsetCounter("+"); } return this.pushFront(item) },
        dequeue: () => this.pop("-", this.offset - 1),

        add: (item) => { if (!!this.size()) { this.offsetCounter("+"); } return this.pushFront(item) },
        push: (item) => { if (!!this.size()) { this.offsetCounter("+"); } return this.pushFront(item) },
        insert: (item) => { if (!!this.size()) { this.offsetCounter("+"); } return this.pushFront(item) },

        shift: () => this.pop("-", this.offset - 1),
        remove: () => this.pop("-", this.offset - 1),

        clear: () => this.clear(),
        isEmpty: () => this.isEmpty(),
        reset: () => this.fifoReset(),
        peek: () => this.peek(),
        size: () => this.fifoSize(),
        toArray: () => this.fifoToArray(),
        getFront: () => this.getFront(),
        getRear: () => this.getRear(),
        offset: () => this.getOffset()
    };

    // 
    //    ==>  [4,3,2,1]
    //    <==        
    // 
    this.lifo = {
        enqueue: (item) => this.pushFront(item),
        dequeue: () => this.shift("+", this.offset),

        add: (item) => this.pushFront(item),
        insert: (item) => this.pushFront(item),
        push: (item) => this.pushFront(item),

        pop: () => this.shift("+", this.offset),
        remove: () => this.shift("+", this.offset),

        clear: () => this.clear(),
        isEmpty: () => this.isEmpty(),
        peek: () => this.peek(),
        size: () => this.lifosize(),
        reset: () => this.liforeset(),
        toArray: () => this.lifotoArray(),
        getFront: () => this.getFront(),
        getRear: () => this.getRear(),
        offset: () => this.getOffset()
    }

    return { lifo: this.lifo, fifo: this.fifo };
}


/**
 *
 *
 */
function QueueTopLifo(type = "front", method = "lifo") {

    this.type = type;
    this.method = method;
    
    Base.call(this, type = this.type, method = this.method);

    this.superBase = this;

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
    //    ==>  [4,3,2,1]
    //    <==        
    // 
    this.lifo = {
        enqueue: (item) => this.pushFront(item),
        dequeue: () => this.shift("+", this.offset),

        add: (item) => this.pushFront(item),
        insert: (item) => this.pushFront(item),
        push: (item) => this.pushFront(item),

        pop: () => this.shift("+", this.offset),
        remove: () => this.shift("+", this.offset),

        clear: () => this.clear(),
        isEmpty: () => this.isEmpty(),
        peek: () => this.peek(),
        size: () => this.size(),
        toArray: () => this.toArray(),
        getFront: () => this.getFront(),
        getRear: () => this.getRear(),
        offset: () => this.getOffset()
    }

    return this.lifo;
}


/**
 *
 *
 */
function QueueTopFifo(type = "front", method = "fifo") {

    this.type = type;
    this.method = method;
    
    Base.call(this, type = this.type, method = this.method);

    this.superBase = this;

    this.fifoSize = function size() {
        return (!!this.offset) ? this.offset : this.items.length;
    }

    this.fifoToArray = function toArray() {
        return [...this.items];
    }

    this.fifoReset = function reset() {
        this.offset = this.items.length - 1;
    }

    // 
    //   ==>   [4,3,2,1]  ==>
    // 
    this.fifo = {
        enqueue: (item) => { if (!!this.size()) { this.offsetCounter("+"); } return this.pushFront(item) },
        dequeue: () => this.pop("-", this.offset - 1),

        add: (item) => { if (!!this.size()) { this.offsetCounter("+"); } return this.pushFront(item) },
        push: (item) => { if (!!this.size()) { this.offsetCounter("+"); } return this.pushFront(item) },
        insert: (item) => { if (!!this.size()) { this.offsetCounter("+"); } return this.pushFront(item) },

        shift: () => this.pop("-", this.offset - 1),
        remove: () => this.pop("-", this.offset - 1),

        clear: () => this.clear(),
        isEmpty: () => this.isEmpty(),
        reset: () => this.fifoReset(),
        peek: () => this.peek(),
        size: () => this.fifoSize(),
        toArray: () => this.fifoToArray(),
        getFront: () => this.getFront(),
        getRear: () => this.getRear(),
        offset: () => this.getOffset()
    };

    return this.fifo;
}


/**
 *
 *
 */
function QueueTopLowFootprint(type = "front", method = "fifo") {
    
    this.type = type;
    this.method = method;

    BaseLowFootprint.call(this, type = this.type, method = this.method);

    this.superBase = this;

    this.reset = function reset() {
        this.items = [];
    }

    // 
    //   ==>   [4,3,2,1]  ==>
    // 
    this.fifo = {
        enqueue: (item) => this.pushFront(item, ""),
        dequeue: () => this.pop(""),

        add: (item) => this.pushFront(item, ""),
        insert: (item) => this.pushFront(item, ""),
        push: (item) => this.pushFront(item, ""),

        shift: () => this.pop(""),
        remove: () => this.pop(""),

        clear: () => this.clear(),
        isEmpty: () => this.isEmpty(),
        peek: () => this.peek(),
        size: () => this.size(),
        toArray: () => this.toArray(),
        getFront: () => this.getFront(),
        getRear: () => this.getRear(),
        reset: () => this.reset()
    };

    // 
    //    ==>  [4,3,2,1]
    //    <==        
    // 
    this.lifo = {
        enqueue: (item) => this.pushFront(item, ""),
        dequeue: () => this.shift(""),

        add: (item) => this.pushFront(item, ""),
        push: (item) => this.pushFront(item, ""),
        insert: (item) => this.pushFront(item, ""),

        pop: () => this.shift(""),
        remove: () => this.shift(""),

        clear: () => this.clear(),
        isEmpty: () => this.isEmpty(),
        peek: () => this.peek(),
        size: () => this.size(),
        toArray: () => this.toArray(),
        getFront: () => this.getFront(),
        getRear: () => this.getRear(),
        reset: () => this.reset()
    }

    return { lifo: this.lifo, fifo: this.fifo };
}


/**
 *
 *
 */
function QueueTopLowFootprintFifo(type = "front", method = "fifo") {
    
    this.type = type;
    this.method = method;

    BaseLowFootprint.call(this, type = this.type, method = this.method);

    this.superBase = this;

    this.reset = function reset() {
        this.items = [];
    }

    // 
    //   ==>   [4,3,2,1]  ==>
    // 
    this.fifo = {
        enqueue: (item) => this.pushFront(item, ""),
        dequeue: () => this.pop(""),

        add: (item) => this.pushFront(item, ""),
        insert: (item) => this.pushFront(item, ""),
        push: (item) => this.pushFront(item, ""),

        shift: () => this.pop(""),
        remove: () => this.pop(""),

        clear: () => this.clear(),
        isEmpty: () => this.isEmpty(),
        peek: () => this.peek(),
        size: () => this.size(),
        toArray: () => this.toArray(),
        getFront: () => this.getFront(),
        getRear: () => this.getRear(),
        reset: () => this.reset()
    };

    return this.fifo;
}


/**
 *
 *
 */
function QueueTopLowFootprintLifo(type = "front", method = "lifo") {

    this.type = type;
    this.method = method;

    BaseLowFootprint.call(this, type = this.type, method = this.method);

    this.superBase = this;

    this.reset = function reset() {
        this.items = [];
    }

    // 
    //    ==>  [4,3,2,1]
    //    <==        
    // 
    this.lifo = {
        enqueue: (item) => this.pushFront(item, ""),
        dequeue: () => this.shift(""),

        add: (item) => this.pushFront(item, ""),
        push: (item) => this.pushFront(item, ""),
        insert: (item) => this.pushFront(item, ""),

        pop: () => this.shift(""),
        remove: () => this.shift(""),

        clear: () => this.clear(),
        isEmpty: () => this.isEmpty(),
        peek: () => this.peek(),
        size: () => this.size(),
        toArray: () => this.toArray(),
        getFront: () => this.getFront(),
        getRear: () => this.getRear(),
        reset: () => this.reset()
    }

    return this.lifo;
}


/**
 *
 *
 */
function AsyncQueueTop(type, method) {
    AsyncBase.call(this, type = this.type, method = this.method);
}


/**
 *
 *
 */
function AsyncQueueTopLowFootprint(type, method) {
    AsyncBaseLowFootPrint.call(this, type = this.type, method = this.method);
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
