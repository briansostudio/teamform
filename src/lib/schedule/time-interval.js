class TimeInterval {
  constructor(arg1, arg2){
    if(typeof arg1 === "undefined"){
      this.start = 0;
      this.end = 0;
    }else if(typeof arg1 === "object"){
      this.start = arg1.start;
      this.end = arg1.end;
    }else if(typeof arg2 === "undefined"){
      this.start = 0;
      this.end = arg1;
    }else{
      this.start = arg1;
      this.end = arg2;
    }

    if(this.start < 0){
      throw new Error(`TimeInterval: start value cannot be negative`);
    }
    if(this.start > this.end){
      throw new Error(`TimeInterval: start value(${this.start}) must be earlier than end value(${this.end})`);
    }
  }
  get length(){
    return this.end - this.start;
  }
  shift(offset){
    return new TimeInterval(this.start + offset, this.end + offset);
  }
  equal(other){
    return this.start === other.start && this.end === other.end;
  }

  /**
   * Check whether this Time interval is overlapped with other
   * @param other
   */
  overlap(other){
    let max = this.start > other.start ? this.start : other.start;
    let min = this.end < other.end ? this.end : other.end;
    return max < min;
  }

  /**
   * Combine with another time interval
   * @param other
   * @return [TimeInterval]
   */
  combine(other){
    let minStart, maxStart, minEnd, maxEnd;
    if(this.start < other.start){
      minStart = this.start;
      maxStart = other.start;
    }else{
      minStart = other.start;
      maxStart = this.start;
    }

    if(this.end < other.end){
      minEnd = this.end;
      maxEnd = other.end;
    }else{
      minEnd = other.end;
      maxEnd = this.end;
    }

    if(maxStart <= minEnd){
      return [new TimeInterval(minStart, maxEnd)];
    }else{
      return [this, other];
    }
  }
}
export default TimeInterval;
