<template>
	<div class="ui centered grid event-page-main">
		<BasicUserStatus :user="currentUser" :team="userTeam"></BasicUserStatus>

    <div class="row">
      <EventOverview :events = "currentEvent"></EventOverview>
    </div>
    <div class="row">
      <Countdown :Date="eventDeadline"></Countdown>
    </div>

		<div class="row">
			<h2 class="ui header">
				<i class="users icon"></i>
				<div class="content">
				Teams
				</div>
			</h2>
		</div>

		<div class="row">
      <div class="column">
        <div style="width: 400px; margin: 0 auto;">
          <div class="ui large input" style="width: 400px;">
            <input type="text" placeholder="Enter Team name to search" class="add-team-input" :value="localTeamFilterString" @input="onTeamNameInput($event.target.value)">
          </div>
        </div>
        <div style="display: flex; justify-content: center; align-items: center; margin-top:10px;">

          Sort Result By:&nbsp;<el-select style="margin-right: 10px;" v-model="localSortingCriteria" placeholder="Sort By">
            <el-option
              v-for="item in sortingOptions"
              :label="item.label"
              :value="item.value">
            </el-option>
          </el-select>

          <button v-if="userStatus === 'NO_TEAM'" :style="filteredTeams.length === 0 ? 'opacity:1;' : 'opacity:0'" class="ui teal labeled icon button add-team-button" @click="addTeam">
            <i class="add user icon"></i>
            Add Team
          </button>
        </div>
      </div>
		</div>

    <div v-if="userStatus !== 'NO_TEAM'" class="row">
      <div class="column">
        <TeamCard :team="userTeam"></TeamCard>
      </div>
    </div>

    <div class="row">
      <div class="column">
        <TeamList v-bind:teams="filteredTeams"></TeamList>
      </div>
    </div>


		<div class = "footer"></div>
  </div>
</template>

<script>
import {mapGetters, mapActions} from 'vuex'
import TeamList from './components/TeamList'
import EventOverview from './components/EventOverview'
import swal from 'sweetalert2'
import BasicUserStatus from './components/BasicUserStatus'
import TeamCard from './components/TeamCard'
import Countdown from './components/Countdown.vue'

export default {
	data(){
		return {
      eventDeadline: new Date(Date.now() + 86400000),
      localSortingCriteria: 'name',
      sortingOptions:[
        {label: 'Name', value: 'name'},
        {label: 'Influence', value: 'influence'},
        {label: 'Schedule Matched', value: 'schedule_matching'}
      ]
		}
	},
  computed:{
    ...mapGetters(['userStatus', 'userTeam','currentUser','filteredTeams', 'currentEvent','sortingCriteria','teamFilterString'])
  },
	methods:{
		addTeam: function(){
			this.$store.dispatch("team/createTeam",{name: this.localTeamFilterString});
		},
    onTeamNameInput(val){
		    this.localTeamFilterString = val;
      let text = val;
      setTimeout(()=>{
          if(this.localTeamFilterString === val){
            this.$store.dispatch('event/dispatchFilterStringChanged',val);
          }
      },250);
    },
    ...mapActions({
      'updateEventName':'updateEventName',
      'updateEventDescription':'updateEventDescription',
      "teamFilterStringUpdate":"event/dispatchFilterStringChanged"
    })
	},
  mounted(){
    this.$store.dispatch('event/dispatchFilterStringChanged','');
  },
  watch:{
    localSortingCriteria(val){
          this.$store.dispatch('event/dispatchSortCriteriaChanged',val);
      }
  },
	components:{
		TeamList, EventOverview, BasicUserStatus, TeamCard, Countdown
	}
}
</script>

<style>
  .add-team-button{
    transition: all .5s ease;
  }
  .ui.grid.event-page-main{
    max-width: 800px;
    margin-left: auto;
    margin-right: auto;
  }
	.event-page {
		margin-top: 100px;
	}
	.add-team-input{
		width: 100%;
	}
	.footer{
		margin-bottom: 5%;
	}
</style>
