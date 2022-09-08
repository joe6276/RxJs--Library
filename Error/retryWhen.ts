import { delayWhen, interval, map, retryWhen, tap, timer} from "rxjs";

const source= interval(1000)

source.pipe(
    map(value=>{
        if(value>5){
            throw value
        }
        return value
    }),
    retryWhen(errors=> errors.pipe(
            tap(val=>console.log(val)),
            delayWhen(()=>timer(4000))
        )
        
    )
).subscribe(value=>console.log(value))