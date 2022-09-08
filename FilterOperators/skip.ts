import { interval, of, skip, take } from "rxjs";
interval(200).pipe(
    take(10),
    skip(5)
).subscribe(values=>{
    console.log(values);
    
}, err=>console.log(err)

)

