<template>
  <div>
    <router-link :to="{ name: 'team', params: { eventId: $route.params.eventId, teamId: team.id }}">
      <div class="teamCard">
        <div class="teamCard-details">
          <h3 class="ui header teal">{{team.name}}</h3>
          <div style="display:flex">
            <div style="width: 200px">
              <span>Leader: {{team.leader.name}}</span><br>
              <span>Member: {{team.members.length}}/{{maxMember}}</span><br>
              <span>Free Hours: {{team.freeHours}}</span><br>
              <span>Weakness: {{team.weakness}}</span><br>
              <span> [[Or maybe other attributes/data to show]]</span>
            </div>
            <div>
              <span>Description: {{team.description}}</span><br>
              <span> [[Description can be multiple lines, so give an area to it]]</span><br>
            </div>
          </div>
        </div>

        <div class="teamCard-radar">
          <Radar :chartData="team.radarChartData" :options="options"></Radar>
        </div>
      </div>
    </router-link>
  </div>
</template>

<script>
  import Radar from './Radar'
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
        computed: {
          freeHours(){
              return 120; // 120 hours
          },
          weakness(){
              return "Desgin";
          },
          leaderName(){
              return "Clement";
          },
          numOfMember(){
              return 4;
          },
          maxMember(){
              return 7;
          }
        },
        methods: {},
        props: ["team"],
        components: {Radar}
    }
</script>

<style>
  .teamCard:hover{
    background: #EAFFF0;
  }
  .teamCard{
    display: flex;
    text-align: left;
    position: relative;
    background: #FFF;
    box-shadow: 0 1px 2px 0 rgba(34,36,38,.15);
    margin: 1rem 0;
    border-radius: .28571429rem;
    border: 1px solid rgba(34,36,38,.15);
    height: 220px;
    align-items: center;
    transition: all .5s ease;
  }


  .teamCard-details{
    flex:1;
    height: 200px;
    padding: 1em;
  }
  .teamCard-radar{
    width: 214px;
    height: 214px;
    background: #FFF;
    border-radius: 5px;
    margin-right: 2px;
  }
</style>
