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
 * type = "end" /\* front | end | de /*\/ 
 * method = "fifo" /\* fifo | lifo /*\/
 */
function DoubleEnded(type, method) {

    this.type = type || "end";
    this.method = method || "fifo";
    this.endOffset = 0;

    Base.call(this, [this.type, this.method]);

    this.superBase = this;

    this.insertFront = function insertFront(item) {
        this.items = [...this.items.splice(0, this.offset), item, ...this.items];
        this.endOffset = this.endOffset + 1;
        return item;
    }

    this.insertLast = function insertLast(item) {
        this.items = [...this.items.splice(0, this.endOffset), item, ...this.items];
        this.offset = this.offset - 1;
        return item;
    }

    this.deleteFront = function deleteFront(index = 0, counter = "") {
        if (this.items.length === 0) return undefined;
        let item = this.items[index];
        this.endOffset = this.endOffset - 1;
        return item;
    }

    this.deleteLast = function deleteLast(index = this.endOffset, counter = "") {
        if (this.items.length === 0) return undefined;
        let item = this.items[index - 1];
        this.offset = this.offset + 1;
        return item;
    }

    this.size = function size() {
        return Math.abs(this.endOffset - this.offset);
    }

    this.shift = this.deleteFront;
    this.pop = this.deleteLast;

    this.push = this.insertLast;
    this.pushFront = this.insertFront;

    // 
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
        insertFront: (item) => this.insertFront(item, "+"),
        insertLast: (item) => this.insertLast(item, ""),
        deleteFront: () => this.deleteFront(),
        deleteLast: () => this.deleteLast(),
        getFront: () => this.getFront(),
        getRear: () => this.getRear(),

        clear: () => this.clear(),
        reset: () => this.reset(),
        isEmpty: () => this.isEmpty(),
        peekFront: () => this.getFront(),
        peekRear: () => this.getRear(),
        size: () => this.size(),
        toArray: () => this.toArray(),
        getOffset: () => this.getOffset(),
        getEndOffset: () => this.getEndOffset()
    }

    return this.double;
}


/**
 *
 *
 */
function DoubleEndedLowFootprint(type = "end" /* front | end | de */, method = "fifo" /* fifo | lifo */) {

    BaseLowFootprint.call(this, [type, method]);

    this.superBase = this;

    this.type = type;
    this.method = method;

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
        insertFront: (item) => this.insertFront(item),
        insertLast: (item) => this.insertLast(item),
        deleteFront: () => this.deleteFront(),
        deleteLast: () => this.deleteLast(),
        getFront: () => this.getFront(),
        getRear: () => this.getRear(),
        isEmpty: () => this.isEmpty(),

        clear: () => this.clear(),
        reset: () => this.reset(),
        peekFront: () => this.getFront(),
        peekRear: () => this.getRear(),
        size: () => this.size(),
        toArray: () => this.toArray()
    }

    return this.double;
}


/**
 *
 *
 */
function AsyncDoubleEnded(type = "end" /* front | end | de */, method = "fifo" /* fifo | lifo */) {
    AsyncBase.call(this);

    this.superBase = this;
    this.type = type;
    this.method = method;

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
        getFront: this.getFront,
        getRear: this.getRear,

        clear: () => this.clear(),
        reset: () => this.reset(),
        isEmpty: () => this.isEmpty(),
        peek: () => this.peek(),
        size: () => this.size(),
        toArray: () => this.toArray()
    }

    return this.double;
}


/**
 *
 *
 */
function AsyncDoubleEndedLowFootprint(type = "end" /* front | end | de */, method = "fifo" /* fifo | lifo */) {
    AsyncBaseLowFootPrint.call(this);

    this.superBase = this;
    this.type = type;
    this.method = method;


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
        getFront: this.getFront,
        getRear: this.getRear,

        clear: () => this.clear(),
        reset: () => this.reset(),
        isEmpty: () => this.isEmpty(),
        peek: () => this.peek(),
        size: () => this.size(),
        toArray: () => this.toArray()
    }

    return this.double;
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
