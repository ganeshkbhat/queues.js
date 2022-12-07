/**
 * 
 * Package: queues.js
 * Author: Ganesh B
 * Description: npm module for start ended lifo/ fifo, normal js ended lifo/ fifo, double ended queue and semaphore queue implementation
 * Install: npm i queues.js --save
 * Github: https://github.com/ganeshkbhat/queues.js
 * npmjs Link: https://www.npmjs.com/package/queues.js
 * File: src/double.js
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
function DoubleEnded() {
    Base.call(this);

    this.superBase = this;

    this.double = {
        insertFront: this.insertFront,
        insertLast: this.insertLast,
        deleteFront: this.deleteFront,
        deleteLast: this.deleteLast,
        getFront: this.peek,
        getRear: this.getRear,
        isEmpty: this.isEmpty
    }
}

/**
 *
 *
 */
function DoubleEndedLowFootprint() {
    
    BaseLowFootprint.call(this);

    this.superBase = this;

    // Double Ended Queue
    //
    //   ==>   [1,2,3,4]  ==>
    // 
    //   <==   [1,2,3,4]  <==
    //
    //   <==   [1,2,3,4]
    //   ==>
    // 
    //   [1,2,3,4] <==
    //             ==>
    //
    this.double = {
        insertFront: this.insertFront,
        insertLast: this.insertLast,
        deleteFront: this.deleteFront,
        deleteLast: this.deleteLast,
        getFront: this.peek,
        getRear: this.getRear,
        isEmpty: this.isEmpty
    }
}

/**
 *
 *
 */
function AsyncDoubleEnded() {
    AsyncBase.call(this);

    this.superBase = this;
}

/**
 *
 *
 */
function AsyncDoubleEndedLowFootprint() {
    AsyncBaseLowFootPrint.call(this);

    this.superBase = this;
}

DoubleEnded.prototype = Object.create(Base.prototype);
DoubleEnded.prototype.constructor = DoubleEnded;

DoubleEndedLowFootprint.prototype = Object.create(BaseLowFootprint.prototype);
DoubleEndedLowFootprint.prototype.constructor = DoubleEndedLowFootprint;

AsyncDoubleEnded.prototype = Object.create(AsyncBase.prototype);
AsyncDoubleEnded.prototype.constructor = AsyncDoubleEnded;

AsyncDoubleEndedLowFootprint.prototype = Object.create(AsyncBaseLowFootPrint.prototype);
AsyncDoubleEndedLowFootprint.prototype.constructor = AsyncDoubleEndedLowFootprint;

module.exports.DoubleEnded = DoubleEnded;
module.exports.DoubleEndedLowFootprint = DoubleEndedLowFootprint;
module.exports.AsyncDoubleEnded = AsyncDoubleEnded;
module.exports.AsyncDoubleEndedLowFootprint = AsyncDoubleEndedLowFootprint;

module.exports.default = { DoubleEnded, DoubleEndedLowFootprint, AsyncDoubleEnded, AsyncDoubleEndedLowFootprint }
