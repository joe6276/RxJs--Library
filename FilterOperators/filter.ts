import { filter, interval, take } from "rxjs";

interval(200).pipe(
    filter(val=> val%2 ===0),
    take(5)
).subscribe(
    val=>console.log(val)
)