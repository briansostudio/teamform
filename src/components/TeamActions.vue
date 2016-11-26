<template>
    <div class="TeamActions">
      <JoinRequest v-show="!isMemberOfViewingTeam"></JoinRequest>
      <router-link v-show="isLeaderOfViewingTeam" :to="{ name: 'team management', params: { eventId: $route.params.eventId, teamId: viewingTeam.id }}">
        <div class="ui teal button">Manage Team</div>
      </router-link>
      <div v-show="isMemberOfViewingTeam && !isLeaderOfViewingTeam" class="ui teal button">Leave Team</div>
    </div>
</template>

<script>
  import { mapGetters } from 'vuex'
    export default {
        data(){
            return {}
        },
        computed: {
          ...mapGetters(['viewingTeam','currentUser','isLeaderOfViewingTeam','isMemberOfViewingTeam']),
        },
        methods: {},
        props: {},
        components: {}
    }
</script>

<style>
    .TeamActions {

    }
</style>
