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
	props: ['type', 'size']
}
</script>