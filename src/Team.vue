<template>
    <div class="Team">
      <div class="ui centered grid">
        <div class="row event-page">
          <h1>Event Name: {{event.name}}</h1>
        </div>
        <div class="row">
          <TeamOverview :teamId="teams"></TeamOverview>
        </div>
        <div class = "footer"></div>
      </div>
      <MemberList></MemberList>
    </div>
</template>

<script>
  import TeamOverview from './components/TeamOverview'
  import MemberList from './components/MemberList'
  export default {
      data(){
        return {
          event: {
            name: 'hackUST',
            size: {
              max: 10,
              min: 1
            }
          },
          teams: {
            name: 'Android Studio',
            leader: 'Android',
            description: 'Android Lovers come here'
          }
        }
      },
      computed: {},
      methods: {},
      props: {},
      components: {TeamOverview, MemberList}
  }
</script>

<style>
    .Team {

    }
    .event-page {
      margin-top: 5%;
    }
    .add-team-input{
      width: 100%;
    }
    .footer{
      margin-bottom: 5%;
    }
</style>
