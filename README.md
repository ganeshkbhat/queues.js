# queues.js

npm module for start ended lifo/ fifo, normal js ended lifo/ fifo, double ended queue and semaphore queue implementation

Find the demos in the [demos folder](./demos)

# APIs queues.js

###

`Commonjs Code`

```

var queues = require("queues.js");
var QueueFifo = require("queues.js").QueueLifo;
var QueueLifo = require("queues.js").QueueFifo;


// FIFO BOTTOM QUEUE IMPLEMENTATION
//   <==   [1,2,3,4]  <==
var fifo = new QueueFifo();
fifo.enqueue(item, counter = "");
fifo.dequeue(counter = "+");
fifo.add(item, counter = "");
fifo.insert(item, counter = "");
fifo.push(item, counter = "");
fifo.shift(counter = "+");
fifo.remove(counter = "+");


// LIFO BOTTOM QUEUE IMPLEMENTATION
//   [1,2,3,4]  <==
//              ==>
var lifo = new QueueLifo();
lifo.enqueue(item, counter = "");
lifo.dequeue(counter = "-");
lifo.add(item, counter = "");
lifo.push(item, counter = "");
lifo.insert(item, counter = "");
lifo.pop(counter = "-");
lifo.remove(counter = "-");


```

`ESM Code`

```

import { default as queues, QueueLifo, QueueFifo } as "queues.js";
var fifo = new QueueFifo();
var lifo = new QueueLifo();


```

`ESM or Commonjs Code`

```

var queues = import("queues.js");
var QueueFifo = import("queues.js").QueueLifo;
var QueueLifo = import("queues.js").QueueFifo;
var fifo = new QueueFifo();
var lifo = new QueueLifo();

```

### Base

```

const { Base, BaseLowFootprint, AsyncBase, AsyncBaseLowFootPrint } = require("queues.js");

```

### Queue (includes all Base methods)

```

const { Queue, QueueLowFootprint, QueueLifo, QueueFifo, QueueLowFootprintLifo, QueueLowFootprintFifo, AsyncQueue, AsyncQueueLowFootprint } = require("queues.js");


```

### Stack (includes all Base methods)

```

const { Stack, StackLowFootprint, AsyncStack, AsyncStackLowFootprint } = require("queues.js");


```

### Double - Denqueue (includes all Base methods)

```

const { DoubleEnded, DoubleEndedLowFootprint, AsyncDoubleEnded, AsyncDoubleEndedLowFootprint } = require("queues.js");


```

### Semaphore (includes all Base methods)

```

const { Base, BaseLowFootprint, AsyncBase, AsyncBaseLowFootPrint } = require("queues.js");


```
