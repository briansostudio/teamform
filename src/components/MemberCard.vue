<template>
  <div>
    <router-link :to="{ name: 'user', params: { eventId: $route.params.eventId, userId: member.id }}">
      <div class="member-card">
        <div class="member-card-details">
          <h3 class="ui header teal" style="padding-left: 20px; padding-top:5px;"><i class="user icon"></i>{{member.name}}</h3>
          <div style="display:flex">
            <div style="flex:1; padding-left: 20px; padding-top:1px; ">
              <table class="ui very basic table">
                <tbody>
                  <tr>
                    <td><i class="wait icon"></i>Free Hours:</td>
                    <td>{{member.freeHours}}</td>
                  </tr>
                  <tr>
                    <td><i class="warning sign icon"></i>Talent Wanted</td>
                    <td>{{member.weakness}}</td>
                  </tr>
                  <tr>
                    <td><i class="info icon"></i>Description</td>
                    <td>{{member.description}}</td>
                  </tr>
                </tbody>
              </table>
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
    height: 260px;
    align-items: center;
    transition: all .5s ease;
  }


  .member-card-details{
    flex:1;
    height: 200px;
    width: 450px;
    padding: 1em;
  }
  .member-card-radar{
    width: 243px;
    height: 258px;
    background: #FFF;
    border-radius: 0 5px 5px 0;
    border-left:1px solid #ddd;
    padding-left: 8px;
    padding-right: 8px;
    padding-top: 10px;
    /*margin-right: 2px;*/
  }
</style>
