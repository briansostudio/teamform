export default {
  toArray(obj){
    let result = [];
    for(var key in obj){
      let val = obj[key];
      val.id = key;
      result.push(val);
    }
    return result;
  }
}
