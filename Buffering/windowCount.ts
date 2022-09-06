

import {windowCount,take,switchMap,interval, toArray} from 'rxjs'

interval(100).pipe(
    windowCount(4,5),
    take(5),
    switchMap(w=>w.pipe(toArray()))
  
).
subscribe(values=>console.log(values))




