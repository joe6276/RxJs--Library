
import { interval, of, skipLast } from "rxjs";

of(1,2,3,4,5,6,7,8,89,67).pipe(
    skipLast(4)
).subscribe(val=>{
    console.log(val);
    
})

