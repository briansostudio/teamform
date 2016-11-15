<template>
	<div class="ui centered grid">
		<BasicUserStatus></BasicUserStatus>
		<div class="row event-page">
			<h1>Event Name: {{event.name}}</h1>
		</div>
		<div class="row">
			<div class="ui grid">
				<div class="column">
					<TeamSizeControl type="max" size="5"></TeamSizeControl>
				</div>
			</div>
		</div>
		<div class="row">
			<div class="ui grid">
				<div class="column">
					<TeamSizeControl type="min" size="10"></TeamSizeControl>
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
		<TeamList v-bind:teams="teams"></TeamList>
		<div class = "footer"></div>
  </div>
</template>

<script>
import TeamSizeControl from './components/TeamSizeControl'
import TeamList from './components/TeamList'
import swal from 'sweetalert2'
import BasicUserStatus from './components/BasicUserStatus'

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
			teams:{
				'100' : {
					name: 'happy together',
					description: 'so happy together~~'
				},
				'101' : {
					name: 'I love Grace',
					description: 'Brian So loves Grace'
				}
			},
			teamName: ''
		}
	},
	components:{
		TeamSizeControl, TeamList, BasicUserStatus
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
