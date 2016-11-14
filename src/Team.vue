<template>
	<div class="ui centered grid">
		<div class="row event-page">
			<h1>Event Name: {{event.name}}</h1>
		</div>
		<div class="row">
			<TeamOverview :teamId="teams"></TeamOverview>
		</div>
		<div class = "footer"></div>
  </div>
</template>

<script>
import TeamOverview from './components/TeamOverview'

export default {
	data(){
		return {
			event: {
				name: 'hackUST',
				size: {
					max: 10,
					min: 1
				}
			},
			teams: {
				name: 'Love my wife',
				leader: 'Brian So',
				description: 'I love my Grace'
			}
		}
	},
	components:{
		TeamOverview
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