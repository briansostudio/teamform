<template>
    <div class="UserStatus">
      <h3>{{user.name}}</h3>
      <h3>{{user.description}}</h3>
      <h3>{{user.id}}</h3>
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
