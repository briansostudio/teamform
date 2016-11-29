<template>
    <div class="User">
        <el-row :gutter="24" type="flex" justify="space-around" align="center">
          <el-col :span="8">
              <el-breadcrumb separator="/">
              <el-breadcrumb-item :to="{path : `/event/${eventId}`}">{{eventName}}</el-breadcrumb-item>
              <el-breadcrumb-item>User</el-breadcrumb-item>
              </el-breadcrumb>
          </el-col>
        </el-row>
        <el-row :gutter="24" type="flex" justify="center" align="center">
            <el-col :span="4">
              <div class="ui card">
                <div class="image">
                  <img src="./assets/images/avatar.png" alt="">
                </div>
                <div class="content">
                  <p class="header">
                    {{viewingUser.name}}
                  </p>
                  <div class="meta">
                    No Team Yet
                  </div>
                  <div class="description">
                    {{viewingUser.description}}
                  </div>
                </div>
                <div v-if="isViewingCurrentUser" class="extra content">
                  <span class="right floated">
                    <a @click="editUser">
                      <i class="edit icon"></i>
                      Edit
                    </a>
                  </span>
                  <span>
                    <a @click="viewRequests">
                      <i class="add user icon"></i>
                      Requests
                    </a>
                  </span>
                </div>
              </div>
              <UserEditForm :user="viewingUser" :present="isEditingUser"></UserEditForm>
              <MyRequests :requests="currentUserRequests" :present="isRequestViewDisplaying"></MyRequests>
            </el-col>
            <el-col :span="12">
                <el-tabs :active-name="activeName" style="width:100%" @tab-click="tabClicked">
                  <el-tab-pane label="Skill" name="second">
                    <Radar :chartData="viewingUser.radarChartData" :options="radarOptions"></Radar>
                    <div v-if="isViewingCurrentUser">
                      <RadarSlideInput>
                      </RadarSlideInput>
                    </div>
                  </el-tab-pane>
                  <el-tab-pane label="Schedule" name="third"></el-tab-pane>
                </el-tabs> 
              <WeeklySchedule v-if="currentTab == 'third'" :editMode="true" :users="scheduleUsers" :currentUserId="viewingUser.id"></WeeklySchedule>
            </el-col>
        </el-row>
    </div>
</template>

<script>
  import WeeklySchedule from './components/WeeklySchedule/WeeklySchedule.vue'
  import MyRequests from './components/MyRequests'
  import UserEditForm from './components/UserEditForm'
  import { mapGetters } from 'vuex'
  import Radar from './components/Radar.vue'
  import RadarSlideInput from './components/RadarSlideInput'

  export default {
    data(){
      return {
        activeName:"second",
        currentTab:"second",
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
        'eventId',
        'eventName',
        'isEditingUser',
        'isRequestViewDisplaying'
      ])
    },
    methods: {
      editUser(){
        this.$store.dispatch('toggleEditMode')
      },
      viewRequests(){
        this.$store.dispatch('toggleRequestView')
      },
      tabClicked(tab){
          this.currentTab = tab.name;
      }
    },
    props: {},
    components: {UserEditForm, WeeklySchedule, MyRequests, Radar, RadarSlideInput}
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