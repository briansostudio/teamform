<template>
    <div class="User">
      <UserStatus :user="viewingUser"></UserStatus>
      <WeeklySchedule :editMode="true" :users="scheduleUsers" :currentUserId="viewingUser.id"></WeeklySchedule>
    </div>
</template>

<script>
  import UserStatus from './components/UserStatus.vue'
  import WeeklySchedule from './components/WeeklySchedule/WeeklySchedule.vue'
  import { mapGetters } from 'vuex'


  export default {
      data(){
          return {
            userId:null
          }
      },
      mounted(){
        this.userId = this.$route.params.userId;
        this.$store.dispatch("observeUser",{userId:this.userId});
      },
      beforeDestroy(){
        this.$store.dispatch("stopObserveUser",{userId:this.userId});
      },
      computed: {
        scheduleUsers(){
          let viewingUser = this.viewingUser;
          return {
            [viewingUser.id]:viewingUser
          }
        },
        ...mapGetters([
          "viewingUser",
          "isViewingCurrentUser"
        ])
      },
      methods: {

      },
      props: {},
      components: {UserStatus, WeeklySchedule}
  }
</script>

<style>
    .User {

    }
</style>
