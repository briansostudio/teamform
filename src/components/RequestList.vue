<template>
    <div class="RequestList">
      <div class="row">
        <h2 class="ui header">
          <i class="add user icon"></i>
          <div class="content">
            Members requesting to join
          </div>
        </h2>
      </div>

      <div v-for="(request, index) in requests">
        <div style="display:flex; align-items: center">
          <MemberCard style="flex:1" :member="request.member"></MemberCard>
          <div class="ui vertical buttons" style="height:220px;width:150px; margin-left:10px;">
            <el-button type="text" style="flex: none; color:grey;">
              Message:
              <br><br>
              {{request.message}}
            </el-button>
            <br>
            <el-button icon="check" type="success" style="width:140px; margin-left:10px;" @click="teamManagementAcceptRequest(request)">
              Accept
            </el-button>
            <el-button icon="close" type="danger" style="flex: none;" @click="teamManagementRejectRequest(request)">
              Reject
            </el-button>
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
