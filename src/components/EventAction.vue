<template>
	<div class="large ui buttons">
        <button class="ui positive button" v-on:click="createEvent">{{createEventTitle}}</button>
        <div class="or"></div>
        <button class="ui button" v-on:click="loadEvent">{{manageEventTitle}}</button>
    </div>
</template>

<script>
import Firebase from 'firebase'

export default {
  created: function(){
	const fb = Firebase.initializeApp({
		apiKey: "AIzaSyB37sX4oAPk10vSdiUdmWehnnGJf4KXk-8",
		authDomain: "teamform-14254.firebaseapp.com",
		databaseURL: "https://teamform-14254.firebaseio.com",
		storageBucket: "teamform-14254.appspot.com",
		messagingSenderId: "250682606003"
	})
	this.db = fb.database()
  },
  data () {
    return {
      createEventTitle: 'Create Event',
      manageEventTitle: 'Manage Your Event',
      db: null
    }
  },
  methods: {
  	createEvent: function(){
  		if (this.isInputValid()) {
  			console.log(this.db)
  			console.log(this.name)
  		}
  	},
  	loadEvent: function(){
  		if (this.isInputValid()) {
  			console.log(this.name)
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