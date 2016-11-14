<template>
    <div class="User">
      Email:<input type="email">
      Password:<input type="password">
      <button @click.prevent="register">register</button>
      <WeeklyScheduleTest></WeeklyScheduleTest>
    </div>
</template>

<script>
  import WeeklyScheduleTest from './components/WeeklySchedule/WeeklyScheduleTest.vue'
  export default {
      data(){
          return {}
      },
      computed: {},
      methods: {
        register(){
          this.$store.dispatch('checkout', products)
        }
      },
      props: {},
      components: {WeeklyScheduleTest}
  }
</script>

<style>
    .User {

    }
</style>
