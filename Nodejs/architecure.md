## Nodejs Architecture

In Node.js, the runtime is single-threaded, meaning the main event loop handles all incoming requests. When multiple concurrent requests arrive, the main thread delegates I/O tasks (like file operations or network requests) to Libuv and does not wait for them to complete, so it remains unblocked. Libuv interacts with the OS kernel to perform I/O asynchronously, and once a task finishes, its callback is added to the callback queue, which the event loop later executes on the main thread.

For CPU-intensive tasks such as cryptography or DNS resolution, Libuv uses a thread pool (default size 4). This allows up to 4 heavy tasks to run in parallel. If more tasks arrive than the thread pool size, they wait until a thread becomes available. To handle more CPU-bound tasks efficiently, we can use worker threads.

Additionally, Node.js supports child processes and clustering, which allow multiple Node.js instances to run on different CPU cores. This improves performance by enabling the server to handle more requests concurrently and utilize multi-core systems effectively.

---

### Worker Threads

How it works:

- Default behavior (no worker threads):

Heavy tasks (like crypto, DNS, compression) go to Libuv’s thread pool (default 4 threads).
If more tasks arrive than the pool size, they wait until a thread becomes free.

- With Worker Threads:

When you explicitly create a worker thread, the heavy task is sent directly to the worker thread.
It does not use the Libuv thread pool at all.Each worker thread has its own event loop and runs in parallel with the main thread.

- Key Points:

Worker threads are for CPU-bound tasks, so they offload heavy computation from the main thread and Libuv thread pool.Main thread remains fully non-blocked for I/O tasks.You can create multiple worker threads to handle more heavy tasks without waiting for the Libuv thread pool.

---

### Clustering

- By default:

Yes, a Node.js process runs on a single core because it is single-threaded.
All incoming requests go through this one process, handled by the main event loop.

- Clustering:

Using the cluster module, Node.js can spawn multiple processes (workers), usually equal to os.cpus().length.
Each worker is a separate Node.js process with its own event loop, memory, and handles requests independently.
Incoming requests are distributed among the worker processes by the master process, improving concurrency and CPU utilization.

This is scaling horizontally: better CPU utilization, more requests handled concurrently.

---

### Child process

Node.js can create completely separate processes using the child_process module.
Each child process has its own memory, event loop, and runtime, independent of the main process.

- Primary use cases:

Heavy CPU computations that might block the main thread.
Executing external scripts or programs (like Python scripts, shell commands).
Isolation: If the task crashes, the main process is unaffected.
Unlike clustering (which is mainly for scaling HTTP servers), child processes are task-specific, often for one-off heavy or external tasks.

- Methods to Create Child Processes

#### fork()

- Creates a new Node.js process.
- Specially designed for Node.js scripts.
- Allows IPC (inter-process communication) via send() and on('message').
  Good for CPU-heavy tasks in Node.js itself.

#### spawn()

- Launches a new process to run any executable.
- Streams stdout and stderr continuously.
  Good for long-running tasks where you want to process output in real-time.

#### exec()

- Launches a shell and runs a command.
  -Returns buffered output when the command finishes.
  Good for short commands where you don’t need streaming output.
  ⚠️ Not ideal for large output (buffer may overflow).

#### execFile()

- Similar to exec() but runs a file directly without a shell.
- Safer and faster than exec() because no shell is involved.
  Good for running binaries or scripts without needing shell commands

---

The order of execution starts by executing all the synchronus code first then it moves to event lookup
in event loop--
The microTask queue as first priorities which spilted into next tick and promise queue which next tick queue has highest
priorities followed by promise queue
Then it moves to timer queue executing each callback after it will check to microtask queue and execute if present
Then it moves to I/O queue same checking after execution in microTask queueue
Then check queueu which setImmediate callbacks falls under
Then followed by close queue and finsihes the first circle,if any other callback present it will continue the loop again
