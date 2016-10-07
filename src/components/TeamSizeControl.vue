<template>
	<div class="ui grid">
		<div class="column">
			<div class="ui labeled button" tabindex="0">
				  <div class="ui button">
				    {{ type == 'max' ? 'Maximum' : 'Minimum'}} Team Size
				  </div>
				  <a class="ui basic label">
				    {{teamSize}}
				  </a>
			</div>
			<div class="ui buttons">
				<button class="ui button" v-on:click="teamSize-=1"><i class="minus icon"></i></button>
				<button class="ui button" v-on:click="teamSize+=1"><i class="plus icon"></i></button>
			</div>
		</div>
	</div>
</template>

<script>
export default {
  data() {
    return {
    	teamSize: this.size
    }
  },
  methods: {
  },
  props: ['type', 'size']
}
</script>