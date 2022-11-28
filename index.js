/**
 * 
 * Package: queues.js
 * Author: Ganesh B
 * Description: npm module for start ended lifo/ fifo, normal js ended lifo/ fifo, double ended queue and semaphore queue implementation
 * Install: npm i queues.js --save
 * Github: https://github.com/ganeshkbhat/queues.js
 * npmjs Link: https://www.npmjs.com/package/queues.js
 * File: index.js
 * File Description: queues.js 
 * 
*/

/* eslint no-console: 0 */

'use strict';

// const { Queue, QueueLowFootprint, AsyncQueue } = require("./src/queue.js");
const { Base, BaseLowFootprint, AsyncBase, AsyncBaseLowFootPrint } = require("./src/base.js");
const { Queue, QueueLowFootprint, AsyncQueue, AsyncQueueLowFootprint } = require("./src/queue.js");
const { Stack, StackLowFootprint, AsyncStack, AsyncStackLowFootprint } = require("./src/stack.js");
const { DoubleEnded, DoubleEndedLowFootprint, AsyncDoubleEnded, AsyncDoubleEndedLowFootprint } = require("./src/double.js");
const { Semaphore } = require("./src/semaphore.js");



module.exports.Base = Base;
module.exports.BaseLowFootprint = BaseLowFootprint;
module.exports.AsyncBase = AsyncBase;
module.exports.AsyncBaseLowFootPrint = AsyncBaseLowFootPrint;

module.exports.Queue = Queue;
module.exports.QueueLowFootprint = QueueLowFootprint;
module.exports.AsyncQueue = AsyncQueue;
module.exports.AsyncQueueLowFootprint = AsyncQueueLowFootprint;

module.exports.Stack = Stack;
module.exports.StackLowFootprint = StackLowFootprint;
module.exports.AsyncStack = AsyncStack;
module.exports.AsyncStackLowFootprint = AsyncStackLowFootprint;

module.exports.DoubleEnded = DoubleEnded;
module.exports.DoubleEndedLowFootprint = DoubleEndedLowFootprint;
module.exports.AsyncDoubleEnded = AsyncDoubleEnded;
module.exports.AsyncDoubleEndedLowFootprint = AsyncDoubleEndedLowFootprint;

module.exports.default = {
    Base, BaseLowFootprint, AsyncBase, AsyncBaseLowFootPrint,
    Queue, QueueLowFootprint, AsyncQueue, AsyncQueueLowFootprint,
    Stack, StackLowFootprint, AsyncStack, AsyncStackLowFootprint,
    DoubleEnded, DoubleEndedLowFootprint, AsyncDoubleEnded, AsyncDoubleEndedLowFootprint,
    Semaphore
};
