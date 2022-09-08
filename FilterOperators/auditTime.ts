

import { auditTime, interval, take } from "rxjs"

interval(500).pipe(
    take(20),
    auditTime(4000)
).subscribe(
    val=>console.log(val)
    
)
