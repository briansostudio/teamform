<template>
	<div class="ui centered grid">
			<fork-me></fork-me>
			<div class="mode-switch">
				<el-switch v-model="modeSwitch" on-text="" off-text=""></el-switch>
			</div>
			<div class="row event-page">
				<app-title></app-title>
			</div>
    <event-action style="min-width: 80%" :name="eventInput" :isCreate="modeSwitch" @invalidate="warningPrompt"></event-action>
	</div>
</template>

<script>
import AppTitle from './components/AppTitle'
import EventAction from './components/EventAction'
import ForkMe from './components/ForkMe'
import { mapGetters } from 'vuex'

export default {
	data() {
		return {
			eventInput: '',
			modeSwitch: true
		}
	},
	computed: {
		...mapGetters([
			'validationErrors'
		])
	},
	components: {
		AppTitle, EventAction ,ForkMe
	},
	watch: {
		validationErrors(val){
			for(let v in val){
				this.$message(v)
				this.$store.dispatch('dismissValidationErrorMessage')
			}
		}
	},
	methods: {
		hideWarning : () => {
			$('.ui.big.icon.input').popup('hide');
		},
		warningPrompt: () => {
		$('.ui.big.icon.input').popup({
			on: 'manual',
			position: 'top center',
			title: 'Event name cannot be empty',
			content: 'Please correct and retry'
		})
		$('.ui.big.icon.input').popup('toggle')
	}
	}
}
</script>

<style>

html {
	height: 100%;
	font-family: "Helvetica Neue",Helvetica,"PingFang SC","Hiragino Sans GB","Microsoft YaHei",Arial,sans-serif;
}

.event-page {
	margin-top: 15%;
}

.mode-switch {
	position: absolute;
	top: 10px;
	left: 10px;
}
</style>
