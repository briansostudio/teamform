<template>
	<div class="ui centered grid">
	<div class="row event-page">
	</div>
		<div class="row">
			<h2 class="ui header">
				<div class="content">
				team.name <!-- team name -->
				</div>
			</h2>
		</div>
		<div class="row">
			<h2 class="ui header">
				<i class="child icon"></i>
				<div class="content">
				team.leadername <!-- team leader name -->
				</div>
			</h2>
		</div>
	<div class="row">
		<div class="ui grid">
		<div class="column">
			<table class="ui definition table">
				<thead>
					<tr>
						<th></th>
						<th class="center aligned">Team Member Name</th>
					</tr>
				</thead>
				<tbody>
					<tr v-for="(team, index) in teams">
						<td>{{index}}</td>
						<td class="center aligned">Team Member Name</td>
					</tr>
				</tbody>
			</table>
		</div>
		</div>
		</div>
	</div>
</template>

<script>
export default {
	props: ['']
}
</script>

<style>
	.event-page {
		margin-top: 10%;
	}
	.add-team-input{
		width: 100%;
	}
</style>