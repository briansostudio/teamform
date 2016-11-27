<template>
	<div class="ui centered grid">
		<div class="row manage-page">
			<h1>Team Name: </h1>
		</div>
		<div class="row">
			<div class="ui centered grid">
			<div class="">
				<div class="row">
					<h2 class="ui header">
						<i class="users icon"></i>
						<div class="content">
						Team members
						</div>
					</h2>
				</div>
				<table class="ui definition table">
					<thead>
						<tr>
							<th></th>
							<th class="center aligned">Name</th>
							<th class="center aligned">Remove member</th>
						</tr>
					</thead>
					<tbody>
						<tr v-for="(member, index) in team.members">
							<td>{{index}}</td>
							<td class="center aligned">{{member.name}}</td>
							<td class="center aligned">
								<button @click="manageTeam(index)" class="ui labeled icon button red">
									<i class="remove user icon"></i>
									Remove from team
								</button>
							</td>
						</tr>
					</tbody>
				</table>
			</div>
			<div class="">
				<div class="row">
					<h2 class="ui header">
						<i class="users icon"></i>
						<div class="content">
						Members requesting to join
						</div>
					</h2>
				</div>
				<table class="ui definition table">
					<thead>
						<tr>
							<th></th>
							<th class="center aligned">Name</th>
							<th class="center aligned">Add member</th>
						</tr>
					</thead>
					<tbody>
						<tr v-for="(request, index) in requests">
							<td>{{index}}</td>
							<td class="center aligned">{{request.member.name}}</td>
							<td class="center aligned">
								<button @click="" class="ui labeled icon button teal">
									<i class="add user icon"></i>
									Add to team
								</button>
							</td>
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
	methods:{

	},
  props:['team','requests']
}
</script>

<style>
	.manage-page {
		margin-top: 10%;
		margin-bottom: 5%;
	}
</style>
