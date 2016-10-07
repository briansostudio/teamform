<template>
	<div class="ui centered grid">
		<div class="column">
			<table class="ui definition table">
				<thead>
					<tr>
						<th></th>
						<th>Team ID</th>
						<th>Preferred team size</th>
						<th>Current team members</th>
						<th>Team Page</th>
					</tr>
				</thead>
				<tbody>
					<tr v-for="team in teams">
						<td>{{team.name}}</td>
						<td class="center aligned">{{team.id}}</td>
						<td class="center aligned">
							<a class="ui teal circular label">{{team.size}}</a>
						</td>
						<td class="center aligned">
							<button class="ui labeled icon button">
								<i class="unhide icon"></i>
								View
							</button>
						</td>
						<td class="center aligned">
							<button class="ui labeled icon button">
								<i class="check circle icon"></i>
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
  data() {
    return {
    	teams: [
    		{
    			id: '816599ec',
    			name: 'Team A',
    			size: 6
    		},
    		{
    			id: '564becc2',
    			name: 'Team B',
    			size: 8
    		},
    	]
    }
  },
  methods: {
  },
  props: []
}
</script>