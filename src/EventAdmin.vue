<template>
  <div class="ui centered grid stackable">
      <div class="row event-page">
        <h1>Event Management Panel</h1>
      </div>
      <div class ="row event-detail">
				<div class="eight wide column">
					<EventDetails></EventDetails>
				</div>
				<div class="eight wide column">
		  			<EventModificationForm></EventModificationForm>
				</div>
      </div>

        <div class="row event-detail">
			<TeamList v-if="event.hasOwnProperty('teams')" :teams="event.teams"></TeamList>
			<div v-else class="ui piled segment page">
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
import EventModificationForm from './components/EventModificationForm'
import EventDetails from './components/EventDetails'

export default {
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
	components:{
		EventModificationForm, EventDetails
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
