<template>
    <div class="MemberListEdit">
      <div class="row">
        <h2 class="ui header">
          <i class="users icon"></i>
          <div class="content">
            Team members
          </div>
        </h2>
      </div>
      <table class="ui definition table">
        <thead>
        <tr>
          <th></th>
          <th class="center aligned">Name</th>
          <th class="center aligned">Remove member</th>
        </tr>
        </thead>
        <tbody>
        <tr v-for="(member, index) in team.members">
          <td>{{index}}</td>
          <td class="center aligned">{{member.name}}</td>
          <td class="center aligned">
            <button v-if="member.id === team.leader.id" class="ui labeled icon button yellow" @click="removeMemberFromViewingTeam(member)">
              <i class="user icon"></i>
              Leader
            </button>
            <button v-else @click="removeMemberFromViewingTeam(member)" class="ui labeled icon button red">
              <i class="remove user icon"></i>
              Remove from team
            </button>
          </td>
        </tr>
        </tbody>
      </table>
    </div>
</template>

<script>
  import {mapActions} from 'vuex';

    export default {
        data(){
            return {}
        },
        computed: {
        },
        methods: {
          ...mapActions(["removeMemberFromViewingTeam"])
        },
        props: ["team"],
        components: {}
    }
</script>

<style>
    .MemberListEdit {

    }
</style>
