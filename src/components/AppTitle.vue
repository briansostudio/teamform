<template>
	<h1 class="ui center aligned icon header">
	  <i class="circular users icon"></i>
	  {{ title }}
	</h1>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  computed: {
    ...mapGetters({title :'applicationName'})
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1.ui.center.aligned.icon.header{
  color: #3261BA;
  font-family: 'Varela Round', sans-serif;
}
</style>
