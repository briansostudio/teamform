<template>
	<div class="ui centered grid">
		<BasicUserStatus></BasicUserStatus>
		<div class="row event-page">
			<h1>Event Name: {{event.name}}</h1>
		</div>
		<div class="row">
			<div class="ui grid">
				<div class="column">
					<TeamSizeControl type="max" :size="event.size.max" @valueChanged="updateEvent"></TeamSizeControl>
					<div class="ui buttons">
						<button class="ui button" @click="event.size.max-=1"><i class="minus icon"></i></button>
						<button class="ui button" @click="event.size.max+=1"><i class="plus icon"></i></button>
					</div>
				</div>
			</div>
		</div>
		<div class="row">
			<div class="ui grid">
				<div class="column">
					<TeamSizeControl type="min" :size="event.size.min" v-on:valueChanged="updateEvent"></TeamSizeControl>
					<div class="ui buttons">
						<button class="ui button" @click="event.size.min-=1"><i class="minus icon"></i></button>
						<button class="ui button" @click="event.size.min+=1"><i class="plus icon"></i></button>
					</div>
				</div>
			</div>
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
			<div class="ui large action input">
				<input type="text" placeholder="Enter your team name" class="add-team-input" v-model="teamName">
				<button class="ui teal left labeled icon button">
					<i class="add user icon"></i>
					Add Team
				</button>
			</div>
		</div>
		<!-- <div class="row">
			<TeamList v-if="event.hasOwnProperty('teams')" v-bind:teams="event.teams"></TeamList>
			<div v-else class="ui piled segment">
				<h2 class="ui icon header">
					<i class="hide icon"></i>
					<div class="content">
						No Teams data available
						<div class="sub header">To view teams in your event, add at least one team to the event
						</div>
					</div>
				</h2>
			</div>
		</div>-->
		<TeamList v-bind:teams="teams"></TeamList>
		<EventOverview :events = "event"></EventOverview>
		<div class = "footer"></div>
  </div>
</template>

<script>
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
					name: 'I love Grace',
					description: 'Brian So loves Grace'
				}
			}
		}
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
			let _this = this
			let ref = this.$root.db.ref(this.$route.params.id+'/teams')
			ref.push({
				name: _this.teamName,
				size: 5,
				members: null,
				leader: null
			})
			swal(
				'Added team to event: '+this.event.name,
				'The following team, '+_this.teamName+' has been added to your event',
				'success'
			).then(function(){
				_this.teamName = ''
			})
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
