<template>
  <div class="ui centered grid">
      <div class="row event-page">
        <h1>Event Admininstrative Panel</h1>
      </div>
      <div class ="row event-detail">
				<div class="eight wide column">
					<EventDetails></eventdetails>
				</div>
				<div class="eight wide column">
		  			<EventModificationForm></EventModificationForm>
				</div>
      </div>

        <div class="row">
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
		</div>
  </div>
</template>

<script>
import TeamSizeControl from './components/TeamSizeControl'
import TeamList from './components/TeamList'
import EventModificationForm from './components/EventModificationForm'
import EventDetails from './components/EventDetails'

export default {
created: function(){
		this.fetchEvent()
		},
	data(){
		return {
			event: {
				name: '',
				size: {
					max: 10,
					min: 1
				}
			},
			teamName: ''
		}
	},
	methods:{
		fetchEvent: function(){
			let _this = this
			let ref = this.$root.$firebaseRefs.root
			ref.on('value', (snapshot) => {
				_this.event = snapshot.child(_this.$route.params.id).val()
			})
		},
		updateEvent: function(){
			let update = {}
			let ref = this.$root.$firebaseRefs.root
			update[this.$route.params.id] = this.event
			ref.update(update)
		}
	},
	components:{
		TeamSizeControl, TeamList, EventModificationForm, EventDetails
	}
}

</script>

<style>
	.event-page {
		margin-top: 10%;
	}

	.event-detail{
		margin-left: 5%;
		margin-right: 5%;
	}

</style>
