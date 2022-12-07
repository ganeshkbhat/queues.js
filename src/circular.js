/**
 * 
 * Package: queues.js
 * Author: Ganesh B
 * Description: npm module for start ended lifo/ fifo, normal js ended lifo/ fifo, double ended queue and semaphore queue implementation
 * Install: npm i queues.js --save
 * Github: https://github.com/ganeshkbhat/queues.js
 * npmjs Link: https://www.npmjs.com/package/queues.js
 * File: src/circular.js
 * File Description: circular.js 
 * 
*/

/* eslint no-console: 0 */

'use strict';

const { Base, BaseLowFootprint, AsyncBase, AsyncBaseLowFootPrint } = require("./base.js");

/**
 *
 *
 * @param {number} [queueSize=10]
 */
function Circular(queueSize = 10) {

    Base.call(this);

    this.superBase = this;
    this.queueSize = queueSize;

    this.add = function add(item, logic = "end" /* front || end */, counter = "") {
        if (logic === "front") {
            this.items.pushFront(item, counter);
        } else {
            this.items.push(item, counter);
        }
        this.queueSize = this.queueSize + 1;
        return item;
    }

    this.remove = function remove(index = 0, logic = "end" /* front || end */, counter = "") {
        if (logic === "front") {
            index = this.items.length - 1;
        }
        const item = this.removeAtIndex(index, counter);
        this.queueSize = this.queueSize - 1;
        return item;
    }

    this.pop = function pop(counter = "-") {
        const item = this.superBase.pop(counter);
        this.pushFront(item);
        return item;
    }

    this.shift = function shift(counter = "+") {
        const item = this.superBase.shift(counter);
        this.push(item);
        return item;
    }

}

Circular.prototype = Object.create(Base.prototype);
Circular.prototype.constructor = Circular;

/**
 *
 *
 */
function AsyncCircular(queueSize = 10) {

    Circular.call(this);
    this.superBase = this;

    this.awaiters = new AsyncBase();

    // this.enqueue = function enqueue(item) { }
    // this.dequeueOrWait = function dequeueOrWait() { }

}

AsyncCircular.prototype = Object.create(AsyncBase.prototype);
AsyncCircular.prototype.constructor = AsyncCircular;

module.exports.Circular = Circular;
module.exports.AsyncCircular = AsyncCircular;

module.exports.default = {
    Circular, AsyncCircular
};
