<template>
	<div class="ui centered grid event-page-main">
		<BasicUserStatus :user="currentUser" :team="userTeam"></BasicUserStatus>

    <EventOverview :events = "currentEvent"></EventOverview>

    <TeamSizeControl></TeamSizeControl>

		<div class="row">
			<h2 class="ui header">
				<i class="users icon"></i>
				<div class="content">
				Teams
				</div>
			</h2>
		</div>

		<div class="row">
			<div :class="userStatus === 'NO_TEAM' ? 'ui large action input' : 'ui large input'">
				<input type="text" placeholder="Enter your team name" class="add-team-input" v-model="teamName">
				<button v-if="userStatus === 'NO_TEAM'" class="ui teal left labeled icon button" @click="addTeam">
					<i class="add user icon"></i>
					Add Team
				</button>
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
  import {mapGetters} from 'vuex'
import TeamSizeControl from './components/TeamSizeControl'
import TeamList from './components/TeamList'
import EventOverview from './components/EventOverview'
import swal from 'sweetalert2'
import BasicUserStatus from './components/BasicUserStatus'
  import TeamCard from './components/TeamCard'

export default {
	data(){
		return {
			teamName: ''
		}
	},
  computed:{
    ...mapGetters(['userStatus', 'userTeam','currentUser','filteredTeams', 'currentEvent'])
  },
	methods:{
		fetchEvent: function(){
//			let _this = this
//			let ref = this.$root.$firebaseRefs.root
//			ref.on('value', (snapshot) => {
//				_this.event = snapshot.child(_this.$route.params.id).val()
//			})
		},
		updateEvent: function(){
			let update = {}
			let ref = this.$root.$firebaseRefs.root
			update[this.$route.params.id] = this.event
			ref.update(update)
		},
		addTeam: function(){
			this.$store.dispatch("team/createTeam",{name: this.teamName});
		}
	},
	components:{
		TeamSizeControl, TeamList, EventOverview, BasicUserStatus, TeamCard
	}
}
</script>

<style>
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
