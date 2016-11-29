<template>
  <el-dialog title="My Requests" v-model="show" size="large" :close-on-click-modal="false" :show-close="false">
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
              <el-button type="danger" icon="delete" @click="cancelJoinRequest(request)">Cancel Request</el-button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <span slot="footer" class="dialog-footer">
      <el-button @click="toggleRequestView">Close</el-button>
    </span>
  </el-dialog>
</template>

<script>
  import TeamCard from './TeamCard'
  import {mapActions} from 'vuex'
export default {
  data(){
    return {
      show: this.present
    }
  },
  watch: {
    present(val){
      this.show = val
    }
  },
  props: ['requests','present'],
  methods:{
    ...mapActions({"cancelJoinRequest":"member/cancelJoinRequest"}),
    ...mapActions(['toggleRequestView']),
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

