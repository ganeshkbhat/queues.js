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

var Queue = require("../index.js").BaseLowFootprint;


describe('test-.mjs::queues.js: Test Suite for queues.js BaseLowFootprint Files', function () {

    it('test-.js::queues.js: [Test A] Test Suite for queues.js BaseLowFootprint function. Tests for push and shift functions for TOP FIFO functions', function (done) {
        var queue = new Queue("fifo");
        queue.push(1);
        queue.push(2);
        queue.push(3);
        queue.push(4);
        queue.push(5);
        queue.push(6);
        queue.push(7);
        queue.push(8);

        expect(queue.size()).to.equal(8);
        expect(queue.toArray().length).to.equal(8);

        expect(queue.shift()).to.equal(1);
        expect(queue.shift()).to.equal(2);
        expect(queue.shift()).to.equal(3);

        expect(queue.size()).to.equal(5);
        expect(queue.toArray().length).to.equal(5);

        expect(queue.shift()).to.equal(4);
        expect(queue.shift()).to.equal(5);
        expect(queue.shift()).to.equal(6);

        done();
    });

    it('test-.js::queues.js: [Test A] Test Suite for queues.js BaseLowFootprint function. Tests for pushFront and shift for TOP LIFO functions', function (done) {
        var queue = new Queue("lifo");
        queue.pushFront(1);
        queue.pushFront(2);
        queue.pushFront(3);
        queue.pushFront(4);
        queue.pushFront(5);
        queue.pushFront(6);
        queue.pushFront(7);
        queue.pushFront(8);

        expect(queue.size()).to.equal(8);
        expect(queue.toArray().length).to.equal(8);

        expect(queue.shift()).to.equal(8);
        expect(queue.shift()).to.equal(7);
        expect(queue.shift()).to.equal(6);

        expect(queue.size()).to.equal(5);
        expect(queue.toArray().length).to.equal(5);

        expect(queue.shift()).to.equal(5);
        expect(queue.shift()).to.equal(4);
        expect(queue.shift()).to.equal(3);

        done();
    });

    it('test-.js::queues.js: [Test A] Test Suite for queues.js BaseLowFootprint function. Tests for push and pop functions for BOTTOM FIFO functions', function (done) {
        var queue = new Queue("fifo");
        queue.push(1);
        queue.push(2);
        queue.push(3);
        queue.push(4);
        queue.push(5);
        queue.push(6);
        queue.push(7);
        queue.push(8);

        expect(queue.size()).to.equal(8);
        expect(queue.toArray().length).to.equal(8);

        expect(queue.shift()).to.equal(1);
        expect(queue.shift()).to.equal(2);
        expect(queue.shift()).to.equal(3);

        expect(queue.size()).to.equal(5);
        expect(queue.toArray().length).to.equal(5);

        expect(queue.shift()).to.equal(4);
        expect(queue.shift()).to.equal(5);
        expect(queue.shift()).to.equal(6);

        done();
    });

    it('test-.js::queues.js: [Test A] Test Suite for queues.js BaseLowFootprint function. Tests for push and pop functions for BOTTOM LIFO functions', function (done) {
        var queue = new Queue("lifo");
        queue.push(1);
        queue.push(2);
        queue.push(3);
        queue.push(4);
        queue.push(5);
        queue.push(6);
        queue.push(7);
        queue.push(8);

        expect(queue.size()).to.equal(8);
        expect(queue.toArray().length).to.equal(8);

        expect(queue.pop()).to.equal(8);
        expect(queue.pop()).to.equal(7);
        expect(queue.pop()).to.equal(6);

        expect(queue.size()).to.equal(5);
        expect(queue.toArray().length).to.equal(5);

        expect(queue.pop()).to.equal(5);
        expect(queue.pop()).to.equal(4);
        expect(queue.pop()).to.equal(3);

        done();
    });

});

