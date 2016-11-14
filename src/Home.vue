<template>
  <div class="ui centered grid">
      <fork-me></fork-me>
      <BasicUserStatus></basicuserstatus>
      <div class="row event-page">
        <app-title></app-title>
      </div>
      <Countdown date="16 June 2016 03:02:01 GMT"></countdown>
      <div class="row">
        <div class="ui search">
          <div class="ui big icon input">
            <input class="prompt" type="text" v-model="eventInput" @focus="hideWarning" placeholder="Enter keyword to find your event">
            <i class="search icon"></i>
          </div>
        </div>
      </div>
      <div class="row">
        <event-action :name="eventInput" @invalidate="warningPrompt"></event-action>
      </div>
      <div class="row">
        <div>
        </div>
        <h2 class="ui header">
          <i class="fa fa-calendar-o"></i>
          <div class="content">
          Event List
          </div>
        </h2>
      </div>
      <div>
        <EventList :events = "events">
        </EventList>
      </div>
  </div>
</template>

<script>
import AppTitle from './components/AppTitle'
import EventAction from './components/EventAction'
import EventList from './components/EventList'
import Countdown from './components/Countdown'
import ForkMe from './components/ForkMe'

export default {
  data() {
    return {
      eventInput: '',
      events: [{name: "comp3111", teamNum: '5'},{name: "comp3511", teamNum: '3'},{name: "comp3711", teamNum: '6'}],
    }
  },
  components: {
    AppTitle, EventAction ,Countdown,ForkMe, EventList
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

.ui.search {
  min-width: 50%;
}

.ui.big.icon.input{
  min-width: 80%;
}

</style>
