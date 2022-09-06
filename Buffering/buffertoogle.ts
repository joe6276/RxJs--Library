import{interval, bufferToggle,tap,take} from 'rxjs'
const opening = interval (600).pipe(tap(()=>console.log('Opening Buffer ')))

const closing=()=> interval(300).pipe(tap(()=>console.log('Closing Buffer')))


interval(100).pipe(
    tap(x=>console.log(x)),
    bufferToggle(opening,closing),
    take(4)
).subscribe(val=>{
    console.log(val);
    
})



