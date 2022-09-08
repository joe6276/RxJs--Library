import { interval, throttle,take, timer, tap } from "rxjs";

interval(500).pipe(
    take(10),
      tap(a=>console.log(`Source emitted ${a}`)),
    throttle(a=>{
        console.log(`Throttle Timer ends at ${a}, this is the Leading Value` );
        return timer(4000)
    } )
).subscribe(
       a=> console.log(`Subscribers get ${a}`)
)

