import { of, takeLast } from "rxjs";


of(1,2,3,4,5,6,7,8,9).pipe(
    takeLast(3)
).subscribe(
    val=>console.log(val)
    
)



