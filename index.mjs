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

import { default as queue } from "./index.js";
// import { Queue, QueueLowFootprint, AsyncQueue, Semaphore } from "./index.js";
import { Queue, QueueLowFootprint, Semaphore } from "./index.js";

export default queue;
// export { Queue, QueueLowFootprint, AsyncQueue, Semaphore }
export { Queue, QueueLowFootprint, Semaphore }
