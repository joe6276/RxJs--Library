

import { windowToggle, switchMap,interval, tap, take,toArray } from "rxjs";
const opening = interval (600).pipe(tap(()=>console.log('Opening Buffer ')))
const closing=()=> interval(300).pipe(tap(()=>console.log('Closing Buffer')))
interval(100).pipe(
    tap(x=>console.log(x)),
    windowToggle(opening,closing),
    take(4),
    switchMap(V=>V.pipe(toArray()))
).subscribe(val=>{
    console.log(val);
    
})