<template>
	<div class="large ui buttons">
		<button class="ui positive button" @click="createEvent">{{createEventTitle}}</button>
		<div class="or"></div>
		<button class="ui button" @click="loadEvent">{{manageEventTitle}}</button>
	</div>
</template>

<script>
export default {
	data () {
		return {
			createEventTitle: 'Create Event',
			manageEventTitle: 'Manage Your Event',
			event: {}
		}
	},
	methods: {
		createEvent: function(){
			if (this.isInputValid()){
				this.$store.dispatch('createEvent', this.name)
			}
		},
		loadEvent: function(){
			if (this.isInputValid()) {
				this.$store.dispatch('loadEvent', this.name)
			}
		},
		isInputValid: function(){
			if (!this.name) {
				this.$emit('invalidate')
					return false
			}
			else{
				return true
			}
		}
	},
	props: ['name']
}
</script>