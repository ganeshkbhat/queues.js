/**
 * 
 * Package: queues.js
 * Author: Ganesh B
 * Description: Nodejs npm module to traverse folder using code or cli or use glob patterns
 * Install: npm i queues.js --save
 * Github: https://github.com/ganeshkbhat/queues.js
 * npmjs Link: https://www.npmjs.com/package/queues.js
 * File: index.js
 * File Description: queues.js 
 * 
*/

/* eslint no-console: 0 */

'use strict';

// const { Queue, QueueLowFootprint, AsyncQueue } = require("./src/queue.js");
const { Queue, QueueLowFootprint } = require("./src/queue.js");
const { Semaphore } = require("./src/semaphore.js");


module.exports.Queue = Queue;
module.exports.QueueLowFootprint = QueueLowFootprint;
module.exports.Semaphore = Semaphore;
// module.exports.AsyncQueue = AsyncQueue;

// module.exports.default = { Queue, QueueLowFootprint, AsyncQueue, Semaphore };
module.exports.default = { Queue, QueueLowFootprint, Semaphore };
