

import {interval, sample} from "rxjs";
const notifier =interval(4000)

interval(1000).pipe(
    sample(notifier)
).subscribe(
    val=>console.log(val)
    
)