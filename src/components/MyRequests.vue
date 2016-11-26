<template>
  <div>
    <h2 class = "header">List of my Request</h2>
    <div class = "request list" v-for="(request, index) in requests">
      <div class="row-bg" style="display:flex; align-items: center; padding: 12px;">
        <div class="index">{{index+1}}.</div>
        <div style="flex: 1">
          <div class="request data"> <b>Team:</b> {{request.team.name}}</div>
        </div>
        <div>
          <div class="cancel button">
          <button class="ui labeled icon button">
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
export default {
  props: ['requests']
}
</script>

