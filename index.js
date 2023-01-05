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

const { Queue, QueueLowFootprint, QueueLifo, QueueFifo, QueueLowFootprintLifo, QueueLowFootprintFifo, AsyncQueue, AsyncQueueLowFootprint } = require("./src/queue.bottom.js");
const { QueueTop, QueueTopLowFootprint, QueueTopLifo, QueueTopFifo, QueueTopLowFootprintLifo, QueueTopLowFootprintFifo, AsyncQueueTop, AsyncQueueTopLowFootprint } = require("./src/queue.top.js");
const { Stack, StackLowFootprint, AsyncStack, AsyncStackLowFootprint } = require("./src/stack.js");
const { Priority, PriorityLowFootprint, AsyncPriority, AsyncPriorityLowFootprint } = require("./src/priority.js");
const { Circular, AsyncCircular } = require("./src/circular.js");
const { DoubleEnded, DoubleEndedLowFootprint, AsyncDoubleEnded, AsyncDoubleEndedLowFootprint } = require("./src/double.js");
const { Semaphore } = require("./src/semaphore.js");


module.exports.Base = Base;
module.exports.BaseLowFootprint = BaseLowFootprint;
module.exports.AsyncBase = AsyncBase;
module.exports.AsyncBaseLowFootPrint = AsyncBaseLowFootPrint;

module.exports.Queue = Queue;
module.exports.QueueLowFootprint = QueueLowFootprint;

module.exports.QueueLifo = QueueLifo;
module.exports.QueueFifo = QueueFifo;
module.exports.QueueLowFootprintLifo = QueueLowFootprintLifo;
module.exports.QueueLowFootprintFifo = QueueLowFootprintFifo;

module.exports.AsyncQueue = AsyncQueue;
module.exports.AsyncQueueLowFootprint = AsyncQueueLowFootprint;


module.exports.QueueTop = QueueTop;
module.exports.QueueTopLowFootprint = QueueTopLowFootprint;

module.exports.QueueTopLifo = QueueTopLifo;
module.exports.QueueTopFifo = QueueTopFifo;
module.exports.QueueTopLowFootprintLifo = QueueTopLowFootprintLifo;
module.exports.QueueTopLowFootprintFifo = QueueTopLowFootprintFifo;

module.exports.AsyncQueueTop = AsyncQueueTop;
module.exports.AsyncQueueTopLowFootprint = AsyncQueueTopLowFootprint;


module.exports.Stack = Stack;
module.exports.StackLowFootprint = StackLowFootprint;
module.exports.AsyncStack = AsyncStack;
module.exports.AsyncStackLowFootprint = AsyncStackLowFootprint;

module.exports.DoubleEnded = DoubleEnded;
module.exports.DoubleEndedLowFootprint = DoubleEndedLowFootprint;
module.exports.AsyncDoubleEnded = AsyncDoubleEnded;
module.exports.AsyncDoubleEndedLowFootprint = AsyncDoubleEndedLowFootprint;

module.exports.Priority = Priority;
module.exports.PriorityLowFootprint = PriorityLowFootprint;
module.exports.AsyncPriority = AsyncPriority;
module.exports.AsyncPriorityLowFootprint = AsyncPriorityLowFootprint;

module.exports.Circular = Circular;
module.exports.AsyncCircular = AsyncCircular;

module.exports.default = {
    Base, BaseLowFootprint, AsyncBase, AsyncBaseLowFootPrint,
    Queue, QueueLowFootprint, QueueLifo, QueueFifo, QueueLowFootprintLifo, QueueLowFootprintFifo, 
    AsyncQueue, AsyncQueueLowFootprint,
    QueueTop, QueueTopLowFootprint, QueueTopLifo, QueueTopFifo, QueueTopLowFootprintLifo, QueueTopLowFootprintFifo, 
    AsyncQueueTop, AsyncQueueTopLowFootprint,
    Stack, StackLowFootprint, AsyncStack, AsyncStackLowFootprint,
    DoubleEnded, DoubleEndedLowFootprint, AsyncDoubleEnded, AsyncDoubleEndedLowFootprint,
    Priority, PriorityLowFootprint, AsyncPriority, AsyncPriorityLowFootprint,
    Circular, AsyncCircular, Semaphore
};
