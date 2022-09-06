import {interval,take,bufferCount } from 'rxjs'
interval(100).pipe(
    bufferCount(4,3),
    take(4)
    
).subscribe(d=>{
    console.log(d);
    
})

// Buffers the source Observable values until the size hits the maximum bufferSize given.
// // Buffers a number of values from the source Observable by bufferSize then emits the buffer and clears it, and starts a new buffer each startBufferEvery values
