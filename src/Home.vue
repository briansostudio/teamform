<template>
	<div class="ui centered grid">
			<fork-me></fork-me>
			<div class="mode-switch">
				<el-switch v-model="modeSwitch" on-text="" off-text=""></el-switch>
			</div>
			<div class="row event-page">
				<app-title></app-title>
			</div>
			<div class="row">
				<div class="ui search">
					<div class="ui big icon input">
						<input class="prompt" type="text" v-model="eventInput" @focus="hideWarning" placeholder="Enter keyword to find your event">
						<i class="search icon"></i>
					</div>
				</div>
			</div>
			<div class="row">
				<event-action :name="eventInput" :isCreate="modeSwitch" @invalidate="warningPrompt"></event-action>
			</div>
	</div>
</template>

<script>
import AppTitle from './components/AppTitle'
import EventAction from './components/EventAction'
import ForkMe from './components/ForkMe'

export default {
	data() {
		return {
			eventInput: '',
			modeSwitch: true
		}
	},
	components: {
		AppTitle, EventAction ,ForkMe
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
}

.event-page {
	margin-top: 15%;
}

.ui.search {
	min-width: 50%;
}

.ui.big.icon.input{
	min-width: 80%;
}

.mode-switch {
	position: absolute;
	top: 10px;
	left: 10px;
}
</style>
