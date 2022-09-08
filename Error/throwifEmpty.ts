import { of, throwIfEmpty } from "rxjs";

of().pipe(
    throwIfEmpty()
).subscribe(

v=>console.log(v),
err=>console.log(err.message)

)