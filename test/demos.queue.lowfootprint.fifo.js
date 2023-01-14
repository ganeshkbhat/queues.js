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
var Queue = require("../index.js").QueueLowFootprintFifo;
var fifo = new Queue();

describe('test-.mjs::queues.js: Test Suite for queues.js Files', function () {

        it('test-.js::queues.js: [Test A] Test Suite for queues.js Bottom Queue LowFootPrint FIFO method', function (done) {

            fifo.enqueue(1);
            fifo.add(2);
            fifo.insert(3);
            fifo.push(4);
            fifo.enqueue(5);
            fifo.add(6);
            fifo.insert(7);
            fifo.push(8);

            expect(fifo.size()).to.equal(8);
            expect(fifo.toArray().length).to.equal(8);

            expect(fifo.dequeue()).to.equal(1);
            expect(fifo.shift()).to.equal(2);
            expect(fifo.remove()).to.equal(3);

            expect(fifo.size()).to.equal(5);
            expect(fifo.toArray().length).to.equal(5);

            done();
        });

});



