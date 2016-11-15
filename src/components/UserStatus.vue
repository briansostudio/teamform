<template>
    <div class="UserStatus">
      {{name}}
      {{id}}
    </div>
</template>

<script>
    export default {
        data(){
            return {}
        },
        computed: {
          id(){
            return this.user ? this.user.id : "loading";
          },
          name(){
            return this.user ? this.user.name : "loading";
          }
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
