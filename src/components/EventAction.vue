<template>
	<div class="large ui buttons">
        <button class="ui positive button" v-on:click="createEvent">{{createEventTitle}}</button>
        <div class="or"></div>
        <button class="ui button">{{manageEventTitle}}</button>
    </div>
</template>

<script>
export default {
  data () {
    return {
      createEventTitle: 'Create Event',
      manageEventTitle: 'Manage Your Event'
    }
  },
  firebase: {
  },
  methods: {
  	createEvent: function(){
  		if (this.isInputValid()) {
  			console.log(this.name)
  		}
  	},
  	loadEvent: function(){
  		if (this.isInputValid()) {
  			console.log(this.name)
  		}
  	},
  	isInputValid: function(){
  		if (this.name == '') {
  			$('.ui.big.icon.input').popup({
          		on: 'manual',
          		position: 'top center',
          		title: 'Event name cannot be empty',
          		content: 'Please correct and retry'
        	})
        	$('.ui.big.icon.input').popup('toggle')
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