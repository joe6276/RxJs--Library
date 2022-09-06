import { bufferWhen , interval, take} from 'rxjs'

const closing=()=> interval(500)

interval(100).pipe(
    bufferWhen(closing),
    take(5)
).subscribe(val=>{
    console.log(val);
    
})