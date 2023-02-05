// /**
//  * 
//  * Package: queues.js
//  * Author: Ganesh B
//  * Description: 
//  * Install: npm i queues.js --save
//  * Github: https://github.com/ganeshkbhat/queues.js
//  * npmjs Link: https://www.npmjs.com/package/queues.js
//  * File: .js
//  * File Description: .js 
//  * 
// */

/* eslint no-console: 0 */

'use strict';

const expect = require('chai').expect;

var Queue = require("../index.js").DoubleEnded;


describe('test-.mjs::queues.js: Test Suite for queues.js demos.double.js Files', function () {

    it('test-.js::queues.js: [Test A] Test Suite for queues.js in main repo directory', function (done) {

        let type = "front";
        let method = "fifo";

        var queue = new Queue(type, method);
        queue.insertFront(1);
        queue.insertFront(2);
        queue.insertFront(3);
        queue.insertFront(4);
        queue.insertFront(5);
        queue.insertFront(6);
        queue.insertFront(7);
        queue.insertFront(8);

        expect(queue.size()).to.equal(8);
        expect(queue.toArray().length).to.equal(8);

        expect(queue.deleteLast()).to.equal(1);
        expect(queue.deleteLast()).to.equal(2);

        expect(queue.size()).to.equal(6);
        expect(queue.toArray().length).to.equal(8);

        expect(queue.deleteLast()).to.equal(3);
        expect(queue.deleteLast()).to.equal(4);

        expect(queue.size()).to.equal(4);
        expect(queue.toArray().length).to.equal(8);

        expect(queue.deleteFront()).to.equal(8);
        expect(queue.deleteFront()).to.equal(7);

        expect(queue.size()).to.equal(2);
        expect(queue.toArray().length).to.equal(8);

        expect(queue.deleteFront()).to.equal(6);
        expect(queue.deleteFront()).to.equal(5);

        expect(queue.size()).to.equal(0);
        expect(queue.toArray().length).to.equal(8);

        done();
    });

    it('test-.js::queues.js: [Test A] Test Suite for queues.js front fifo for deleteLast deleteFront in main repo directory', function (done) {

        let type = "front";
        let method = "fifo";

        var queue = new Queue(type, method);
        queue.insertFront(1);
        queue.insertFront(2);
        queue.insertFront(3);
        queue.insertFront(4);
        queue.insertFront(5);
        queue.insertFront(6);
        queue.insertFront(7);
        queue.insertFront(8);

        expect(queue.size()).to.equal(8);
        expect(queue.toArray().length).to.equal(8);

        expect(queue.deleteLast()).to.equal(1);
        expect(queue.deleteFront()).to.equal(8);
        
        expect(queue.size()).to.equal(6);
        expect(queue.toArray().length).to.equal(8);

        expect(queue.deleteLast()).to.equal(2);
        expect(queue.deleteFront()).to.equal(7);

        expect(queue.size()).to.equal(4);
        expect(queue.toArray().length).to.equal(8);

        expect(queue.deleteLast()).to.equal(3);
        expect(queue.deleteFront()).to.equal(6);

        expect(queue.size()).to.equal(2);
        expect(queue.toArray().length).to.equal(8);

        expect(queue.deleteLast()).to.equal(4);
        expect(queue.deleteFront()).to.equal(5);

        expect(queue.size()).to.equal(0);
        expect(queue.toArray().length).to.equal(8);

        done();
    });

    it('test-.js::queues.js: [Test A] Test Suite for queues.js front fifo for deleteFront deleteLast in main repo directory', function (done) {

        let type = "front";
        let method = "fifo";

        var queue = new Queue(type, method);
        queue.insertFront(1);
        queue.insertFront(2);
        queue.insertFront(3);
        queue.insertFront(4);
        queue.insertFront(5);
        queue.insertFront(6);
        queue.insertFront(7);
        queue.insertFront(8);

        expect(queue.size()).to.equal(8);
        expect(queue.toArray().length).to.equal(8);

        expect(queue.deleteFront()).to.equal(8);
        expect(queue.deleteFront()).to.equal(7);

        expect(queue.size()).to.equal(6);
        expect(queue.toArray().length).to.equal(8);

        expect(queue.deleteFront()).to.equal(6);
        expect(queue.deleteFront()).to.equal(5);

        expect(queue.size()).to.equal(4);
        expect(queue.toArray().length).to.equal(8);

        expect(queue.deleteLast()).to.equal(1);
        expect(queue.deleteLast()).to.equal(2);

        expect(queue.size()).to.equal(2);
        expect(queue.toArray().length).to.equal(8);

        expect(queue.deleteLast()).to.equal(3);
        expect(queue.deleteLast()).to.equal(4);

        expect(queue.size()).to.equal(0);
        expect(queue.toArray().length).to.equal(8);

        done();
    });

    it('test-.js::queues.js: [Test A] Test Suite for queues.js front fifo for deleteFront in main repo directory', function (done) {

        let type = "front";
        let method = "fifo";

        var queue = new Queue(type, method);
        queue.insertFront(1);
        queue.insertFront(2);
        queue.insertFront(3);
        queue.insertFront(4);
        queue.insertFront(5);
        queue.insertFront(6);
        queue.insertFront(7);
        queue.insertFront(8);

        expect(queue.size()).to.equal(8);
        expect(queue.toArray().length).to.equal(8);

        expect(queue.deleteFront()).to.equal(8);
        expect(queue.deleteFront()).to.equal(7);
        expect(queue.deleteFront()).to.equal(6);
        expect(queue.deleteFront()).to.equal(5);
        expect(queue.deleteFront()).to.equal(4);
        expect(queue.deleteFront()).to.equal(3);
        expect(queue.deleteFront()).to.equal(2);
        expect(queue.deleteFront()).to.equal(1);

        expect(queue.size()).to.equal(0);
        expect(queue.toArray().length).to.equal(8);

        done();
    });

    it('test-.js::queues.js: [Test A] Test Suite for queues.js front fifo for deleteLast in main repo directory', function (done) {

        let type = "front";
        let method = "fifo";

        var queue = new Queue(type, method);
        queue.insertFront(1);
        queue.insertFront(2);
        queue.insertFront(3);
        queue.insertFront(4);
        queue.insertFront(5);
        queue.insertFront(6);
        queue.insertFront(7);
        queue.insertFront(8);

        expect(queue.size()).to.equal(8);
        expect(queue.toArray().length).to.equal(8);

        expect(queue.deleteLast()).to.equal(1);
        expect(queue.deleteLast()).to.equal(2);
        expect(queue.deleteLast()).to.equal(3);
        expect(queue.deleteLast()).to.equal(4);
        expect(queue.deleteLast()).to.equal(5);
        expect(queue.deleteLast()).to.equal(6);
        expect(queue.deleteLast()).to.equal(7);
        expect(queue.deleteLast()).to.equal(8);

        expect(queue.size()).to.equal(0);
        expect(queue.toArray().length).to.equal(8);

        done();
    });

});

