<template>
  <div>
    <router-link :to="{ name: 'team', params: { eventId: $route.params.eventId, teamId: team.id }}">
      <div class="teamCard">
        <div class="teamCard-details">
          <a class="ui teal left ribbon label">{{team.name}}</a>
          <div style="display:flex">
            <div style="flex:1; padding-left: 20px; padding-top:5px;">
              <table class="ui very basic table">
                <tbody>
                  <tr>
                    <td class="label"><i class="user icon"></i>Leader</td>
                    <td>{{team.leader.name}}</td>
                  </tr>
                  <tr>
                    <td class="label"><i class="users icon"></i>Member</td>
                    <td>{{team.members.length}}/{{currentEvent.limits.max}}</td>
                  </tr>
                  <tr>
                    <td class="label"><i class="wait icon"></i>Free Hours</td>
                    <td>{{team.freeHours}}</td>
                  </tr>
                  <tr>
                    <td class="label"><i class="warning sign icon"></i>Talent Wanted</td>
                    <td>{{team.weakness}}</td>
                  </tr>
                  <tr>
                    <td class="label"><i class="info icon"></i>Description</td>
                    <td>{{team.description}}</td>
                  </tr>
                </tbody>
              </table>
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
  import {mapGetters} from 'vuex'
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
          ...mapGetters(["currentEvent"])
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
    height: 290px;
    align-items: center;
    transition: all .5s ease;
  }
  .teamCard-details{
    flex:1;
    height: 285px;
    padding: 1em;
  }
  .teamCard-radar{
    width: 243px;
    height: 288px;
    background: #FFF;
    border-radius: 0 5px 5px 0;
    border-left:1px solid #ddd;
    padding-left: 8px;
    padding-right: 8px;
    padding-top: 35px;
    /*margin-right: 2px;*/
  }
  a.ui.teal.left.ribbon.label
  {
    width: 115px;
    height: 38px;
    font-size: 17px
  }
  td.label
  {
    width:150px;
  }

</style>
