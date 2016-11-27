<template>
    <div class="UserStatus">
      <h3>Name: {{user.name}}</h3>
      <h3>Description: {{user.description}}</h3>
      <h3>User ID: {{user.id}}</h3>
    </div>
</template>

<script>
    export default {
        data(){
            return {}
        },
        computed: {
        },
        methods: {},
        props: {
          user:{default:()=>{name:"loading"}}
        },
        components: {}
    }
</script>

<style>
    .UserStatus {

    }
</style>
