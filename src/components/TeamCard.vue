<template>
  <div class="teamCard">
    <div class="teamCard-details">
      <h3 class="ui header teal">{{team.name}}</h3>
      <div style="display:flex">
        <div style="width: 200px">
          <span>Leader: {{leaderName}}</span><br>
          <span>Member: {{numOfMember}}/{{maxMember}}</span><br>
          <span>Free Hours: {{freeHours}}</span><br>
          <span>Weakness: {{weakness}}</span><br>
          <span> [[Or maybe other attributes/data to show]]</span>
        </div>
        <div>
          <span>Description: {{team.description}}</span><br>
          <span> [[Description can be multiple lines, so give an area to it]]</span><br>
        </div>
      </div>
    </div>

    <div class="teamCard-radar">
      <Radar :chartData="chartData" :options="options"></Radar>
    </div>
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
                }
              }
            }
        },
        computed: {
          chartData(){
            return {
              labels: ["Web", "And", "iOS", "UI", "Bus", "Des"],
              datasets: [{
                label: "Andrew",
                backgroundColor: "rgba(179,181,198,0.2)",
                borderColor: "rgba(179,181,198,1)",
                pointBackgroundColor: "rgba(179,181,198,1)",
                pointBorderColor: "#fff",
                pointHoverBackgroundColor: "#fff",
                pointHoverBorderColor: "rgba(179,181,198,1)",
                data: [60, 59, 90, 81, 56, 55]
              }]
            };
          },
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
  }


  .teamCard-details{
    flex:1;
    height: 200px;
    padding: 1em;
  }
  .teamCard-radar{
    width: 215px;
    height: 215px;
  }
</style>
