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
 * https://stackoverflow.com/questions/24201944/difference-between-semaphore-and-wait-queue
 * 
*/

/* eslint no-console: 0 */

'use strict';

const { Base, BaseLowFootprint, AsyncBase, AsyncBaseLowFootPrint } = require("./base.js");

function WaitQueue() {

    Base.call(this);

    this.superBase = this;

    this.wait_queue = function wait_queue() { }
    
    this.signal = function signal() { }

}

module.exports.WaitQueue = WaitQueue;

module.exports.default = { WaitQueue }
