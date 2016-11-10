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
  var schedule2 = new Schedule([
    new TimeInterval(86400 * 1000 + 3000 * 1000,86400 * 1000 + 6000 * 1000)
  ]);
  export default {
    data(){
      return {
        schedules:[schedule1, schedule2],
        colorIndex: 0,
        baseDate: new Date(BASE_DATE),
      }
    },
    computed:{
      events(){
        this.colorIndex = 0;
        var renderData = [];
        for(let schedule of this.schedules){
          let color = this.getColor();
          for(let interval of schedule.intervals){
            renderData.push({
              start:BASE_DATE + interval.start,
              end:BASE_DATE + interval.end,
              color: color
            });
          }
        }
        console.log(renderData);
        return renderData;
      }
    },
    methods:{
      getColor(){
        return colors[(this.colorIndex++) % colors.length];
      },
      callback(event, interval){
        var ti = new TimeInterval(interval.start.valueOf(), interval.end.valueOf()).shift(-BASE_DATE);
        switch(event){
          case "event-created":
            if(this.editable)
              this.schedules[0].intervals.push(ti);
            break;
        }
      }
    },
    props: {
      "editable":{
        default(){
          return false;
        }
      }
    },
    components:{FullCalendar}
  }
</script>

<style scoped>

</style>
