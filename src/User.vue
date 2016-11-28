<template>
    <div class="User">
        <el-row :gutter="24" type="flex" justify="space-around" align="center">
          <el-col>
              <el-breadcrumb separator="/">
              <el-breadcrumb-item :to="{path : `/event/${eventId}`}">Event</el-breadcrumb-item>
              <el-breadcrumb-item>User</el-breadcrumb-item>
              </el-breadcrumb>
          </el-col>
        </el-row>
        <el-row :gutter="24" type="flex" justify="center" align="center">
            <el-col :span="4">
              <div class="grid-content bg-purple">
                <h1 class="ui center aligned icon header">
                  <i class="user icon"></i>
                </h1>
              </div>
              <h1>{{viewingUser.name}}</h1>
              <h2>{{viewingUser.description}}</h2>
              </el-col>
            <el-col :span="12">
                <el-tabs :active-name="activeName" style="width:100%" @tab-click="tabClicked">
                  <el-tab-pane label="Overview" name="first">
                    <UserStatus :user="viewingUser"></UserStatus>
                  </el-tab-pane>
                  <el-tab-pane label="Skill" name="second">
                    <Radar :chartData="viewingUser.radarChartData" :options="radarOptions"></Radar>
                    <div v-if="isViewingCurrentUser">
                      <RadarSlideInput>
                      </RadarSlideInput>
                    </div>
                  </el-tab-pane>
                  <el-tab-pane label="Schedule" name="third"></el-tab-pane>
                  <el-tab-pane v-show="isViewingCurrentUser" label="Request" name="fourth">
                  </el-tab-pane>
                </el-tabs>
              <MyRequests v-show="currentTab === 'fourth'" :requests="currentUserRequests"></MyRequests>
              <WeeklySchedule v-if="currentTab == 'third'" :editMode="true" :users="scheduleUsers" :currentUserId="viewingUser.id"></WeeklySchedule>
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
  import RadarSlideInput from './components/RadarSlideInput'

  export default {
    data(){
      return {
        activeName:"first",
        currentTab:"first",
        userId: null,
        radarOptions:{
          legend:{
            display:false
          },
          scale:{
            pointLabels:{
              fontColor:"#00816A"
            },
            ticks: {
              max: 100,
              min: 0,
              stepSize: 25
            }
          }
        },
      }
    },
    computed: {
      scheduleUsers(){
        return {[this.viewingUser.id]: this.viewingUser};
      },
      ...mapGetters([
        "viewingUser",
        "isViewingCurrentUser",
        'currentUserRequests',
        'eventId'
      ])
    },
    methods: {
      tabClicked(tab){
          this.currentTab = tab.name;
      }
    },
    props: {},
    components: {UserStatus, WeeklySchedule, MyRequests, Radar, RadarSlideInput}
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

  .ui.center.aligned.icon.header
  {
    margin-top: auto;
    margin-bottom: auto;
  }

  .el-tab-pane
  {
    padding-left: 5%;
    padding-right: 5%;
  }
</style>
