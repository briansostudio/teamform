<template>
  <div>
    <full-calendar :events="events"></full-calendar>
  </div>
</template>

<script>
  import {Schedule, TimeInterval} from '../../lib/schedule'

  var schedule1 = new Schedule([
    new TimeInterval(3000,4000)
  ]);

  export default {
    data(){
      return {
        schedules:[schedule1]
      }
    },
    computed:{
      events(){
        return this.schedules[0].map(interval=>{
          return {
            start:interval.start,
            end:interval.end,
            color: "#600"
          }
        });
      }
    },
    methods:{

    }
  }
</script>

<style scoped>

</style>
