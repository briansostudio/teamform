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
        <div style="padding-top:20px">
          <div class="ui cards">
            <div class="card" style="width:800px">
              <div class="content">
                <MemberCard style="flex:1" :member="member"></MemberCard>
              </div>
              <div class="ui bottom attached">
                <el-button type="warning" style="width: 100%; height:50px; font-size:18px;" v-if="member.id === team.leader.id">
                  <i class="user icon"></i>
                  Leader
                </el-button>
                <el-button type="danger" style="width: 100%; height:50px; font-size:18px;" v-else @click="removeMemberFromViewingTeam(member)">
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
