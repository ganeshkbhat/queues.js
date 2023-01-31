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

// const { Circular } = require("../index");
// let c = new Circular();

// describe('test-.mjs::queues.js: Test Suite for queues.js demos.circular.js Circular Files', function () {

//     it('test-.js::queues.js: [Test A] Test Suite for queues.js Circular function. Test for Add and Pop functions', function (done) {

//         c.add([1, 2, 3, 4, 5, 6]);
//         expect(typeof c.items).to.equal("object");
//         expect(!!c.items).to.equal(true);
//         expect(c.items.length).to.equal(2);
//         c.add([1, 32]);
//         expect(typeof c.items).to.equal("object");
//         expect(!!c.items).to.equal(true);
//         expect(c.items.length).to.equal(4);
//         c.pop();
//         c.pop();
//         c.pop();
//         expect(typeof c.items).to.equal("object");
//         expect(!!c.items).to.equal(true);
//         expect(c.items.length).to.equal(2);
//         c.pop();
//         c.pop();
//         expect(c.items).to.equal(5);
//         c.pop();
//         c.pop();
//         expect(c.items).to.equal(5);

//         done();
//     });

// });


