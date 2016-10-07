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
  	say: function(){
  		console.log(this.eventName);
  	}
  },
  props: ['eventName']
}
</script>