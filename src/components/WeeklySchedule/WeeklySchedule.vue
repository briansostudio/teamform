<template>
  <div>
    <full-calendar :defaultDate="baseDate" :events="events" :callback="callback" :editable="false"></full-calendar>
    <div class="ui left floated compact segment">
      <div class="ui slider checkbox">
        <input type="checkbox" v-model="mergeMode">
        <label>View schedule together</label>
      </div>
      totalHours : {{totalHours}} |
      availableHours : {{availableHours}} |

    </div>
    <div v-if="selectedInterval !== null" class="ui right floated compact segment">
      selectedInterval: {{selectedInterval.start}} - {{selectedInterval.end}}
      <input class="ui button" type="button" value="remove" @click="removeSelectedInterval()">
    </div>
    <div style="clear:both"></div>
  </div>
</template>

<script>
  import FullCalendar from './FullCalendar'
  import {Schedule, TimeInterval, Consts} from '../../lib/schedule'
  import colors from './colors';
  import moment from 'moment';

  const BASE_DATE = moment().utcOffset(0).day(0).hour(0).minute(0).second(0).millisecond(0).valueOf();
  const MERGED_COLOR = "#1abc9c";

  export default {
    data(){
      return {
        colorIndex: 0,
        baseDate: new Date(BASE_DATE),
        mergeMode: false,
        selectedIntervalId: "",
      }
    },
    computed:{
      selectedInterval(){
        return this.users[this.currentUserId].schedule.intervals[this.selectedIntervalId] || null;
      },
      resolved(){
        let intervals = [];
        for (let userId in this.users) {
          let user = this.users[userId];
          for (let intervalId in user.schedule.intervals) {
            let interval = user.schedule.intervals[intervalId];
            intervals.push(interval);
          }
        }
        let schedule = new Schedule(intervals);
        return schedule.resolve();
      },
      totalHours(){
        return this.resolved.calculateTotalTime() / Consts.HOUR;
      },
      availableHours(){
        return this.resolved.calculateRemainingTimeInWeek() / Consts.HOUR;
      },
      events(){
        this.colorIndex = 0;
        var renderData = [];
        if(this.mergeMode){
          let schedule = this.resolved;
          for (let interval of schedule.intervals) {
            renderData.push({
              start: BASE_DATE + interval.start,
              end: BASE_DATE + interval.end,
              color: MERGED_COLOR,
              editable: false
            });
          }
        }else {
          for (let userId in this.users) {
            let user = this.users[userId];
            let color = this.getColor();
            let isCurrentUser = userId == this.currentUserId;
            for (let intervalId in user.schedule.intervals) {
              let interval = user.schedule.intervals[intervalId];
              renderData.push({
                start: BASE_DATE + interval.start,
                end: BASE_DATE + interval.end,
                color: color,
                title: user.name,
                user_id:userId,
                interval_id: intervalId,
                editable: isCurrentUser && this.editMode
              });
            }
          }
        }
        return renderData;
      }
    },
    methods:{
      removeSelectedInterval(){
        this.$store.dispatch("schedule/removeInterval", {id:this.selectedIntervalId});
      },
      getColor(){
        return colors[(this.colorIndex++) % colors.length];
      },
      callback(event, interval){
        if(!this.editMode)
          return false;
        if(this.mergeMode)
          return false;
        if(event !== "event-created" && interval.user_id !== this.currentUserId)
          return false;
        console.log(event);
        var ti = new TimeInterval(interval.start.valueOf(), interval.end.valueOf()).shift(-BASE_DATE);
        switch(event){
          case "event-created":
            this.$store.dispatch("schedule/createInterval", {interval: ti});
            break;
          case "event-resize":
          case "event-drop":
            this.$store.dispatch("schedule/moveInterval", {id:interval.interval_id, interval: ti});
            break;
        }
        this.selectedIntervalId = interval.interval_id;
      }
    },
    props: {
      editMode: {default:()=>false},
      users: {default:()=>{}},
      currentUserId: {default:()=>undefined}
    },
    components:{FullCalendar}
  }
</script>

<style scoped>

</style>
