import {interval,window,switchMap,toArray, take} from 'rxjs'

interval(100).pipe(
    window(interval(1000)),
    take(5),
    switchMap(val=> val.pipe(toArray()))
).
subscribe(values=>console.log(values))

