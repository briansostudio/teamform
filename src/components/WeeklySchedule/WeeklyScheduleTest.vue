<template>
  <WeeklySchedule ref="weeklySchedule" style="width:80%; margin:0 auto;" :users="users" :currentUserId="currentUserId" :editMode="true"></WeeklySchedule>
</template>
<script>
  import {Schedule, TimeInterval, Consts} from '../../lib/schedule'
  import WeeklySchedule from './WeeklySchedule.vue'

  var users = {
    ":userId-1": {
      name: "Brian",
      schedule: {
        intervals: {
          ":intervalId-1": {
            start: Consts.HOUR * 9,
            end: Consts.HOUR * 17
          },
          ":intervalId-2": {
            start: Consts.FRIDAY + Consts.HOUR * 9,
            end: Consts.FRIDAY + Consts.HOUR * 12
          },
          ":intervalId-3": {
            start: Consts.FRIDAY + Consts.HOUR * 14,
            end: Consts.FRIDAY + Consts.HOUR * 17
          }
        }
      }
    },
    ":userId-2": {
      name: "Kris",
      schedule: {
        intervals: {
          ":intervalId-1": {
            start: Consts.WEDNESDAY + Consts.HOUR * 12,
            end: Consts.WEDNESDAY + Consts.HOUR * 18
          },
          ":intervalId-2": {
            start: Consts.FRIDAY + Consts.HOUR * 12,
            end: Consts.FRIDAY + Consts.HOUR * 18
          }
        }
      }
    }
  };

  export default {
    data(){
      return {
        users:users,
        currentUserId:":userId-1"
      }
    },
    computed:{

    },
    methods:{

    },
    props: {

    },
    components:{ WeeklySchedule }
  }
</script>
