<template>
  <div class="ui centered grid stackable">
      <div class="row event-page">
        <h1>Event Management Panel</h1>
      </div>
      <div class ="row event-detail">
				<div class="twelve wide column">
		  			<EventModificationForm></EventModificationForm>
				</div>
      </div>
        <div class="row event-detail">
			<TeamList :teams="allTeams"></TeamList>
		</div>
  </div>
</template>

<script>
import EventModificationForm from './components/EventModificationForm'
import EventDetails from './components/EventDetails'
import TeamList from './components/TeamList'
import { mapGetters } from 'vuex'

export default {
	computed: {
		...mapGetters(['allTeams'])
	},
	components:{
		EventModificationForm, EventDetails, TeamList
	}
}

</script>

<style>

	.event-detail{
		margin-left: 5%;
		margin-right: 5%;
	}

</style>
