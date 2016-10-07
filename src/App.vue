<template>
  <div id="app" class="ui centered grid">
      <div class="row event-page">
        <AppTitle></AppTitle>
      </div>
      <div class="row">
        <div class="ui big icon input">
          <input type="text" v-model="eventInput" placeholder="Enter keyword to find your event">
          <i class="search icon"></i>
        </div>
      </div>
      <EventAction v-bind:eventName="eventInput"></EventAction>
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
  }
}
</script>

<style>

html {
  height: 100%;
}

* {
  font-family: 'Varela Round', sans-serif;
}

.event-page {
  margin-top: 15%;
}

.ui.big.icon.input {
  width: 50%;
}

</style>
