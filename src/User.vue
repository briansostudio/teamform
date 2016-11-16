<template>
    <div class="User">
      <WeeklyScheduleTest></WeeklyScheduleTest>
      <MyRequests :request = 'request'></MyRequests>
    </div>
</template>

<script>
  import WeeklyScheduleTest from './components/WeeklySchedule/WeeklyScheduleTest.vue'
  import MyRequests from './components/MyRequests.vue'
  export default {
      data(){
          return {
            request: [{event: 'Open New Issue', team: 'tim team'}, {event: 'Pull Request', team: 'Team Tim'}]
          },
      computed: {},
      methods: {},
      props: {},
      components: {WeeklyScheduleTest, MyRequests}
  }
</script>

<style>
    .User {

    }
</style>
