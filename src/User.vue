<template>
    <div class="User">
      <UserStatus :user="viewingUser"></UserStatus>
      <WeeklySchedule :editMode="true" :users="scheduleUsers" :currentUserId="viewingUser.id"></WeeklySchedule>
      <MyRequests :requests = "request"></MyRequests>
    </div>
</template>

<script>
  import UserStatus from './components/UserStatus.vue'
  import WeeklySchedule from './components/WeeklySchedule/WeeklySchedule.vue'
  import MyRequests from './components/MyRequests.vue'
  import { mapGetters } from 'vuex'


  export default {
    data(){
      return {
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
    components: {UserStatus, WeeklySchedule, MyRequests}
  }
</script>

<style>
    .User {

    }
</style>
