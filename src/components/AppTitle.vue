<template>
	<h1 class="ui center aligned icon header">
	  <i class="circular users icon"></i>
	  {{title}}
	</h1>
</template>

<script>
export default {
  data () {
    return {
      title: 'Teamform'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1.ui.center.aligned.icon.header{
  color: #00FA9A;
  font-family: 'Varela Round', sans-serif;
}
</style>
