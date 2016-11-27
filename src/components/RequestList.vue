<template>
    <div class="RequestList">
      <div class="row">
        <h2 class="ui header">
          <i class="users icon"></i>
          <div class="content">
            Members requesting to join
          </div>
        </h2>
      </div>

      <div v-for="(request, index) in requests">
        <div style="display:flex; align-items: center">
          <MemberCard style="flex:1" :member="request.member"></MemberCard>

          <div class="ui vertical buttons" style="height:220px;width:150px; margin-left:10px;">
            <div class="ui button" style="flex: none;">
              Message:
            </div>
            <div class="ui button" style="">
              {{request.message}}
            </div>
            <button class="ui labeled icon button green" style="max-height:100px;" @click="teamManagementAcceptRequest(request)">
              <i class="check icon"></i>
              Accept
            </button>
            <button class="ui labeled icon button red" style="flex: none;" @click="teamManagementRejectRequest(request)">
              <i class="remove circle icon"></i>
              Reject
            </button>
          </div>
        </div>

      </div>
    </div>
</template>

<script>
  import MemberCard from './MemberCard.vue'
  import {mapActions} from 'vuex'
    export default {
        data(){
            return {}
        },
        computed: {},
        methods: {
          ...mapActions(["teamManagementAcceptRequest",'teamManagementRejectRequest'])
        },
        props: ["requests"],
        components: {MemberCard}
    }
</script>

<style>
    .RequestList {

    }
</style>
