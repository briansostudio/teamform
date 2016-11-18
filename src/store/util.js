export default {
  toArray(obj){
    let result = [];
    for(var key in obj){
      let val = obj[key];
      val.id = key;
      result.push(val);
    }
    return result;
  },
  find(obj, cb){
    for (var key in obj){
      var val = obj[key];
      if(cb(val))
        return val
    }
    return null
  }
}
