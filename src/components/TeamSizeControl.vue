<template>
	<div>
		{{ type == 'max' ? 'Maximum' : 'Minimum'}} Team Size
		<el-input-number :value="size" :min="1"></el-input-number>
	</div>
</template>

<script>
export default {
	props: ['type', 'size']
}
</script>

<style>
.ui.labeled.button:not([class*="left labeled"])>.button, .ui.labeled.button:not([class*="left labeled"])>.label, .ui[class*="left labeled"].button>.button{
	cursor: default;
}
</style>