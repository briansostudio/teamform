/**
 * Created by brianso on 7/11/2016.
 */

// an algorithm in c++
// http://www.geeksforgeeks.org/merging-intervals/

function compareInterval(i1, i2)
{
  return (i1.start < i2.start);
}

export default function(arrOfIntervals){
  arrOfIntervals = arrOfIntervals.map(t=>{
    return {start:t.start, end:t.end}
  });
  let s;
  arrOfIntervals = arrOfIntervals.sort(compareInterval);
}
