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
      <table class="ui definition table">
        <thead>
        <tr>
          <th></th>
          <th class="center aligned">Name</th>
          <th class="center aligned">Add member</th>
        </tr>
        </thead>
        <tbody>
        <tr v-for="(request, index) in requests">
          <td>{{index}}</td>
          <td class="center aligned">{{request.member.name}}</td>
          <td class="center aligned">
            <button @click="teamManagementAcceptRequest(request)" class="ui labeled icon button teal">
              <i class="add user icon"></i>
              Add to team
            </button>
          </td>
        </tr>
        </tbody>
      </table>
    </div>
</template>

<script>
  import {mapActions} from 'vuex'
    export default {
        data(){
            return {}
        },
        computed: {},
        methods: {
          ...mapActions(["teamManagementAcceptRequest"])
        },
        props: ["requests"],
        components: {}
    }
</script>

<style>
    .RequestList {

    }
</style>
