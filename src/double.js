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

    this.iFront = function insertFront(item) {
        this.insertItem(item, this.offset, "");
        this.offset = this.offset - 1;
    }

    this.iLast = function insertLast(item) {
        this.insertItem(item, this.endOffset, "");
        this.endOffset = this.endOffset + 1;
    }

    this.push = this.iLast;
    this.pushFront = this.iFront;

    this.shift = (counter = "+") => this.remove(counter, this.offset);
    this.pop = (counter = "-") => this.remove(counter, this.endOffset);

    this.dFront = function deleteFront() {
        this.deleteFront("+");
        this.offset = this.offset + 1;
    }

    this.dLast = function deleteLast() {
        this.deleteLast("-", this.endOffset);
        this.endOffset = this.endOffset - 1;
    }

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
        insertFront: (item) => this.iFront(item, "+"),
        insertLast: (item) => this.iLast(item, ""),
        deleteFront: () => this.dFront("-"),
        deleteLast: () => this.dLast("+"),
        getFront: () => this.getFront(),
        getRear: () => this.getRear(),

        clear: () => this.clear(),
        reset: () => this.reset("fifo"),
        isEmpty: () => this.isEmpty(),
        peek: () => this.peek(),
        size: () => this.size("fifo"),
        toArray: () => this.toArray("fifo")
    }

    return this.double;
}


/**
 *
 *
 */
function DoubleEndedLowFootprint(type = "end" /* front | end | de */, method = "fifo" /* fifo | lifo */) {

    BaseLowFootprint.call(this);

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
        isEmpty: this.isEmpty,


        clear: () => this.clear(),
        reset: () => this.reset("fifo"),
        peek: () => this.peek(),
        size: () => this.size("fifo"),
        toArray: () => this.toArray("fifo")
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
