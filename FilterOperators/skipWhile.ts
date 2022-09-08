import { interval, skipWhile, take } from "rxjs";

interval(100).pipe(
    skipWhile(x=>x<5),
      take(5)
).subscribe(
    val=>console.log(val)
)


