<template>
	<div>
    <transition-group name="fadeLeft" tag="div">
			<TeamCard v-for="(team, index) in teams" :team="team" key="team.id"></TeamCard>
    </transition-group>
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
