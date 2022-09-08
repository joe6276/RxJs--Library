

import { interval, map, mergeMap, of, retry, throwError } from "rxjs";
 interval(200).pipe(
    mergeMap(x=> x>5? throwError(()=>'An Error Occured'): of(x)),
    retry(2)
 ).subscribe(
    next=> console.log(next),
    error=>console.log(error)
 )




 