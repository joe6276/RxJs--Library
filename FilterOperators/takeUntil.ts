
import { interval,timer, takeUntil } from "rxjs";


interval(100).pipe(
    takeUntil(timer(1000))
).subscribe(
    val=>console.log(val)
    
)

