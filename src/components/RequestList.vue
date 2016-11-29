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
        <div class="ui cards" style="padding-top:25px;">
          <div class="card"  style="width:700px;">
            <div class="content">
              <MemberCard style="flex:1" :member="request.member"></MemberCard>
            </div>
            <div class="extra content">
              <div class="header">
                Message:
              </div>
              <div class="description">
                {{request.message}}
              </div>
            </div>
            <div class="extra content">
              <span class="right floated">
                <div class="ui two buttons">
                  <div class="ui basic">
                    <el-button icon="close" type="danger" style="width:140px;flex: none;" @click="teamManagementRejectRequest(request)">
                      Reject
                    </el-button>
                    <el-button icon="check" type="success" style="width:140px; margin-left:10px;" @click="teamManagementAcceptRequest(request)">
                      Accept
                    </el-button>
                  </div>
                </div>
              </span>
            </div>
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
