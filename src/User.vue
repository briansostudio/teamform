<template>
    <div class="User">
      <UserStatus :user="viewingUser"></UserStatus>
      <Radar :chartData="chartData"></Radar>
      <WeeklySchedule :editMode="true" :users="scheduleUsers" :currentUserId="viewingUser.id"></WeeklySchedule>
      <MyRequests :requests = "request"></MyRequests>
    </div>
</template>

<script>
  import UserStatus from './components/UserStatus.vue'
  import WeeklySchedule from './components/WeeklySchedule/WeeklySchedule.vue'
  import MyRequests from './components/MyRequests.vue'
  import { mapGetters } from 'vuex'
  import Radar from './components/Radar.vue'


  export default {
    data(){
      return {
        chartData:{
          labels: ["Web", "Android", "iOS", "UI Design", "Server", "Custom 1", "Custom 2"],
          datasets: [{
            label: "Andrew",
            backgroundColor: "rgba(179,181,198,0.2)",
            borderColor: "rgba(179,181,198,1)",
            pointBackgroundColor: "rgba(179,181,198,1)",
            pointBorderColor: "#fff",
            pointHoverBackgroundColor: "#fff",
            pointHoverBorderColor: "rgba(179,181,198,1)",
            data: [60, 59, 90, 81, 56, 55, 40]
          }]
        },
        userId: null,
        request: [{events: 'Open New Issue', team: 'tim team'}, {events: 'Pull Request', team: 'Team Tim'}]
      }
    },
    computed: {
      scheduleUsers(){
        return {[this.viewingUser.id]: this.viewingUser};
      },
      ...mapGetters([
        "viewingUser",
        "isViewingCurrentUser"
      ])
    },
    methods: {},
    props: {},
    components: {UserStatus, WeeklySchedule, MyRequests, Radar}
  }
</script>

<style>
    .User {

    }
</style>
