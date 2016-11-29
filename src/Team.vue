<template>
  <div>
    <div class="Team">
      <div class="ui centered grid team-page">
        <BasicUserStatus :user="currentUser" :team="userTeam"></BasicUserStatus>

        <div class="row event-page">
          <div class="column">
              <el-breadcrumb separator="/">
              <el-breadcrumb-item :to="{path : `/event/${event.id}/`}">{{event.name}}</el-breadcrumb-item>
              <el-breadcrumb-item>{{viewingTeam.name}}</el-breadcrumb-item>
              </el-breadcrumb>
          </div>
        </div>
        <div class="row">
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
  </div>
</template>

<script>
  import TeamActions from './components/TeamActions.vue'
  import JoinRequest from './components/JoinRequest.vue'
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
        ...mapGetters(["viewingTeam",'teamSchedule','currentUser','userTeam','isLeaderOfViewingTeam','isMemberOfViewingTeam']),
      },
      methods: {},
      props: {},
      components: {TeamOverview, MemberList, WeeklySchedule, BasicUserStatus, JoinRequest, TeamActions}
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
