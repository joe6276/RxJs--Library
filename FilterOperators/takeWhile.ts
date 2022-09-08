

import { interval, takeWhile } from "rxjs";

interval(100). pipe(
    takeWhile(x=>x<5)
).subscribe(values=>console.log(values))