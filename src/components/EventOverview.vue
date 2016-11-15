<template>
  <div class="ui centered grid">
    <div class="row event-page">
      <h1>Event Name: {{events.name}}</h1>
    </div>
    <div class = "ui header">
      <h2>
        <i class="fa fa-info-circle"></i>
        Event Details
      </h2>
      <div class ="event details">
        <p><i>Description:</i> {{events.description}}</p>
        <p><i>Team Size:</i> {{events.size.min}} - {{events.size.max}}</p>
        <p><i>List of Team: </i> </p>
        <ol v-for="(teamName, index) in events.teamName">{{index+1}}. {{teamName.name}}  
          <div class = "member number">
            <i class="fa fa-users"></i>  {{teamName.numMember}}
          </div>
        </ol>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['events']
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