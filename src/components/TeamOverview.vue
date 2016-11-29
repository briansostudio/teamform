<template>
	<div class="ui grid">
  <div class="two column row">
    <div class="column">
      <div class="ui link cards">
        <div class="card">
          <div class="image">
            <i class="users icon massive teal"></i>
          </div>
          <div class="content">
            <div class="header">{{team.name}}</div>
            <div class="meta">
            <span class="right floated">
              <i class="users icon"></i>
              {{team.members.length}} / 7
            </span>
            <span class="left floated">
               Leader: {{team.leader.name}}
            </span>
            </div>
            <div class="description">
            {{team.description}}
            </div>
          </div>
          <div class="extra content">
            <span>
              
              <TeamActions></TeamActions>
            </span>
          </div>
        </div>
      </div>
    
    
    </div>
    <div class="column">
      <div style="height: 420px; display: flex; align-items: center; flex-direction: column;">
        <div style="flex: 1;"></div>
        <Radar style="width: 300px; height:300px;" :chartData="team.radarChartData" :options="options"></Radar>
        <div style="flex: 1;"></div>
      </div>
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

.users.icon.massive.teal
{
  margin-top: 20%;
  margin-bottom: 20%;
}

</style>
