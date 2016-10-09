<template>
  <div id="app" class="ui centered grid">
      <div class="row event-page">
        <AppTitle></AppTitle>
      </div>
      <div class="row">
        <div class="ui big icon input">
          <input type="text" v-model="eventInput" v-on:focus="hideWarning" placeholder="Enter keyword to find your event">
          <i class="search icon"></i>
        </div>
      </div>
      <div class="row">
        <event-action :name="eventInput" v-on:invalidate="warningPrompt"></event-action>
      </div>
  </div>
</template>

<script>
import AppTitle from './components/AppTitle'
import EventAction from './components/EventAction'

export default {
  data() {
    return {
      eventInput: ''
    }
  },
  components: {
    AppTitle, EventAction
  },
  methods: {
    hideWarning : () => {
      $('.ui.big.icon.input').popup('hide');
    },
    warningPrompt: () => {
		$('.ui.big.icon.input').popup({
			on: 'manual',
			position: 'top center',
			title: 'Event name cannot be empty',
			content: 'Please correct and retry'
		})
		$('.ui.big.icon.input').popup('toggle')
	}
  }
}
</script>

<style>

html {
  height: 100%;
}

.event-page {
  margin-top: 15%;
}

.ui.big.icon.input {
  width: 50%;
}

</style>
