<template>
    <div class="UserStatus">
      {{user.name}}
      {{user.description}}
      {{user.id}}
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
