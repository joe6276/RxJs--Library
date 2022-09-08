import { Observable, tap, throwError, timeout } from "rxjs";

const sourceObservable= new Observable(observer=>{
    observer.next('First value')
    setTimeout(()=>observer.next('Second Value'), 200)
    setTimeout(()=>observer.next('Third Value'), 600)
    setTimeout(()=>observer.next('Fourth Value'), 800)
})
sourceObservable.pipe(
  timeout(new Date("Wed Sep 07 2022 04:19:00 GMT+0300 (East Africa Time)"))
).subscribe(
    val=>console.log(val),
    err=>console.log(err.message)     
)


  