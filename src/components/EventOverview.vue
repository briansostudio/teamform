<template>
  <div class="ui centered grid">
    <div class = "ui header" style="margin-top:90px;">
      <h2 style="font-family: 'Varela Round', sans-serif;">
        <i class="map outline icon"></i>
        Event Details
      </h2>
      <div class ="event details" style="display:flex; align-items:center;">
            <div class="ui card" style="margin-bottom:0; margin-right: 20px;">
              <div class="content">
                <div class="header">{{events.name}}</div>
                <div class="description">
                  <p>{{events.description}}</p>
                </div>
              </div>
              <div class="extra content">
                <span class="left floated like">
                  <i class="users icon"></i>
                  Team Size : {{events.limits.min}} - {{events.limits.max}}
                </span>
              </div>
            </div>
            <Countdown :Date="new Date(events.due)"></Countdown>
      </div>
    </div>
    <div style="clear:both"></div>
  </div>
</template>

<script>
import Countdown from './Countdown.vue'
export default {
  props: ['events'],
  components:{Countdown}
}
</script>

<style>

.event.details{
  text-align: left;
}

.member.number{
  float: right;
}

</style>
