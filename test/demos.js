/**
 * 
 * Package: queues.js
 * Author: Ganesh B
 * Description: 
 * Install: npm i queues.js --save
 * Github: https://github.com/ganeshkbhat/queues.js
 * npmjs Link: https://www.npmjs.com/package/queues.js
 * File: .js
 * File Description: .js 
 * 
*/

/* eslint no-console: 0 */

'use strict';

const expect = require('chai').expect;

const {
    Base, BaseLowFootprint, AsyncBase, AsyncBaseLowFootPrint,
    Queue, QueueLowFootprint, QueueLifo, QueueFifo, QueueLowFootprintLifo, QueueLowFootprintFifo,
    AsyncQueue, AsyncQueueLowFootprint,
    QueueTop, QueueTopLowFootprint, QueueTopLifo, QueueTopFifo, QueueTopLowFootprintLifo, QueueTopLowFootprintFifo,
    AsyncQueueTop, AsyncQueueTopLowFootprint,
    Stack, StackLowFootprint,
    AsyncStack, AsyncStackLowFootprint,
    DoubleEnded, DoubleEndedLowFootprint, AsyncDoubleEnded, AsyncDoubleEndedLowFootprint,
    Priority, PriorityLowFootprint, AsyncPriority, AsyncPriorityLowFootprint,
    Circular, AsyncCircular, Semaphore, WaitQueue
} = require("../index.js");



describe('test-.mjs::queues.js: Test Suite for queues.js Files', function () {

    it('test-.js::queues.js: [Test A] Test Suite for queues.js for all classes/ functions import statements in library', function (done) {

        expect(!!Base).to.equal(true);
        expect(typeof Base).to.equal("function");

        expect(!!BaseLowFootprint).to.equal(true);
        expect(typeof BaseLowFootprint).to.equal("function");

        expect(!!AsyncBase).to.equal(true);
        expect(typeof AsyncBase).to.equal("function");

        expect(!!AsyncBaseLowFootPrint).to.equal(true);
        expect(typeof AsyncBaseLowFootPrint).to.equal("function");

        expect(!!Queue).to.equal(true);
        expect(typeof Queue).to.equal("function");

        expect(!!QueueLowFootprint).to.equal(true);
        expect(typeof QueueLowFootprint).to.equal("function");

        expect(!!QueueLifo).to.equal(true);
        expect(typeof QueueLifo).to.equal("function");

        expect(!!QueueFifo).to.equal(true);
        expect(typeof QueueFifo).to.equal("function");

        expect(!!QueueLowFootprintLifo).to.equal(true);
        expect(typeof QueueLowFootprintLifo).to.equal("function");

        expect(!!QueueLowFootprintFifo).to.equal(true);
        expect(typeof QueueLowFootprintFifo).to.equal("function");

        expect(!!AsyncQueue).to.equal(true);
        expect(typeof AsyncQueue).to.equal("function");

        expect(!!AsyncQueueLowFootprint).to.equal(true);
        expect(typeof AsyncQueueLowFootprint).to.equal("function");

        expect(!!QueueTop).to.equal(true);
        expect(typeof QueueTop).to.equal("function");

        expect(!!QueueTopLowFootprint).to.equal(true);
        expect(typeof QueueTopLowFootprint).to.equal("function");

        expect(!!QueueTopLifo).to.equal(true);
        expect(typeof QueueTopLifo).to.equal("function");

        expect(!!QueueTopFifo).to.equal(true);
        expect(typeof QueueTopFifo).to.equal("function");

        expect(!!QueueTopLowFootprintLifo).to.equal(true);
        expect(typeof QueueTopLowFootprintLifo).to.equal("function");

        expect(!!QueueTopLowFootprintFifo).to.equal(true);
        expect(typeof QueueTopLowFootprintFifo).to.equal("function");

        expect(!!AsyncQueueTop).to.equal(true);
        expect(typeof AsyncQueueTop).to.equal("function");

        expect(!!AsyncQueueTopLowFootprint).to.equal(true);
        expect(typeof AsyncQueueTopLowFootprint).to.equal("function");

        expect(!!Stack).to.equal(true);
        expect(typeof Stack).to.equal("function");

        expect(!!StackLowFootprint).to.equal(true);
        expect(typeof StackLowFootprint).to.equal("function");

        expect(!!AsyncStack).to.equal(true);
        expect(typeof AsyncStack).to.equal("function");

        expect(!!AsyncStackLowFootprint).to.equal(true);
        expect(typeof AsyncStackLowFootprint).to.equal("function");

        expect(!!DoubleEnded).to.equal(true);
        expect(typeof DoubleEnded).to.equal("function");

        expect(!!DoubleEndedLowFootprint).to.equal(true);
        expect(typeof DoubleEndedLowFootprint).to.equal("function");

        expect(!!AsyncDoubleEnded).to.equal(true);
        expect(typeof AsyncDoubleEnded).to.equal("function");

        expect(!!AsyncDoubleEndedLowFootprint).to.equal(true);
        expect(typeof AsyncDoubleEndedLowFootprint).to.equal("function");

        expect(!!Priority).to.equal(true);
        expect(typeof Priority).to.equal("function");

        expect(!!PriorityLowFootprint).to.equal(true);
        expect(typeof PriorityLowFootprint).to.equal("function");

        expect(!!AsyncPriority).to.equal(true);
        expect(typeof AsyncPriority).to.equal("function");

        expect(!!AsyncPriorityLowFootprint).to.equal(true);
        expect(typeof AsyncPriorityLowFootprint).to.equal("function");

        expect(!!Circular).to.equal(true);
        expect(typeof Circular).to.equal("function");

        expect(!!AsyncCircular).to.equal(true);
        expect(typeof AsyncCircular).to.equal("function");

        expect(!!Semaphore).to.equal(true);
        expect(typeof Semaphore).to.equal("function");

        expect(!!WaitQueue).to.equal(true);
        expect(typeof WaitQueue).to.equal("function");

        done();
    });

});

