/**
 * 
 * Package: queues.js
 * Author: Ganesh B
 * Description: npm module for start ended lifo/ fifo, normal js ended lifo/ fifo, double ended queue and semaphore queue implementation
 * Install: npm i queues.js --save
 * Github: https://github.com/ganeshkbhat/queues.js
 * npmjs Link: https://www.npmjs.com/package/queues.js
 * File: src/stack.js
 * File Description: queues.js 
 * 
*/

/* eslint no-console: 0 */

'use strict';

const { Base, BaseLowFootprint, AsyncBase, AsyncBaseLowFootPrint } = require("./base.js");


/**
 * Stack FIFO Implementation
 *
 */
function Stack(method = "fifo") {

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

    return this.fifo;
}


/**
 * Stack FIFO Implementation
 *
 */
function StackLowFootprint(method = "fifo") {
    BaseLowFootprint.call(this);

    this.superBase = this;
    this.method = method;

    // 
    //   ==>   [1,2,3,4]  ==>
    // 
    this.fifo = {
        enqueue: (item) => this.pushFront(item, ""),
        dequeue: () => this.pop(""),

        add: (item) => this.pushFront(item, ""),
        insert: (item) => this.pushFront(item, ""),
        push: (item) => this.pushFront(item, ""),

        pop: () => this.pop(""),
        remove: () => this.pop(""),

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
 * AsyncStack FIFO Implementation
 *
 */
function AsyncStack() {

    AsyncBase.call(this);

    this.superBase = this;

    //   ==>   [1,2,3,4]  ==>
    this.fifo = {
        add: this.pushFront,
        push: this.pushFront,
        insert: this.pushFront,

        remove: this.pop,
        pop: this.pop
    };
    return this.fifo;
}


/**
 * AsyncStack FIFO Implementation
 *
 */
function AsyncStackLowFootprint() {

    AsyncBaseLowFootPrint.call(this);

    this.superBase = this;

    //   ==>   [1,2,3,4]  ==>
    this.fifo = {
        add: this.pushFront,
        push: this.pushFront,
        insert: this.pushFront,

        remove: this.pop,
        pop: this.pop
    };

    return this.fifo;
}


Stack.prototype = Object.create(Base.prototype);
Stack.prototype.constructor = Stack;

StackLowFootprint.prototype = Object.create(StackLowFootprint.prototype);
StackLowFootprint.prototype.constructor = StackLowFootprint;

AsyncStack.prototype = Object.create(AsyncBase.prototype);
AsyncStack.prototype.constructor = AsyncStack;

AsyncStackLowFootprint.prototype = Object.create(AsyncStackLowFootprint.prototype);
AsyncStackLowFootprint.prototype.constructor = AsyncStackLowFootprint;


module.exports.Stack = Stack;
module.exports.StackLowFootprint = StackLowFootprint;

module.exports.AsyncStack = AsyncStack;
module.exports.AsyncStackLowFootprint = AsyncStackLowFootprint;

module.exports.default = { Stack, StackLowFootprint, AsyncStack, AsyncStackLowFootprint }
