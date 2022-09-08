import { interval, skipUntil, take, timer } from "rxjs";

interval(100).pipe(
    skipUntil(timer(500)),
    take(10)
).subscribe(val=>{
    console.log(val);
    
})

