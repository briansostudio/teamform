<template>
    <div class="User">
        <el-row :gutter="24" type="flex" justify="center" align="center">
            <el-col :span="4">
              <div class="grid-content bg-purple">
                <h1 class="ui center aligned icon header">
                  <i class="user icon"></i>
                </h1>
                <!--<h1>
                <i class="circular user icon" style="width:100%"></i>
                <h1>-->
              </div>
              <!--<i class="grid-content circular user icon"></i>-->
              <h1>Hong Ng</h1>
              </el-col>
            <el-col :span="12">
                <el-tabs :active-name="activeName" style="width:100%">
                  <el-tab-pane label="Overview" name="first">
                    <UserStatus :user="viewingUser"></UserStatus>
                  </el-tab-pane>
                  <el-tab-pane label="Skill" name="second">
                      <Radar :chartData="chartData"></Radar>
                  </el-tab-pane>
                  <el-tab-pane label="Schedule" name="third">
                      <WeeklySchedule :editMode="true" :users="scheduleUsers" :currentUserId="viewingUser.id"></WeeklySchedule>
                  </el-tab-pane>
                  <el-tab-pane label="Request" name="fourth">
                      <MyRequests :requests="request"></MyRequests>
                  </el-tab-pane>
                </el-tabs>
            </el-col>
        </el-row>
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
.el-row {
    margin-bottom: 20px;
    &:last-child {
      margin-bottom: 0;
    }
  }
  .el-col {
    border-radius: 4px;
  }
  .bg-purple-dark {
    background: #99a9bf;
  }
  .bg-purple {
    background: #d3dce6;
  }
  .bg-purple-light {
    background: #e5e9f2;
  }
  .grid-content {
    border-radius: 4px;
    min-height: 36px;
    height: 200px;
    display: -webkit-flex;
    display: flex;
    -webkit-flex-wrap: wrap;
    flex-wrap: wrap;
    -webkit-align-content: center;
    align-content: center;
  }
  .row-bg {
    padding: 10px 0;
    background-color: #f9fafc;
  }

  .el-tabs__item.is-active {
    color: #00FA9A;
  }

  .el-tabs__active-bar {
    background-color: #00FA9A;
  }

  .User {
    margin-top: 5%;
  }
</style>
