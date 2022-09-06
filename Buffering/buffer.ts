import {interval,buffer,take} from 'rxjs'
interval(100).pipe(
    buffer(interval(1000)),
    take(4)
    
).subscribe(d=>{
    console.log(d);
    
})

//#region Buffer Operator
// Buffers the incoming Observable values until the given closingNotifier Observable emits a value, at which point it emits the buffer on the output Observable and starts a new buffer internally, awaiting the next time closingNotifier emits.


//#region  End of Buffer operator


