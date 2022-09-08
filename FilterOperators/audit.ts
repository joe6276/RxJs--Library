


import { audit, interval, timer,take, tap } from "rxjs";

interval(500).pipe(
    take(10),
    tap(a=>console.log(`Source emitted ${a}`)),
    audit(a=>{
       console.log(`Audit Timer ends at ${a} so we pick the previous value` );
       return  timer(4000)
    })
).subscribe(
    a=> console.log(`Subscribers get ${a}`)
    
)