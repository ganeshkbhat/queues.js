/**
 * 
 * Package: queues.js
 * Author: Ganesh B
 * Description: npm module for start ended lifo/ fifo, normal js ended lifo/ fifo, double ended queue and semaphore queue implementation
 * Install: npm i queues.js --save
 * Github: https://github.com/ganeshkbhat/queues.js
 * npmjs Link: https://www.npmjs.com/package/queues.js
 * File: src/priority.js
 * File Description: queues.js 
 * https://www.programiz.com/dsa/priority-queue
 * 
*/

/* eslint no-console: 0 */

'use strict';


const { Base, BaseLowFootprint, AsyncBase, AsyncBaseLowFootPrint } = require("./base.js");


/**
 *
 *
 */
function Priority(size = 100) {

    Base.call(this, size = size);
    this.superBase = this;

    this.queueSize = size;

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

    this.getPriorityItemIndex = function getPriorityItemIndex(item, type = "end", counter = "") {
        if (type === "end") {
            let tmp = this.items.find((i) => { return item.priority === i.priority });
            if (!tmp.length) {
                tmp = this.items.find((i) => { return item.priority > i.priority });
                return this.items.indexOf(tmp[0]);
            }
            return this.items.indexOf(tmp[tmp.length - 1]);
        } else if (type === "front") {
            tmp = this.items.find((i) => { return item.priority === i.priority });
            if (!tmp.length) {
                tmp = this.items.find((i) => { return item.priority < i.priority });
                return this.items.indexOf(tmp[tmp.length - 1]);
            }
            return this.items.indexOf(tmp[0]);
        }
    }

    this.insertAtIndex = function insertAtIndex(item, index = null, type = "end", counter = "+") {
        if (!index) {
            index = this.getPriorityItemIndex(item, type, counter);
        }
        this.items = [...this.items.splice(0, (index - 1)), item, ...this.items.splice(0, this.items.length - 1)];
        this.offsetCounter(counter);
        return item;
    }


}

Priority.prototype = Object.create(Base.prototype);
Priority.prototype.constructor = Priority;


/**
 *
 *
 */
function PriorityLowFootprint(size = 100) {

    BaseLowFootprint.call(this, size = size);
    this.superBase = this;

    this.queueSize = size;

    this.getPriorityItemIndex = function getPriorityItemIndex(item, type = "end", counter = "") {
        if (type === "end") {
            let tmp = this.items.find((i) => { return item.priority === i.priority });
            if (!tmp.length) {
                tmp = this.items.find((i) => { return item.priority > i.priority });
                return this.items.indexOf(tmp[0]);
            }
            return this.items.indexOf(tmp[tmp.length - 1]);
        } else if (type === "front") {
            tmp = this.items.find((i) => { return item.priority === i.priority });
            if (!tmp.length) {
                this.items.find((i) => { return item.priority < i.priority });
                return this.items.indexOf(tmp[tmp.length - 1]);
            }
            return this.items.indexOf(tmp[0]);
        }
    }

    this.insertAtIndex = function insertAtIndex(item, index = undefined, type = "end", counter = "") {
        if (!index) {
            index = this.getPriorityItemIndex(item, type, counter);
        }
        this.items = [...this.items.splice(0, (index - 1)), item, ...this.items.splice(0, this.items.length - 1)];
        return item;
    }
}

PriorityLowFootprint.prototype = Object.create(BaseLowFootprint.prototype);
PriorityLowFootprint.prototype.constructor = PriorityLowFootprint;


/**
 *
 *
 */
function AsyncPriority(size = 100) {
    AsyncBase.call(this, size = size);
    this.superBase = this;

    this.queueSize = size;

}

AsyncPriority.prototype = Object.create(AsyncBase.prototype);
AsyncPriority.prototype.constructor = AsyncPriority;


/**
 *
 *
 */
function AsyncPriorityLowFootprint(size = 100) {
    AsyncBaseLowFootPrint.call(this, size = size);
    this.superBase = this;

    this.queueSize = size;

}

AsyncPriorityLowFootprint.prototype = Object.create(AsyncBaseLowFootPrint.prototype);
AsyncPriorityLowFootprint.prototype.constructor = AsyncPriorityLowFootprint;

module.exports.Priority = Priority;
module.exports.PriorityLowFootprint = PriorityLowFootprint;
module.exports.AsyncPriority = AsyncPriority;
module.exports.AsyncPriorityLowFootprint = AsyncPriorityLowFootprint;

module.exports.default = { Priority, PriorityLowFootprint, AsyncPriority, AsyncPriorityLowFootprint }

