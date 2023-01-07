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

import { default as queues } from "./index.js";

import {
    Base, BaseLowFootprint, AsyncBase, AsyncBaseLowFootPrint,
    Queue, QueueLowFootprint, QueueLifo, QueueFifo, QueueLowFootprintLifo, QueueLowFootprintFifo,
    AsyncQueue, AsyncQueueLowFootprint,
    QueueTop, QueueTopLowFootprint, QueueTopLifo, QueueTopFifo, QueueTopLowFootprintLifo, QueueTopLowFootprintFifo,
    AsyncQueueTop, AsyncQueueTopLowFootprint,
    Stack, StackFifo, StackLifo, StackLowFootprint, StackLowFootprintFifo, StackLowFootprintLifo,
    AsyncStack, AsyncStackLowFootprint,
    DoubleEnded, DoubleEndedLowFootprint, AsyncDoubleEnded, AsyncDoubleEndedLowFootprint,
    Priority, PriorityLowFootprint, AsyncPriority, AsyncPriorityLowFootprint,
    Circular, AsyncCircular, Semaphore, WaitQueue
} from "./index.js";

export default queues;

export {
    Base, BaseLowFootprint, AsyncBase, AsyncBaseLowFootPrint,
    Queue, QueueLowFootprint, QueueLifo, QueueFifo, QueueLowFootprintLifo, QueueLowFootprintFifo,
    AsyncQueue, AsyncQueueLowFootprint,
    QueueTop, QueueTopLowFootprint, QueueTopLifo, QueueTopFifo, QueueTopLowFootprintLifo, QueueTopLowFootprintFifo,
    AsyncQueueTop, AsyncQueueTopLowFootprint,
    Stack, StackFifo, StackLifo, StackLowFootprint, StackLowFootprintFifo, StackLowFootprintLifo,
    AsyncStack, AsyncStackLowFootprint,
    DoubleEnded, DoubleEndedLowFootprint, AsyncDoubleEnded, AsyncDoubleEndedLowFootprint,
    Priority, PriorityLowFootprint, AsyncPriority, AsyncPriorityLowFootprint,
    Circular, AsyncCircular, Semaphore, WaitQueue
};
