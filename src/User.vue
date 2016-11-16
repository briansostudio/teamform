<template>
    <div class="User">
      <WeeklyScheduleTest></WeeklyScheduleTest>
      <MyRequests :requests = 'request'></MyRequests>
    </div>
</template>

<script>
  import WeeklyScheduleTest from './components/WeeklySchedule/WeeklyScheduleTest.vue'
  import MyRequests from './components/MyRequests.vue'
  export default {
      data(){
          return {
            request: [{events: 'Open New Issue', team: 'tim team'}, {events: 'Pull Request', team: 'Team Tim'}]
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
