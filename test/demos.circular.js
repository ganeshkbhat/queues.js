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

// /* eslint no-console: 0 */

// 'use strict';

// const expect = require('chai').expect;

// const { CircularLowFootprint } = require("../index");


// describe('test-.mjs::queues.js: Test Suite for queues.js demos.circular.js Circular Files', function () {

//     it('test-.js::queues.js: [Test A] Test Suite for queues.js Circular function. Test for Add and Pop functions', function (done) {
//         let type = "front";
//         let method = "fifo";
        
//         let c = new CircularLowFootprint(type, method, 10);
//         console.log("Circular ", c);

//         c.add(1);
//         c.add(2);
//         c.add(3);
//         c.add(4);
//         c.add(5);
//         c.add(6);
//         c.add(7);

//         console.log("c.toArray() ", c.toArray(), c.getOffset(), c.peek())
//         expect(c.toArray().length).to.equal(7);

//         c.add(1);
//         c.add(32);

//         expect(c.toArray().length).to.equal(9);
        
//         c.pop();
//         c.pop();
//         c.pop();

//         expect(c.toArray().length).to.equal(6);
        
//         c.pop();
//         c.pop();

//         expect(c.toArray().length).to.equal(4);
        
//         c.pop();
//         c.pop();

//         expect(c.toArray().length).to.equal(2);

//         done();
//     });

// });


