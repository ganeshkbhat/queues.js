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
function Circular(type = "end" /* front | end | de */, method = "fifo" /* fifo | lifo */, size = 100) {
    Base.call(this, type = type, method = method, size = size);
    this.superBase = this;
    
    this.type = type;
    this.method = method;
    this.queueSize = size;

    this.add = function add(item) {
        if (this.items.length >= this.queueSize) throw new Error("[Circular Queue]: QueueSize higher");

        let counter = this.counterCalculator();
        if ((this.type === "front" && this.method === "fifo") && (this.type === "front" && this.method === "lifo")) {
            this.items.pushFront(item, counter);
        } else if ((this.type === "end" && this.method === "lifo") && (this.type === "end" && this.method === "fifo")) {
            this.items.push(item, counter);
        } else if (this.type === "de" && this.method === "end") {
            this.items.push(item, counter);
        } else if (this.type === "de" && this.method === "front") {
            this.items.pushFront(item, counter);
        }
        return item;
    }

    this.pop = function pop(counter = "+") {
        if (!!this.peek()) {
            let tmpCounter = this.counterCalculator();
        }
        const item = this.pop(counter);
        this.pushFront(item);
        return item;
    }

    this.shift = function shift(counter = "-") {
        const item = this.superBase.shift(counter);
        this.push(item);
        return item;
    }

    this.remove = function remove() {
        let item;
        if ((this.type === "front" && this.method === "fifo") && (this.type === "end" && this.method === "lifo")) {
            item = this.pop();
        } else if ((this.type === "front" && this.method === "lifo") && (this.type === "end" && this.method === "fifo")) {
            item = this.shift();
        } else if (this.type === "de" && this.method === "end") {
            item = this.shift();
        } else if (this.type === "de" && this.method === "front") {
            item = this.pop();
        }
        return item;
    }

    

    this.circular = {
        getOffset: () => this.getOffset(),
        clear: () => this.clear(),
        reset: () => this.reset(),
        isEmpty: () => this.isEmpty(),
        peek: () => this.peek(),
        size: () => this.size(),
        toArray: () => this.toArray()
    }

    if (this.type === "front") {
        this.circular = {
            ...this.circular,
            enqueue: (item) => this.add(item),
            add: (item) => this.add(item),
            pushFront: (item) => this.add(item),

            remove: () => this.remove(),
            dequeue: () => this.remove(),
            pop: () => this.remove()
        }
    } else if (this.type === "end") {
        this.circular = {
            ...this.circular,
            enqueue: (item) => this.add(item),
            add: (item) => this.add(item),
            push: (item) => this.add(item),

            remove: () => this.remove(),
            dequeue: () => this.remove(),
            shift: () => this.remove()
        }
    } else if (this.type === "de") {
        this.circular = {
            ...this.circular,
            insertFront: (item) => this.insertFront(item),
            insertLast: (item) => this.insertLast(item),
            deleteFront: () => this.deleteFront(),
            deleteLast: () => this.deleteLast(),
            getFront: () => this.getFront(),
            getRear: () => this.getRear()
        }
    }

    return this.circular;
}

Circular.prototype = Object.create(Base.prototype);
Circular.prototype.constructor = Circular;


/**
 *
 *
 * @param {number} [queueSize=10]
 */
function CircularLowFootprint(type = "end" /* front | end | de */, method = "fifo" /* fifo | lifo */, size = 100) {

    BaseLowFootprint.call(this, type = type, method = method, size = size);
    this.superBase = this;
    
    this.type = type;
    this.method = method;
    this.queueSize = size;

    this.add = function add(item) {
        let counter = "";
        if (this.type === "end" && this.method === "fifo") {
            counter = "+";
        } else if (this.type === "front" && this.method === "fifo") {
            counter = "-";
        } else if (this.type === "end" && this.method === "lifo") {
            counter = "-";
        } else if (this.type === "front" && this.method === "lifo") {
            counter = "+";
        }

        if (this.type === "front") {
            this.items.pushFront(item, counter);
        } else {
            this.items.push(item, counter);
        }
        return item;
    }

    this.remove = function remove() {
        let item;
        if (this.type === "front") {
            item = this.pop();
        } else if (this.type === "end") {
            item = this.shift();
        }
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

    this.circular = {
        clear: () => this.clear(),
        reset: () => this.reset(),
        isEmpty: () => this.isEmpty(),
        peek: () => this.peek(),
        size: () => this.size(),
        toArray: () => this.toArray()
    }

    if (this.type === "front") {
        this.circular = {
            enqueue: this.add,
            add: this.add,
            pushFront: this.add,

            remove: this.remove,
            dequeue: this.remove,
            pop: this.remove,

            ...this.circular
        }
    } else if (this.type === "end") {
        this.circular = {
            enqueue: this.add,
            add: this.add,
            push: this.add,

            remove: this.remove,
            dequeue: this.remove,
            shift: this.remove,

            ...this.circular
        }
    } else if (this.type === "de") {
        this.circular = {
            insertFront: this.insertFront,
            insertLast: this.insertLast,
            deleteFront: this.deleteFront,
            deleteLast: this.deleteLast,
            getFront: this.getFront,
            getRear: this.getRear,

            ...this.circular
        }
    }

    return this.circular;
}

CircularLowFootprint.prototype = Object.create(BaseLowFootprint.prototype);
CircularLowFootprint.prototype.constructor = CircularLowFootprint;


/**
 *
 *
 */
function AsyncCircular(type = "end" /* front | end | de */, method = "fifo" /* fifo | lifo */, size = 100) {

    Circular.call(this, type = type, method = method, size = size);
    this.superBase = this;
    
    this.type = type;
    this.method = method;
    this.queueSize = size;

    this.awaiters = new AsyncBase();

    this.add = function add(item, counter = "") { }
    this.remove = function remove(index = 0, counter = "+") { }
    this.pop = function pop(counter = "-") { }
    this.shift = function shift(counter = "+") { }

    this.circular = {
        enqueue: this.add,
        add: this.add,
        push: this.add,

        remove: this.remove,
        dequeue: this.remove,
        pop: this.pop,
        shift: this.shift,

        clear: () => this.clear(),
        reset: () => this.reset(),
        isEmpty: () => this.isEmpty(),
        peek: () => this.peek(),
        size: () => this.size(),
        toArray: () => this.toArray()
    }

    return this.circular;
}

AsyncCircular.prototype = Object.create(AsyncBase.prototype);
AsyncCircular.prototype.constructor = AsyncCircular;


module.exports.Circular = Circular;
module.exports.CircularLowFootprint = CircularLowFootprint;
module.exports.AsyncCircular = AsyncCircular;

module.exports.default = {
    Circular, CircularLowFootprint, AsyncCircular
};
