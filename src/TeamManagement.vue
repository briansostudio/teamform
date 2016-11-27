<template>
    <div class="TeamManagement">
      <el-row :gutter="24" type="flex" justify="center" align="center">
        <el-tabs>
          <br>
          <el-tab-pane label="Overview" name="overview">
            <TeamOverviewEdit :team="viewingTeam"></TeamOverviewEdit>
          </el-tab-pane>
          <el-tab-pane label="Member Management" name="second">
            <MemberListEdit :team="viewingTeam"></MemberListEdit>
            <br>
            <RequestList :requests="viewingTeamRequests"></RequestList>
            <br>
          </el-tab-pane>
        </el-tabs>
      </el-row>
    </div>
</template>

<script>
  import Manage from  './components/Manage'
  import {mapGetters} from 'vuex'
  import TeamOverviewEdit from './components/TeamOverviewEdit.vue'
  import MemberListEdit from './components/MemberListEdit.vue'
  import RequestList from './components/RequestList.vue'
  export default {
      data(){
          return {}
      },
      computed: {
        ...mapGetters(['viewingTeam','viewingTeamRequests'])
      },
      methods: {},
      props: {},
      components: {Manage, TeamOverviewEdit, MemberListEdit, RequestList}
  }
</script>

<style>
    .TeamManagement {

    }
</style>
