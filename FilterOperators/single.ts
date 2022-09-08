
import{of, single} from 'rxjs'

console.log('When Only one Value Matches');
of(1,2,3,4,5,6,7,8,0,9).pipe(
    single(val=> val===5)
).subscribe(
    val=> console.log(val)
)

console.log( 'When there is more than one Matching Value');
of(1,2,3,4,5,5,6,7,8,0,9).pipe(
    single(val=> val===5)
).subscribe(
val=>console.log(val) ,
error=> console.log(error.message)
)


console.log( 'When there is No Matching Value');
of(1,2,3,4,6,7,8,0,9).pipe(
    single(val=> val===5)
).subscribe(
val=>console.log(val) ,
error=> console.log(error.message)
)



