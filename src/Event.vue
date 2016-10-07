<template>
  <div class="ui centered grid">
    <div class="row">
      <h1>Event Name: {{event.name}}</h1>
    </div>
    <div class="row">
      <TeamSizeControl type="max" v-bind:size="event.teamSize.max"></TeamSizeControl>
    </div>
    <div class="row">
      <TeamSizeControl type="min" v-bind:size="event.teamSize.min"></TeamSizeControl>
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
  data() {
    return {
      event: {
        name: 'Test',
        teamSize: {
          max: 10,
          min: 5
        }
      }
    }
  },
  components:{
    TeamSizeControl, TeamList
  }
}
</script>