import { last, of } from "rxjs";

console.log('First');

of(1,4,5,3,56,7,8,9,10).pipe(
    last()
).subscribe(val=> console.log(val))


console.log('Second');

of(1,4,5,3,56,7,8,9,10).pipe(
    last(val=> val>0 && val%3 ===0)
).subscribe(val=> console.log(val))

