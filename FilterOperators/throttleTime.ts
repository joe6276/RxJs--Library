import { auditTime, interval, take, throttleTime } from "rxjs";

interval(500).pipe(
    take(20),
    throttleTime(4000)
).subscribe(
    val=>console.log(val)
    
)



