# queues.js
npm module for start ended lifo/ fifo, normal js ended lifo/ fifo, double ended queue and semaphore queue implementation


## INDEVELOPMENT - DO NOT INSTALL

```

const queue = require("queues.js").QueueLowFootprint()


// - normal js ended fifo
//   <==   [1,2,3,4]  <==

queue.endFifo.(___) 

// endFifo functions: 
// .enqueue, .dequeue, .insertAtIndex, .removeAtIndex, .removeItem, .size, .peek, .seek, .clear



// - normal js ended lifo
//   [1,2,3,4]  <==
//              ==>

queue.endLifo.(___) 

// endFifo functions: 
// .enqueue, .dequeue, .insertAtIndex, .removeAtIndex, .removeItem, .size, .peek, .seek, .clear



// - start ended fifo
//   ==>   [1,2,3,4]  ==>

queue.startFifo.(___)

// endFifo functions: 
// .enqueue, .dequeue, .insertAtIndex, .removeAtIndex, .removeItem, .size, .peek, .seek, .clear



// - start ended lifo
//   ==> [1,2,3,4]
//   <==

queue.startLifo.(___)

// endFifo functions: 
// .enqueue, .dequeue, .insertAtIndex, .removeAtIndex, .removeItem, .size, .peek, .seek, .clear



// Double Ended Queue (LIFO, FIFO, normal js ended LIFO, normal js FIFO)
//
//   ==>   [1,2,3,4]  ==>
// 
//   <==   [1,2,3,4]  <==
//
//   <==   [1,2,3,4]
//   ==>
// 
//   [1,2,3,4] <==
//             ==>
//
//
//  <== | ==> [1,2,3,4] <== | ==>
// 
queue.doubleEnded.(___)
// doubleEnded functions: 
// .start.add, .start.remove, .end.add, .end.remove, .insertAtIndex, .removeAtIndex, .removeItem, .size, .peek, .seek, .clear


```
