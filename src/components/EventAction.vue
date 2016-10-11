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
			events: this.$root.$firebaseRefs.events,
			event: {}
		}
	},
	methods: {
		createEvent: function(){
			if (this.isInputValid()) {
				const _this = this
				this.events.once("value").then((snapshot) => {
					for (var key in snapshot.val()){
						if (snapshot.val()[key] == _this.name) {
							swal(
								'Event create failed',
								'The event name has already been taken, please try again',
								'error'
							)
							return
						}
						continue
					}
					let eventKey = _this.events.push(_this.name).key
					_this.event[eventKey] = {
						name: _this.name,
						size: {
							max: 10,
							min: 1
						}
					}
					_this.$root.$firebaseRefs.root.update(_this.event)
					swal(
						'Event created',
						'Hit OK to proceed to your event page',
						'success'
					).then(function() {
						_this.$router.push({ name: 'login', params : { id: eventKey }})
					})
				})
			}
		},
		loadEvent: function(){
			if (this.isInputValid()) {
				const _this = this
				this.events.once("value").then((snapshot) => {
					for (var key in snapshot.val()){
						if (snapshot.val()[key] == _this.name) {
							_this.$router.push({ name: 'event', params : { id: key }})
							return
						}
						continue
					}
					swal(
						'Event not found',
						'The event name entered is does not exist, please try again',
						'error'
					)
				})
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
