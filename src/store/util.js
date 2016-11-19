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
    for (let key in obj){
      let val = obj[key];
      if(cb(val))
        return val
    }
    return null
  },
  filter(obj, cb){
    let result = [];
    for (let key in obj){
      let val = obj[key];
      if(cb(val))
        result.push(val);
    }
    return result;
  }
}
