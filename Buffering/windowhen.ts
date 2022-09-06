
import { windowWhen, switchMap,interval, toArray, take } from "rxjs";
const closing=()=> interval(600)

interval(100).pipe(
    windowWhen(closing),
    take(4),
    switchMap(v=>v.pipe(toArray()))
).subscribe(v=>console.log(v))