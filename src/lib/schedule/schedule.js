/**
 * Created by brianso on 4/11/2016.
 */
import TimeInterval from './time-interval'
import Resolve from './schedule-resolve-helper'

export const SECOND = 1000;
export const MINUTE = 60 * SECOND;
export const HOUR = 60 * MINUTE;
export const DAY = 24 * HOUR;
export const WEEK = 7 * DAY;
export const SUNDAY = 0 * DAY;
export const MONDAY = 1 * DAY;
export const TUESDAY = 2 * DAY;
export const WEDNESDAY = 3 * DAY;
export const THURSDAY = 4 * DAY;
export const FRIDAY = 5 * DAY;
export const SATURDAY = 6 * DAY;


class Schedule{
  constructor(intervals){
    this.intervals = intervals || [];

    //validation
    for(let interval of this.intervals){
      if(interval.end > WEEK){
        throw new Error(`Schedule: time interval(${interval}) out of bound`);
      }
    }
  }

  /**
   * calculate the total time used in this weekly schedule
   * @returns {number}
   */
  calculateTotalTime(){
    let resolved = this.resolve();
    let time = 0;
    for(let interval of resolved.intervals){
      time+=interval.length;
    }
    return time;
  }

  calculateRemainingTimeInWeek(){
    return WEEK - this.calculateTotalTime();
  }

  /**
   * combine the schedule with another schedule
   * @return Schedule - the combined Schedule
   */
  combine(other){
    //one line code :)
    return new Schedule([
      ...this.intervals.map(t=>new TimeInterval(t)),
      ...other.intervals.map(t=>new TimeInterval(t))]);

    // let length = this.intervals.length + other.intervals.length;
    // let result = new Array(length);
    //
    // let i = 0;
    // for(let interval of this.intervals){
    //   result[i++] = new TimeInterval(interval);
    // }
    // for(let interval of other.intervals){
    //   result[i++] = new TimeInterval(interval);
    // }
    // return new Schedule(result);
  }

  /**
   * combine all overlapped time interval
   * @return Schedule - the resolved Schedule
   */
  resolve(){
    let result = Resolve(this.intervals);
    result = result.map(t => new TimeInterval(t));
    return new Schedule(result);
  }


  /**
   * project all intervals to a render friendly data structure
   * @return a new 2d array of time intervals that are not overlapped
   *  the first dimension represent the day of week, index 0 for sunday, 1 for monday and so on..
   *  the second dimension is the list of time intervals within that day
   *  the time interval have only three properties:
   *    start, end, count
   *  where count indicates how many overlapping of this interval
   */
  // project(){
  //   // possible inspiration
  //   // http://stackoverflow.com/questions/4322649/range-splitting-problem
  //   return [[],[],[],[],[],[],[]];
  // }

  print(){
    for(let t of this.intervals){
      console.log(`[${t.start},${t.end}]`);
    }
  }
}

export default Schedule;
