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
var Queue = require("../index.js").StackLowFootprint;
var stack = new Queue();

describe('test-.mjs::queues.js: Test Suite for queues.js demos.stack.lowfootprint.js Files', function () {

    it('[Test A] Test for for queues.js StackLowFootprint class/ function in main repo directory', function (done) {
        let type = "front";
        let method = "fifo";
        stack.enqueue(1);
        stack.add(2);
        stack.insert(3);
        stack.push(4);
        stack.enqueue(5);
        stack.add(6);
        stack.insert(7);
        stack.push(8);

        expect(stack.size()).to.equal(8);
        expect(stack.toArray().length).to.equal(8);

        expect(stack.dequeue()).to.equal(1);
        expect(stack.shift()).to.equal(2);
        expect(stack.remove()).to.equal(3);

        expect(stack.size()).to.equal(5);
        expect(stack.toArray().length).to.equal(5);

        expect(stack.dequeue()).to.equal(4);
        expect(stack.shift()).to.equal(5);
        expect(stack.remove()).to.equal(6);

        expect(stack.size()).to.equal(2);
        expect(stack.toArray().length).to.equal(2);

        done();
    });

});

