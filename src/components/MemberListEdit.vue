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

      <div v-for="(member, index) in team.members">
        <div style="display:flex; align-items: center">
          <MemberCard style="flex:1" :member="member"></MemberCard>
          <div style="width:150px; margin-left:10px;">
            <el-button type="warning" style="width: 100%; height:100px; font-size:18px;" v-if="member.id === team.leader.id">
              <i class="user icon"></i>
              Leader
            </el-button>
            <el-button type="danger" style="width: 100%; height:100px; font-size:18px;" v-else @click="removeMemberFromViewingTeam(member)">
              <i class="remove user icon"></i>
              Remove
            </el-button>
          </div>
        </div>

      </div>
    </div>
</template>

<script>
  import MemberCard from './MemberCard.vue'
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
        components: {MemberCard}
    }
</script>

<style>
    .MemberListEdit {

    }
</style>
