

import{ elementAt, of} from 'rxjs'
of(1,2,3,4,5,6,7,8,0,9).pipe(
  elementAt(3)
).subscribe(
    val=>console.log(val)  
)