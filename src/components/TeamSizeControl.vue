<template>
	<div class="ui labeled button" tabindex="0">
		<div class="ui button">
			{{ type == 'max' ? 'Maximum' : 'Minimum'}} Team Size
		</div>
		<span class="ui basic label">
			{{size}}
		</span>
	</div>
</template>

<script>
export default {
	watch: {
		size: function(value){
			this.$emit('valueChanged')
		}
	},
	props: ['type', 'size']
}
</script>

<style>
.ui.labeled.button:not([class*="left labeled"])>.button, .ui.labeled.button:not([class*="left labeled"])>.label, .ui[class*="left labeled"].button>.button{
	cursor: default;
}
</style>