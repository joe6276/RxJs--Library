
import {interval,bufferTime,take} from 'rxjs'

interval(100).pipe(
    bufferTime(1000, 3000),
    take(4)
    
).subscribe(d=>{
    console.log(d);
    
})
