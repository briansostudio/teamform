<template>
  <div>
    <h2 class = "header">List of my Request</h2>
    <div class = "request list" v-for="(request, index) in requests">

      <TeamCard :team="request.team"></TeamCard>

      <div class="row-bg" style="display:flex; align-items: center; padding: 12px;">
        <div style="flex: 1">
          <b>Status: </b>{{status(request.status)}}
        </div>
        <div style="flex: 1">
          <b>Message: </b>{{request.message}}
        </div>
        <div>
          <div class="cancel button">
          <button class="ui labeled icon button" @click="cancelJoinRequest(request)">
            <i class="fa fa-times"></i>
              Cancel Request
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import TeamCard from './TeamCard'
  import {mapActions} from 'vuex'
export default {
  props: ['requests'],
  methods:{
    ...mapActions({"cancelJoinRequest":"member/cancelJoinRequest"}),
      status(statusString){
          switch(statusString){
            case "PENDING":
                return "Waiting for response";
            case "DENIED":
              return "Your request is rejected";
          }
      }
  },
  components:{TeamCard}
}
</script>

