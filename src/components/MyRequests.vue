<template>
  <div>
    <h2 class = "header">List of my Request</h2>
    <div class = "request list" v-for="(data, index) in requests">
      <el-row type="flex" class="row-bg" justify="space-around">
        <el-col :span="6"><div class="index">{{index+1}}.</div></el-col>
        <el-col :span="6"><div class="request data"> <b>Event:</b> {{data.events}}  <b>Team:</b> {{data.team}}</div></el-col>
        <el-col :span="6"><div class="cancel button">
          <button class="ui labeled icon button">
            <i class="fa fa-times"></i>
              Cancel Request
            </button>
        </div></el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
export default {
  props: ['requests']
}
</script>

