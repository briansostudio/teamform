<template>
	<div class="ui centered grid">
		<div class="row">
			<h1>Event Name: {{event.name}}</h1>
		</div>
		<div class="row">
			<div class="ui grid">
				<div class="column">
					<TeamSizeControl type="max" :size="event.size.max" v-on:valueChanged="updateEvent"></TeamSizeControl>
					<div class="ui buttons">
						<button class="ui button" v-on:click="event.size.max-=1"><i class="minus icon"></i></button>
						<button class="ui button" v-on:click="event.size.max+=1"><i class="plus icon"></i></button>
					</div>
				</div>
			</div>
		</div>
		<div class="row">
			<div class="ui grid">
				<div class="column">
					<TeamSizeControl type="min" :size="event.size.min" v-on:valueChanged="updateEvent"></TeamSizeControl>
					<div class="ui buttons">
						<button class="ui button" v-on:click="event.size.min-=1"><i class="minus icon"></i></button>
						<button class="ui button" v-on:click="event.size.min+=1"><i class="plus icon"></i></button>
					</div>
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
			<TeamList></TeamList>
		</div>
  </div>
</template>

<script>
import TeamSizeControl from './components/TeamSizeControl'
import TeamList from './components/TeamList'

export default {
	created: function(){
		this.fetchEvent()
	},
	data(){
		return {
			event: {
				name: '',
				size: {
					max: 10,
					min: 1
				}
			}
		}
	},
	methods:{
		fetchEvent: function(){
			let _this = this
			let ref = this.$root.$firebaseRefs.root
			ref.on('value', (snapshot) => {
				_this.event = snapshot.child(_this.$route.params.id).val()
			})
		},
		updateEvent: function(){
			console.log(this.event.size);
		}
	},
	components:{
		TeamSizeControl, TeamList
	}
}
</script>