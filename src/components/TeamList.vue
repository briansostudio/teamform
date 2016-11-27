<template>
	<div>
    <div v-if="teams.length > 0">
      <transition-group name="fadeLeft" tag="div">
			  <TeamCard v-for="(team, index) in teams" :team="team" key="team.id"></TeamCard>
      </transition-group>
    </div>
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
</template>

<script>
import TeamCard from './TeamCard.vue'

export default {
	methods: {
	},
  computed:{
  },
	props: ['teams'],
  components:{
    TeamCard
  }
}
</script>

<style>
</style>
