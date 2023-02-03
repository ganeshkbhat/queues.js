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
var Queue = require("../index.js").QueueTop;


describe('test-.mjs::queues.js: Test Suite for queues.js demos.queue.top.js Files', function () {

    it('test-.js::queues.js: [Test A] Test Suite for queues.js QueueTop lifo tests for add and remove', function (done) {
        let type = "front";
        let method = "lifo";

        // LIFO
        var queue = new Queue(type, method);
        queue.lifo.enqueue(1);
        queue.lifo.add(2);
        queue.lifo.insert(3);
        queue.lifo.push(4);
        queue.lifo.enqueue(5);
        queue.lifo.add(6);
        queue.lifo.insert(7);
        queue.lifo.push(8);

        expect(queue.lifo.size()).to.equal(8);
        expect(queue.lifo.toArray().length).to.equal(8);

        expect(queue.lifo.dequeue()).to.equal(8);
        expect(queue.lifo.pop()).to.equal(7);
        expect(queue.lifo.remove()).to.equal(6);

        expect(queue.lifo.size()).to.equal(5);
        expect(queue.lifo.toArray().length).to.equal(8);

        expect(queue.lifo.dequeue()).to.equal(5);
        expect(queue.lifo.pop()).to.equal(4);
        expect(queue.lifo.remove()).to.equal(3);

        expect(queue.lifo.size()).to.equal(2);
        expect(queue.lifo.toArray().length).to.equal(8);

        queue.lifo.clear();
        queue.lifo.reset();

        done();
    });

    it('test-.js::queues.js: [Test A] Test Suite for queues.js QueueTop fifo tests for add and remove', function (done) {
        let type = "front";
        let method = "fifo";

        // LIFO
        var queue = new Queue(type, method);
        queue.fifo.enqueue(1);
        queue.fifo.add(2);
        queue.fifo.insert(3);
        queue.fifo.push(4);
        queue.fifo.enqueue(5);
        queue.fifo.add(6);
        queue.fifo.insert(7);
        queue.fifo.push(8);

        expect(queue.fifo.size()).to.equal(8);
        expect(queue.fifo.toArray().length).to.equal(8);

        expect(queue.fifo.dequeue()).to.equal(1);
        expect(queue.fifo.shift()).to.equal(2);
        expect(queue.fifo.remove()).to.equal(3);

        expect(queue.fifo.size()).to.equal(5);
        expect(queue.fifo.toArray().length).to.equal(8);

        expect(queue.fifo.dequeue()).to.equal(4);
        expect(queue.fifo.shift()).to.equal(5);
        expect(queue.fifo.remove()).to.equal(6);

        expect(queue.fifo.size()).to.equal(2);
        expect(queue.fifo.toArray().length).to.equal(8);

        queue.fifo.clear();
        queue.fifo.reset();

        done();
    });

    it('test-.js::queues.js: [Test A] Test Suite for queues.js QueueTop tests for add and remove', function (done) {

        // FIFO
        let type = "front";
        let method = "fifo";
        var queue = new Queue(type, method);

        queue.fifo.enqueue(1);
        queue.fifo.add(2);
        queue.fifo.insert(3);
        queue.fifo.push(4);
        queue.fifo.enqueue(5);
        queue.fifo.add(6);
        queue.fifo.insert(7);
        queue.fifo.push(8);

        expect(queue.fifo.size()).to.equal(8);
        expect(queue.fifo.toArray().length).to.equal(8);

        expect(queue.fifo.dequeue()).to.equal(1);
        expect(queue.fifo.shift()).to.equal(2);
        expect(queue.fifo.remove()).to.equal(3);

        expect(queue.fifo.peek()).to.equal(3);
        expect(queue.lifo.peek()).to.equal(3);

        expect(queue.fifo.size()).to.equal(5);
        expect(queue.fifo.toArray().length).to.equal(8);

        // LIFO

        expect(queue.lifo.dequeue()).to.equal(3);
        expect(queue.lifo.pop()).to.equal(2);
        expect(queue.lifo.remove()).to.equal(1);

        expect(queue.lifo.size()).to.equal(0);
        expect(queue.lifo.toArray().length).to.equal(8);

        expect(typeof queue.fifo.peek()).to.equal(typeof undefined);
        expect(typeof queue.lifo.peek()).to.equal(typeof undefined);

        queue.lifo.clear();
        queue.lifo.reset();

        done();
    });

});

