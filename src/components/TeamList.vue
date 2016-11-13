<template>
	<div class="ui centered grid">
		<div class="column">
			<table class="ui table">
				<thead>
					<tr>
						<th class="center aligned">Team Name</th>
						<th class="center aligned">Preferred team size</th>
						<th class="center aligned">Request to join team</th>
						<th class="center aligned">Team Page</th>
					</tr>
				</thead>
				<tbody>
					<tr v-for="(team, index) in teams">
						<td class="center aligned">{{team.name}}</td>
						<td class="center aligned">
							<a class="ui circular label">{{team.size}}</a>
						</td>
						<td class="center aligned"> <!-- function for member -->
							<button @click="loadTeamMember(index)" class="ui teal labeled icon button ">
								<i class="add circle  icon"></i>
								Join team
							</button>
						</td>
						<td class="center aligned"> <!-- function for team leader -->
							<button @click="manageTeam(index)" class="ui labeled icon button">
								<i class="setting icon"></i>
								Manage
							</button>
						</td>
					</tr>
				</tbody>
			</table>
		</div>
	</div>
</template>

<script>
export default {
	methods: {
		manageTeam: function(index){
			this.$router.push({ name: 'manage', params : { teamid: index }})
		},
		loadTeamMember: function(indexid){
			this.$router.push({ name: 'memberList', params : { teamid: indexid }})
		}
	},
	props: ['teams']
}
</script>

<style>
a.ui.label:hover, a.ui.labels .label:hover{
	cursor: default;
}
</style>
