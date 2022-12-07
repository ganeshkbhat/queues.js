/**
 * 
 * Package: queues.js
 * Author: Ganesh B
 * Description: npm module for start ended lifo/ fifo, normal js ended lifo/ fifo, double ended queue and semaphore queue implementation
 * Install: npm i queues.js --save
 * Github: https://github.com/ganeshkbhat/queues.js
 * npmjs Link: https://www.npmjs.com/package/queues.js
 * File: src/base.js
 * File Description: queues.js 
 * 
 *      https://www.programiz.com/dsa/priority-queue
 * 
*/

/* eslint no-console: 0 */

'use strict';

/**
 *
 *
 */
function Base() {

    // 
    // Use cases - Front and End Queue:
    //
    //                    <--
    //      [1,2,2,4,5,6]
    //  <--
    //
    //                   -->
    //      [6,5,4,2,2,1]
    //  -->
    // 
    //  Use cases: 2, 3
    //

    this.offset = 0;
    this.items = [];

    // 
    // this.offset is used for
    // endLifo
    //   <==   [1,2,3,4]  <==
    //

    //
    // this.dequeue = function dequeue() {
    //     if (this.items.length === 0) {
    //         return undefined;
    //     }
    // 
    //     const item = this.items[this.offset];
    //     this.offset++;
    //     if (this.offset * 2 >= this.items.length) {
    //         this.items = this.items.slice(this.offset);
    //         this.offset = 0;
    //     }
    //     return item;
    // }
    // 

    this.insertAtIndex = function insertAtIndex(item, index, counter = "") {
        this.items = [...this.items.splice(0, (index - 1)), item, ...this.items.splice(0, this.items.length - 1)];
        if (index > this.offset) {
            this.offsetCounter("+");
        }
        return item;
    }

    this.replaceAtIndex = function replaceAtIndex(item, index, counter = "") {
        if (this.items.length === 0) return undefined;
        this.items[index] = item;
        if (index > this.offset) {
            this.offsetCounter("+");
        }
        return item;
    }

    this.removeAtIndex = function removeAtIndex(index = 0, counter = "") {
        if (this.items.length === 0) return undefined;
        let item = this.items.splice(index, 1);
        if (index < this.offset) {
            this.offsetCounter("-");
        }
        return item;
    }

    this.removeItem = function removeItem(item, counter = "") {
        let index = this.items.indexOf(item);
        return this.removeAtIndex(index, counter);
    }

    this.offsetCounter = function offsetCounter(counter = "") {
        if (counter === "+") {
            this.offset = this.offset + 1;
        } else if (counter === "-") {
            this.offset = this.offset - 1;
        } else if (counter === "") {
            this.offset = this.offset;
        }
    }

    this.push = function push(item, counter = "") {
        return this.insertAtIndex(item, (this.items.length - 1), counter);
    }

    this.pushFront = function pushFront(item, counter = "") {
        return this.insertAtIndex(item, 0, counter);
    }

    this.pop = function pop(counter = "-") {
        return this.removeAtIndex((this.items.length - 1), counter);
    }

    this.shift = function shift(counter = "+") {
        return this.removeAtIndex(0, counter);
    }

    this.insertFront = this.pushFront;
    this.insertLast = this.push;

    this.deleteFront = this.shift;
    this.deleteLast = this.pop;

    this.peek = function peek() {
        if (this.items.length === 0) return undefined;
        return this.items[this.offset];
    }

    this.size = function size() {
        return this.items.length - this.offset;
    }
}

/**
 *
 *
 */
function BaseLowFootprint() {

    this.items = [];

    this.insertAtIndex = function insertAtIndex(item, index) {
        this.items = [...this.items.splice(0, (index - 1)), item, ...this.items.splice(0, this.items.length - 1)];
        return item;
    }

    this.replaceAtIndex = function replaceAtIndex(item, index) {
        this.items[index] = item;
        return item;
    }

    this.removeAtIndex = function removeAtIndex(index) {
        return this.items.splice(index, 1);
    }

    this.removeItem = function removeItem(item) {
        return this.items.splice(this.items.indexOf(item), 1);
    }

    this.push = function push(item) {
        this.items.push(item);
        return item;
    }

    this.pushFront = function push(item) {
        this.insertAtIndex(item, 0);
        return item;
    }

    this.pop = function pop() {
        if (this.items.length === 0) return undefined;
        return this.items.pop();
    }

    this.shift = function shift() {
        if (this.items.length === 0) return undefined;
        return this.items.shift();
    }

    this.insertFront = this.pushFront;
    this.insertLast = this.push;

    this.deleteFront = this.shift;
    this.deleteLast = this.pop;

    this.isEmpty = function isEmpty() {
        return this.size() === 0;
    }

    this.clear = function clear() {
        this.items = [];
    }

    this.peek = function peek(index = 0) {
        if (this.items.length === 0) return undefined;
        return this.items[index];
    }

    this.getFront = () => this.peek();

    this.getRear = () => this.peek((this.items.length - 1));

    this.size = function size() {
        return this.items.length;
    }

    this.toArray = function toArray() {
        return this.items.slice(0, (this.items.length - 1));
    }

}

/**
 *
 *
 */
function AsyncBase() {

    Base.call(this);
    this.superClass = this;

    this.awaiters = new Base();

    this.enqueue = function enqueue(item) { }
    this.dequeueOrWait = function dequeueOrWait() { }

}

AsyncBase.prototype = Object.create(Base.prototype);
AsyncBase.prototype.constructor = AsyncBase;

/**
 *
 *
 */
function AsyncBaseLowFootPrint() {

    BaseLowFootprint.call(this);
    this.superClass = this;

    this.awaiters = new BaseLowFootprint();

    this.enqueue = function enqueue(item) { }
    this.dequeueOrWait = function dequeueOrWait() { }

}

AsyncBaseLowFootPrint.prototype = Object.create(BaseLowFootprint.prototype);
AsyncBaseLowFootPrint.prototype.constructor = AsyncBaseLowFootPrint;


module.exports.Base = Base;
module.exports.BaseLowFootprint = BaseLowFootprint;
module.exports.AsyncBase = AsyncBase;
module.exports.AsyncBaseLowFootPrint = AsyncBaseLowFootPrint;


module.exports.default = {
    Base, BaseLowFootprint,
    AsyncBase, AsyncBaseLowFootPrint
};

