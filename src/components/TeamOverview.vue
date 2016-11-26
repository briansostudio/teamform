<template>
	<div style="display:flex;">
    <div class="ui items">
        <div class="item">
          <div class="image">
            <i class="users icon massive teal"></i>
          </div>
          <div class="content ui left aligned segment">
            <a class="header">Team Name: {{team.name}}</a>
            <div class="meta">
              <span>Description: {{team.description}}</span>
            </div>
            <div class="description">
              <p>Leader Name: {{team.leader.name}}</p>
              <p>Number of members: {{team.members.length}}</p>
            </div>
            <TeamActions></TeamActions>
          </div>
        </div>
    </div>
    <div>
      <Radar :chartData="team.radarChartData" :options="options"></Radar>
    </div>
	</div>
</template>

<script>
  import TeamActions from './TeamActions.vue'
import Radar from './Radar.vue'
export default {
  data(){
    return {
      options:{
        legend:{
          display:false
        },
        scale:{
          pointLabels:{
            fontSize:10,
            fontColor:"#00816A"
          },
          ticks: {
            max: 100,
            min: 0,
            stepSize: 25
          }
        }
      },
    }
  },
  watch:{
      team(){
          console.log("watch team",this.team);
      }
  },
	props: ['team'],
  components: {Radar, TeamActions}
}
</script>

<style>

</style>
