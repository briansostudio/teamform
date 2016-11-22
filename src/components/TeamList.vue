<template>
	<div>
			<TeamCard v-for="(team, index) in teams" :team="team"></TeamCard>
	</div>
</template>

<script>
import TeamCard from './TeamCard.vue'

export default {
	methods: {
	},
  computed:{
    remainingScheduleTime(){

    }
  },
	props: ['teams'],
  components:{TeamCard}
}
</script>

<style>
</style>
