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
*/

/* eslint no-console: 0 */

'use strict';

function Base() {
    this.items = [];

    // this.offset is used for
    // endLifo
    //   <==   [1,2,3,4]  <==
    this.offset = 0;

    this.enqueue = function enqueue(item) {
        this.items.push(item);
        return item;
    }
    this.push = this.enqueue;

    this.dequeue = function dequeue() {
        if (this.items.length === 0) {
            return undefined;
        }

        const item = this.items[this.offset];
        this.offset++;
        if (this.offset * 2 >= this.items.length) {
            this.items = this.items.slice(this.offset);
            this.offset = 0;
        }
        return item;
    }

    this.peek = function peek() {
        if (this.items.length === 0) return undefined;
        return this.items[this.offset];
    }

    this.size = function size() {
        return this.items.length - this.offset;
    }

}


function BaseLowFootprint() {

    this.items = [];

    this.insertAtIndex = function insertAtIndex(item, index) {
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
        return this.items.pop();
    }

    this.shift = function shift() {
        if (this.items.length === 0) {
            return undefined;
        }
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

    this.getFront = () => this.peek(),
    this.getRear = () => this.peek((this.items.length - 1)),

    this.size = function size() {
        return this.items.length;
    }

    this.toArray = function toArray() {
        return this.items.slice(0, (this.items.length - 1));
    }

}


function AsyncBase() {
    //   Base.call(this);

    //   this.awaiters = new Base();

    //   this.enqueue = function enqueue(item) {
    //     console.log(this.prototype)
    //     const awaiter = this.awaiters.dequeue();
    //     if (awaiter !== undefined) {
    //       setImmediate(() => {
    //         awaiter(item);
    //       });
    //     } else {

    //       this.enqueue(item);
    //     }
    //     return item;
    //   }

    //   this.dequeueOrWait = function dequeueOrWait() {
    //     const item = this.dequeue();
    //     if (!item) {
    //       return new Promise((accept) => {
    //         this.awaiters.enqueue(accept);
    //       });
    //     } else {
    //       return new Promise((accept) => {
    //         accept(item);
    //       });
    //     }
    //   }
}

AsyncBase.prototype = Object.create(Base.prototype);
AsyncBase.prototype.constructor = AsyncBase;


function AsyncBaseLowFootPrint() {
    BaseLowFootprint.call(this);

}

AsyncBaseLowFootPrint.prototype = Object.create(BaseLowFootprint.prototype);
AsyncBaseLowFootPrint.prototype.constructor = AsyncBaseLowFootPrint;


module.exports.Base = Base;
module.exports.BaseLowFootprint = BaseLowFootprint;
module.exports.AsyncBase = AsyncBase;
module.exports.AsyncBaseLowFootPrint = AsyncBaseLowFootPrint;
module.exports.default = { Base, BaseLowFootprint, AsyncBase, AsyncBaseLowFootPrint };

