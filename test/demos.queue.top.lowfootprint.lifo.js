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
var Queue = require("../index.js").QueueTopLowFootprintLifo;
var lifo = new Queue();

describe('test-.mjs::queues.js: Test Suite for queues.js Files', function () {

    it('test-.js::queues.js: [Test A] Test Suite for queues.js QueueTopLowFootprintLifo LIFO in main repo directory', function (done) {

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
        expect(lifo.shift()).to.equal(7);
        expect(lifo.remove()).to.equal(6);

        expect(lifo.size()).to.equal(5);
        expect(lifo.toArray().length).to.equal(5);

        done();
    });

});


