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

var Queue = require("../index.js").QueueTopLifo;


describe('test-.mjs::queues.js: Test Suite for queues.js demos.queue.top.lifo.js Files', function () {

    it('test-.js::queues.js: [Test A] Test Suite for queues.js QueueTopLifo tests for add and remove', function (done) {
        let type = "front";
        let method = "lifo";

        var lifo = new Queue(type, method);
        
        lifo.enqueue(1);
        lifo.add(2);
        lifo.insert(3);
        lifo.push(4);
        lifo.enqueue(5);
        lifo.add(6);
        lifo.insert(7);
        lifo.push(8);

        expect(lifo.size()).to.equal(8);
        expect(lifo.toArray().length).to.equal(8);

        expect(lifo.dequeue()).to.equal(8);
        expect(lifo.pop()).to.equal(7);
        expect(lifo.remove()).to.equal(6);

        expect(lifo.size()).to.equal(5);
        expect(lifo.toArray().length).to.equal(8);

        expect(lifo.dequeue()).to.equal(5);
        expect(lifo.pop()).to.equal(4);
        expect(lifo.remove()).to.equal(3);

        expect(lifo.size()).to.equal(2);
        expect(lifo.toArray().length).to.equal(8);

        done();
    });

});

