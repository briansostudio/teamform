<template>
  <div>
    <router-link :to="{ name: 'user', params: { eventId: $route.params.eventId, userId: member.id }}">
      <div class="member-card">
        <div class="member-card-details">
          <h3 class="ui header teal">{{member.name}}</h3>
          <div style="display:flex">
            <div style="width: 200px">
              <span>Free Hours: {{member.freeHours}}</span><br>
              <span>Weakness: {{member.weakness}}</span><br>
              <span> [[Or maybe other attributes/data to show]]</span>
            </div>
            <div>
              <span>Description: {{member.description}}</span><br>
              <span> [[Description can be multiple lines, so give an area to it]]</span><br>
            </div>
          </div>
        </div>

        <div class="member-card-radar">
          <Radar :chartData="member.radarChartData" :options="options"></Radar>
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
    props: ["member"],
    components: {Radar}
  }
</script>

<style>
  .member-card:hover{
    background: #EAFFF0;
  }
  .member-card{
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


  .member-card-details{
    flex:1;
    height: 200px;
    padding: 1em;
  }
  .member-card-radar{
    width: 243px;
    height: 218px;
    background: #FFF;
    border-radius: 0 5px 5px 0;
    border-left:1px solid #ddd;
    padding-left: 8px;
    padding-right: 8px;
    padding-top: 5px;
    /*margin-right: 2px;*/
  }
</style>
