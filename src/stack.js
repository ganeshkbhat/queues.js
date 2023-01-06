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
 * Stack LIFO / FIFO Implementation
 *
 */
function Stack() {

    Base.call(this);

    this.superBase = this;

    //   ==>   [1,2,3,4]  ==>
    this.fifo = {
        add: this.pushFront,
        push: this.pushFront,
        insert: this.pushFront,

        remove: this.pop,
        pop: this.pop
    };

    //   ==> [1,2,3,4]
    //   <==
    this.lifo = {
        add: this.pushFront,
        push: this.pushFront,
        insert: this.pushFront,

        remove: this.shift,
        shift: this.shift
    }

}


/**
 * Stack FIFO Implementation
 *
 */
function StackFifo() {

    Base.call(this);

    this.superBase = this;

    //   ==>   [1,2,3,4]  ==>
    this.fifo = {
        add: this.pushFront,
        push: this.pushFront,
        insert: this.pushFront,

        remove: this.pop,
        pop: this.pop
    };


}


/**
 * Stack LIFO Implementation
 *
 */
function StackLifo() {

    Base.call(this);

    this.superBase = this;

    //   ==> [1,2,3,4]
    //   <==
    this.lifo = {
        add: this.pushFront,
        push: this.pushFront,
        insert: this.pushFront,

        remove: this.shift,
        shift: this.shift
    }

}

/** 
 * Stack LowFootprint LIFO / FIFO Implementation
 *
 */
function StackLowFootprint() {

    BaseLowFootprint.call(this);

    this.superBase = this;

    //   ==>   [1,2,3,4]  ==>
    this.fifo = {
        add: this.pushFront,
        push: this.pushFront,
        insert: this.pushFront,

        remove: this.pop,
        pop: this.pop
    }

    //   ==> [1,2,3,4]
    //   <==
    this.lifo = {
        add: this.pushFront,
        push: this.pushFront,
        insert: this.pushFront,

        remove: this.shift,
        shift: this.shift
    }
}


/**
 * Stack LowFootprint FIFO Implementation
 *
 */
function StackLowFootprintFifo() {

    BaseLowFootprint.call(this);

    this.superBase = this;

    //   ==>   [1,2,3,4]  ==>
    this.fifo = {
        add: this.pushFront,
        push: this.pushFront,
        insert: this.pushFront,

        remove: this.pop,
        pop: this.pop
    }

    return this.fifo;
}

/**
 * Stack LowFootprint LIFO Implementation
 *
 */
function StackLowFootprintLifo() {

    BaseLowFootprint.call(this);

    this.superBase = this;

    //   ==> [1,2,3,4]
    //   <==
    this.lifo = {
        add: this.pushFront,
        push: this.pushFront,
        insert: this.pushFront,

        remove: this.shift,
        shift: this.shift
    }

    return this.lifo;
}

/**
 * AsyncStack LIFO / FIFO Implementation
 *
 */
function AsyncStack() {

    AsyncBase.call(this);

    this.superBase = this;
}

/**
 * AsyncStack LowFootprint LIFO / FIFO Implementation
 *
 */
function AsyncStackLowFootprint() {

    AsyncBaseLowFootPrint.call(this);

    this.superBase = this;
}


Stack.prototype = Object.create(Base.prototype);
Stack.prototype.constructor = Stack;

StackFifo.prototype = Object.create(Base.prototype);
StackFifo.prototype.constructor = StackFifo;

StackLifo.prototype = Object.create(Base.prototype);
StackLifo.prototype.constructor = StackLifo;

StackLowFootprint.prototype = Object.create(BaseLowFootprint.prototype);
StackLowFootprint.prototype.constructor = StackLowFootprint;

StackLowFootprintFifo.prototype = Object.create(BaseLowFootprint.prototype);
StackLowFootprintFifo.prototype.constructor = StackLowFootprintFifo;

StackLowFootprintLifo.prototype = Object.create(BaseLowFootprint.prototype);
StackLowFootprintLifo.prototype.constructor = StackLowFootprintLifo;

AsyncStack.prototype = Object.create(AsyncBase.prototype);
AsyncStack.prototype.constructor = AsyncStack;

AsyncStackLowFootprint.prototype = Object.create(AsyncBaseLowFootPrint.prototype);
AsyncStackLowFootprint.prototype.constructor = AsyncStackLowFootprint;


module.exports.Stack = Stack;
module.exports.StackFifo = StackFifo;
module.exports.StackLifo = StackLifo;

module.exports.StackLowFootprint = StackLowFootprint;
module.exports.StackLowFootprintFifo = StackLowFootprintFifo;
module.exports.StackLowFootprintLifo = StackLowFootprintLifo;

module.exports.AsyncStack = AsyncStack;
module.exports.AsyncStackLowFootprint = AsyncStackLowFootprint;


module.exports.default = { Stack, StackFifo, StackLifo, StackLowFootprint, StackLowFootprintFifo, StackLowFootprintLifo, AsyncStack, AsyncStackLowFootprint }
