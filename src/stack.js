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

const { Base, BaseLowFootprint, AsyncBase, AsyncBaseLowFootPrint } = require("./base");

function Stack() {
    Base.call(this);
}

function StackLowFootprint() {
    BaseLowFootprint.call(this);

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

function AsyncStack() {
    AsyncBase.call(this);
}

function AsyncStackLowFootprint() {
    AsyncBaseLowFootPrint.call(this);
}

Stack.prototype = Object.create(Base.prototype);
Stack.prototype.constructor = Stack;

StackLowFootprint.prototype = Object.create(BaseLowFootprint.prototype);
StackLowFootprint.prototype.constructor = StackLowFootprint;

AsyncStack.prototype = Object.create(AsyncBase.prototype);
AsyncStack.prototype.constructor = AsyncStack;

AsyncStackLowFootprint.prototype = Object.create(AsyncBaseLowFootPrint.prototype);
AsyncStackLowFootprint.prototype.constructor = AsyncStackLowFootprint;

module.exports.Stack = Stack;
module.exports.StackLowFootprint = StackLowFootprint;
module.exports.AsyncStack = AsyncStack;
module.exports.AsyncStackLowFootprint = AsyncStackLowFootprint;

module.exports.default = { Stack, StackLowFootprint, AsyncStack, AsyncStackLowFootprint }
