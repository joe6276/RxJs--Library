

import { first, interval } from "rxjs";
interval(1000).pipe(
    first(val=>val%3===0 && val>0)
).subscribe(
    val=>console.log(val)  
)


