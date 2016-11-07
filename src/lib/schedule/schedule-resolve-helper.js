/**
 * Created by brianso on 7/11/2016.
 */

// an algorithm in c++
// http://www.geeksforgeeks.org/merging-intervals/

function compareInterval(a, b)
{
  return a.start - b.start;
}

export default function(arr){
  let n = arr.length;
  //copy array
  arr = arr.map(t=>{
    return {start:t.start, end:t.end}
  });
  arr = arr.sort(compareInterval);
  for(let t of arr){
    console.log(`[${t.start},${t.end}]`);
  }
  let s = [];
  s.push(arr[0]);

  for (let i = 1 ; i < n; i++)
  {
    // get interval from stack top
    var top = s[s.length-1];

    // if current interval is not overlapping with stack top,
    // push it to the stack
    if (top.end < arr[i].start)
      s.push(arr[i]);

    // Otherwise update the ending time of top if ending of current
    // interval is more
    else if (top.end < arr[i].end)
    {
      top.end = arr[i].end;
      s.pop();
      s.push(top);
    }
  }
  return s;
}
