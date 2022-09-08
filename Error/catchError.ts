import {of,catchError,map} from 'rxjs'
of(1,2,3,4,5,6,7,8).pipe(
    map(x=>{
        if(x===7){
           throw ('Error Occured')
        }
        return x
    }),
    catchError(error=>{
        return of(error)
    })

).subscribe(val=>{
    console.log(val),

    err=>{
        console.log(err);   
    }
    
})