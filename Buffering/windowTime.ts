import { windowTime, take, interval, switchMap, toArray } from 'rxjs'

interval(100)
  .pipe(
    windowTime(1000, 3000),
    take(10),
    switchMap((v) => v.pipe(toArray())),
  )
  .subscribe((values) => {
    console.log(values)
  })
