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

var Queue = require("../src/base.js").Base;


describe('demos.base.js::queues.js: Test Suite for queues.js demos.base.js Base function', function () {

    it('demos.base.js::queues.js: [Test A] Test Suite for queues.js Base function. Tests for Push and Shift', function (done) {
        let type = "end";
        let method = "fifo";

        var queue = new Queue(type, method);
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
        expect(queue.toArray().length).to.equal(8);

        expect(queue.shift()).to.equal(4);
        expect(queue.shift()).to.equal(5);
        expect(queue.shift()).to.equal(6);

        expect(queue.size()).to.equal(2);
        expect(queue.toArray().length).to.equal(8);

        queue.reset();

        expect(queue.size()).to.equal(8);
        expect(queue.toArray().length).to.equal(8);

        queue.clear();

        expect(queue.size()).to.equal(0);
        expect(queue.toArray().length).to.equal(0);

        done();
    });

    it('demos.base.js::queues.js: [Test B] Test Suite for queues.js Base function. Tests for PushFront and Pop', function (done) {
        let type = "front";
        let method = "fifo";
        var queue = new Queue(type, method);

        queue.pushFront(1);
        queue.pushFront(2);
        queue.offsetCounter("+");
        queue.pushFront(3);
        queue.offsetCounter("+");
        queue.pushFront(4);
        queue.offsetCounter("+");
        queue.pushFront(5);
        queue.offsetCounter("+");
        queue.pushFront(6);
        queue.offsetCounter("+");
        queue.pushFront(7);
        queue.offsetCounter("+");
        queue.pushFront(8);
        queue.offsetCounter("+");
        
        expect(queue.size()).to.equal(8);
        expect(queue.toArray().length).to.equal(8);

        expect(queue.pop()).to.equal(1);
        expect(queue.pop()).to.equal(2);
        expect(queue.pop()).to.equal(3);

        expect(queue.size()).to.equal(5);
        expect(queue.toArray().length).to.equal(8);

        expect(queue.pop()).to.equal(4);
        expect(queue.pop()).to.equal(5);
        expect(queue.pop()).to.equal(6);

        expect(queue.size()).to.equal(2);
        expect(queue.toArray().length).to.equal(8);

        queue.clear();
        queue.reset();

        done();
    });

});

