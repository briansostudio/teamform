<template>
	<div class="ui centered grid">
		<div class="row event-page">
			<div class="ui items">
				  <div class="item">
					<div class="image">
					  <i class="users icon massive teal"></i>
					</div>
					<div class="content ui left aligned segment">
					  <a class="header">Team Name: {{team.name}}</a>
					  <div class="meta">
						<span>Description: {{team.description}}</span>
					  </div>
					  <div class="description">
						<p>Leader Name: {{team.leader.name}}</p>
						<p>Number of members: {{team.members.length}}</p>
					  </div>
					</div>
				  </div>
			</div>
		</div>
	</div>
</template>

<script>
//import RaderChart from './RaderChart.vue'
export default {
	props: ['team']
}
</script>

<style>

</style>
