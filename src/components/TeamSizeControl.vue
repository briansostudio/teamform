<template>
	<div>
		<div>
			<el-tooltip class="item" effect="dark" content="Maximum" placement="right">
				<el-input-number :value="size.max" @change="setMaximumTeamSize">
				</el-input-number>
			</el-tooltip>
		</div>
		<div>
			<el-tooltip class="item" effect="dark" content="Minimum" placement="right">
				<el-input-number :value="size.min" @change="setMinimumTeamSize">
				</el-input-number>
			</el-tooltip>
		</div>
	</div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';

export default {
	methods: {
		...mapActions(['setMaximumTeamSize', 'setMinimumTeamSize'])
	},
	props: ['size']
}
</script>