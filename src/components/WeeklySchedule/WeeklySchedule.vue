<template>
  <div>
    <full-calendar :events="events" :callback="callback"></full-calendar>
  </div>
</template>

<script>
  import FullCalendar from './FullCalendar'
  import {Schedule, TimeInterval} from '../../lib/schedule'

  var schedule1 = new Schedule([
    new TimeInterval(3000,86400 * 1000)
  ]);

  export default {
    data(){
      return {
        schedules:[schedule1]
      }
    },
    computed:{
      events(){
        return this.schedules[0].intervals.map(function(interval){
          console.log("OK");
          return {
            start:new Date((new Date()).getTime() + interval.start),
            end:new Date((new Date()).getTime() + interval.end),
            color: "#600"
          };
        });
      }
    },
    methods:{
      callback(){
        console.log(arguments);
      }
    },
    components:{FullCalendar}
  }
</script>

<style scoped>

</style>
