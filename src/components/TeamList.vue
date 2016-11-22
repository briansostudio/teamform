<template>
	<div class="ui centered grid">	
		<div class="column">
			<transition-group name="fadeLeft" tag="div">
				<div v-for="(team, index) in teams" class="ui left aligned segment teamCard" :key="team.name" :data-index="index">
					<img class="ui small left floated image" />
					<h3 class="ui header teal">{{team.name}}</h3>
					<div class="small">
						<span>Description: {{team.description}}</span>
					</div>
				</div>
			</transition-group>
		</div>
	</div>
</template>

<script>
//import Rader from './components/Rader'

export default {
	methods: {

	},
	props: ['teams']
}
</script>

<style>
.teamCard{
	width: 600px;
}
</style>
