/**
 * 
 * Package: queues.js
 * Author: Ganesh B
 * Description: npm module for start ended lifo/ fifo, normal js ended lifo/ fifo, double ended queue and semaphore queue implementation
 * Install: npm i queues.js --save
 * Github: https://github.com/ganeshkbhat/queues.js
 * npmjs Link: https://www.npmjs.com/package/queues.js
 * File: .js
 * File Description: .js 
 * 
*/

/* eslint no-console: 0 */

'use strict';


const {
    Base, BaseLowFootprint, AsyncBase, AsyncBaseLowFootPrint,
    Queue, QueueLowFootprint, AsyncQueue, AsyncQueueLowFootprint,
    Stack, StackLowFootprint, AsyncStack, AsyncStackLowFootprint,
    DoubleEnded, DoubleEndedLowFootprint, AsyncDoubleEnded, AsyncDoubleEndedLowFootprint,
    Semaphore
} = require("../index.js");

console.log(Base, BaseLowFootprint, AsyncBase, AsyncBaseLowFootPrint,
    Queue, QueueLowFootprint, AsyncQueue, AsyncQueueLowFootprint,
    Stack, StackLowFootprint, AsyncStack, AsyncStackLowFootprint,
    DoubleEnded, DoubleEndedLowFootprint, AsyncDoubleEnded, AsyncDoubleEndedLowFootprint,
    Semaphore)
