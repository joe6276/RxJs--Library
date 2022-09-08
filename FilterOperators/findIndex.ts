

import{ findIndex, of} from 'rxjs'
of(1,2,3,4,5,6,7,8,0,9).pipe(
  findIndex(val=>val%5===0)
).subscribe(
    val=>console.log(val)  
)