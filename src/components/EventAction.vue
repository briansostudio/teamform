<template>
	<div class="large ui buttons">
        <button class="ui positive button" v-on:click="say">{{createEventTitle}}</button>
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
  methods: {
  	say: () => {
  		if (this.eventName == '') {
        $('.ui.big.icon.input').popup({
          on: 'manual',
          position: 'top center',
          title: 'Event name cannot be empty',
          content: 'Please correct and retry'
        })
        $('.ui.big.icon.input').popup('toggle')
      }
      else {
        alert(this.eventName)
      }
  	}
  },
  props: ['eventName']
}
</script>