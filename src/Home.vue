<template>
	<div class="ui centered grid">
			<fork-me></fork-me>
			<div class="row event-page">
				<app-title></app-title>
			</div>
    <event-action style="min-width: 80%" :name="eventInput" :isCreate="modeSwitch" @invalidate="warningPrompt" @change="hideWarning"></event-action>
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
  mounted(){
	  this.$store.dispatch('home/onLoad');
  },
	watch: {
		validationErrors(val){
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

<style scoped>

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
