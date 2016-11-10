<template>
  <div>
    <full-calendar :defaultDate="baseDate" :events="events" :callback="callback"></full-calendar>
  </div>
</template>

<script>
  import FullCalendar from './FullCalendar'
  import {Schedule, TimeInterval} from '../../lib/schedule'
  import colors from './colors';
  import moment from 'moment';

  const BASE_DATE = moment().utcOffset(0).day(0).hour(0).minute(0).second(0).millisecond(0).valueOf();

  var schedule1 = new Schedule([
    new TimeInterval(0,86400 * 1000)
  ]);

  export default {
    data(){
      return {
        schedules:[schedule1],
        colorIndex: 0,
        baseDate: new Date(BASE_DATE),
      }
    },
    computed:{
      events(){
        return this.schedules[0].intervals.map((interval) => {
          return {
            start:BASE_DATE + interval.start,
            end:BASE_DATE + interval.end,
            color: this.getColor()
          };
        });
      }
    },
    methods:{
      getColor(){
        return colors[(this.colorIndex++) % colors.length];
      },
      callback(event, interval){
        console.log(event);
        console.log(interval.start.toString());
        console.log(interval.end.toString());
        //var ti = new TimeInterval(interval.start.valueOf(), interval.end.valueOf()).shift(-BASE_DATE);
        //console.log(event, ti);
      }
    },
    components:{FullCalendar}
  }
</script>

<style scoped>

</style>
