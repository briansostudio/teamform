<template>
	<div class="ui centered grid">
		<div class="row event-page">
			<div class="ui items">
				  <div class="item">
					<div class="image">
					  <i class="users icon massive teal"></i>
					</div>
					<div class="content ui left aligned segment">
					  <a class="header">Team Name: {{teamId.name}}</a>
					  <div class="meta">
						<span>Description: {{teamId.description}}</span>
					  </div>
					  <div class="description">
						<p>Leader Name: {{teamId.leader}}</p>
						<p>Number of members: </p>
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
	props: ['teamId']
}
</script>

<style>

</style>