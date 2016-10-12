<template>
	<div></div>
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