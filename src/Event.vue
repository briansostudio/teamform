<template>
	<div class="ui centered grid">
		<BasicUserStatus :user="currentUser" :team="userTeam"></BasicUserStatus>
		<div class="row event-page">
			<h1>Event Name: {{event.name}}</h1>
		</div>

    <TeamSizeControl></TeamSizeControl>
		<div class="row">
			<h2 class="ui header">
				<i class="users icon"></i>
				<div class="content">
				Teams
				</div>
			</h2>
		</div>
		<div v-if="userStatus === 'NO_TEAM'" class="row">
			<div class="ui large action input">
				<input type="text" placeholder="Enter your team name" class="add-team-input" v-model="teamName">
				<button class="ui teal left labeled icon button" @click="addTeam">
					<i class="add user icon"></i>
					Add Team
				</button>
			</div>
		</div>
    <div v-else class="ui centered grid">
      <div class="column">
        <div class="ui left aligned segment teamCard">
          <img class="ui small left floated image" />
          <h3 class="ui header teal">{{userTeam.name}}</h3>
          <div class="small">
            <span>Description: {{userTeam.description}}</span>
          </div>
        </div>
      </div>
    </div>
		<TeamList v-bind:teams="eventParticipatedTeams"></TeamList>
		<EventOverview :events = "event"></EventOverview>
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

export default {
	data(){
		return {
			event: {
				name: 'Sing K',
				size: {
					max: 10,
					min: 1
        },
        description: 'Toxic boys join Together :)',
        teamName: [
          {name: 'BrainSoStudio', numMember: '6'},
          {name: 'Ka D orange skin team',  numMember: '7'},
          {name: 'Tim Team',  numMember: '10'}
        ]
      },
			teams:{
				'100' : {
					name: 'happy together',
					description: 'so happy together~~'
				},
				'101' : {
					name: 'Android Studio',
					description: 'This is the team for Android lovers!!'
				}
			},
			teamName: ''
		}
	},
  computed:{
    ...mapGetters(['userStatus', 'userTeam','currentUser','eventParticipatedTeams'])
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
		TeamSizeControl, TeamList, EventOverview, BasicUserStatus
	}
}
</script>

<style>
	.event-page {
		margin-top: 5%;
	}
	.add-team-input{
		width: 100%;
	}
	.footer{
		margin-bottom: 5%;
	}
</style>
