<template>
    <div class="TeamManagement">
      <Manage :team="viewingTeam" :requests="viewingTeamRequests"></Manage>
    </div>
</template>

<script>
  import Manage from  './components/Manage'
  import {mapGetters} from 'vuex'
  export default {
      data(){
          return {}
      },
      computed: {
        ...mapGetters(['viewingTeam','viewingTeamRequests'])
      },
      methods: {},
      props: {},
      components: {Manage}
  }
</script>

<style>
    .TeamManagement {

    }
</style>
