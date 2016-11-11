<template>
	<div class="ui centered grid">
		<div class="column">
			<table class="ui definition table">
				<thead>
					<tr>
						<th></th>
						<th class="center aligned">Team ID</th>
						<th class="center aligned">Preferred team size</th>
						<th class="center aligned">Current team members</th>
						<th class="center aligned">Team Page</th>
					</tr>
				</thead>
				<tbody>
					<tr v-for="(team, index) in teams">
						<td>{{team.name}}</td>
						<td class="center aligned">{{index}}</td>
						<td class="center aligned">
							<a class="ui teal circular label">{{team.size}}</a>
						</td>
						<td class="center aligned">
							<button @click="loadTeamMember(index)" class="ui labeled icon button">
								<i class="unhide icon"></i>
								View
							</button>
						</td>
						<td class="center aligned">
							<button @click="manageTeam(index)" class="ui labeled icon button">
								<i class="add user icon"></i>
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