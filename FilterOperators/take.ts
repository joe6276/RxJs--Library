
import { interval, take } from "rxjs";

interval(100).pipe(
    take(5)
).subscribe(
    val=>console.log(val) 
)



