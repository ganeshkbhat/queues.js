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
fifo.enqueue(item);
fifo.add(item);
fifo.insert(item);
fifo.push(item);

fifo.dequeue();
fifo.shift();
fifo.remove();


// LIFO BOTTOM QUEUE IMPLEMENTATION
//   [1,2,3,4]  <==
//              ==>
var lifo = new QueueLifo();
lifo.enqueue(item);
lifo.add(item);
lifo.push(item);
lifo.insert(item);

lifo.dequeue();
lifo.pop();
lifo.remove();


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

### QueueTop (includes all Base methods)

```

const { QueueTop, QueueTopLowFootprint, QueueTopLifo, QueueTopFifo, QueueTopLowFootprintLifo, QueueTopLowFootprintFifo, AsyncQueueTop, AsyncQueueTopLowFootprint } = require("queues.js");


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


### Contributions

Contributions, Feature Improvements, Bugs, and Issues are invited. [raising an issue](https://github.com/ganeshkbhat/apis-hasher/issues)


# License

[MIT License](./LICENSE)
