<template>
    <div class="Team">
      <div class="ui centered grid team-page">
        <BasicUserStatus :user="currentUser" :team="userTeam"></BasicUserStatus>
        <div class="row event-page">
          <h1>Event Name: {{event.name}}</h1>
        </div>
        <div class="row">
          <TeamOverview :team="viewingTeam"></TeamOverview>
        </div>
        <div class="row">
          <WeeklySchedule :isMergeMode="true" :users="teamSchedule" :currentUserId="currentUser.id"></WeeklySchedule>
        </div>

        <MemberList :team="viewingTeam"></MemberList>
      </div>
    </div>
</template>

<script>
  import BasicUserStatus from './components/BasicUserStatus'
  import TeamOverview from './components/TeamOverview'
  import WeeklySchedule from './components/WeeklySchedule/WeeklySchedule.vue'
  import MemberList from './components/MemberList'
  import { mapGetters } from 'vuex'
  export default {
      data(){
        return {
          event: {
            name: 'hackUST',
            size: {
              max: 10,
              min: 1
            }
          },
          teams: {
            name: 'Android Studio',
            leader: 'Android',
            description: 'Android Lovers come here'
          }
        }
      },
      computed: {
        ...mapGetters(["viewingTeam",'teamSchedule','currentUser','userTeam'])
      },
      methods: {},
      props: {},
      components: {TeamOverview, MemberList, WeeklySchedule, BasicUserStatus}
  }
</script>

<style scoped>
  .Team .ui.grid.team-page{
    max-width: 800px;
    margin-left: auto;
    margin-right: auto;
  }
    .add-team-input{
      width: 100%;
    }
    .footer{
      margin-bottom: 5%;
    }
</style>
