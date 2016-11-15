<template>
	<div>
		<div>
			<button class="action-btn" @click.prevent="multiplexUserOption">{{buttonTitle}}</button>
		</div>
		<div>
			<el-dialog title="Enter selected event page" v-model="dialogVisible" size="small">
				<el-steps :space="200" :active="1">
					<el-step title="Step One" description="Choose Your Identity"></el-step>
					<el-step title="Step Two" description="Authenticate"></el-step>
					<el-step title="Step Three" description="Join / View Your Team(s)"></el-step>
				</el-steps>
				<br>
				<Auth v-if="test" :admin="role"></Auth>
				<role-chooser v-else></role-chooser>
				<span slot="footer" class="dialog-footer">
					<el-button type="primary" @click="enterAuthPage">Proceed <i class="fa fa-chevron-circle-right"></i></el-button>
					<el-button @click.native="dialogVisible = false">Close</el-button>
				</span>
			</el-dialog>
		</div>
	</div>
</template>

<script>
import RoleChooser from './RoleChooser'
import Auth from './Auth'

export default {
	data () {
		return {
			event: {},
			dialogVisible : false,
			test: false
		}
	},
	computed:{
		buttonTitle(){
			return this.isCreate ? 'Create Event' : 'Discover Your Event'
		}
	},
	components: {
		RoleChooser,Auth
	},
	methods: {
		multiplexUserOption: function(){
			if(this.isCreate){
				this.createEvent()
			}
			else
			{
				this.loadEvent()
			}
		},
		createEvent: function(){
			if (this.isInputValid()){
				console.log('test')
			}
		},
		loadEvent: function(){
			if (this.isInputValid()) {
				this.dialogVisible = true
				console.log('test2')
			}
		},
		isInputValid: function(){
			if (!this.name) {
				this.$emit('invalidate')
					return false
			}
			else{
				return true
			}
		},
		enterAuthPage: function(){
			this.test = true;
			this.active = 2;

		}
	},
	props: ['name', 'isCreate']
}
</script>

<style scoped>
button.action-btn:focus { outline: none; }
button.action-btn{
  display:inline-block;

	font:normal normal 300 1.3em 'Open Sans';
	text-decoration:none;

	color:rgba(28, 190, 131, 1);
	background-color:transparent;
	border:1px solid rgba(28, 190, 131, 1);
	border-radius:100px;

	padding: .3em 1.2em;
	margin:5px;

	background-size: 200% 100%;
	background-image: linear-gradient(to right, transparent 50%, rgba(28, 190, 131, 1) 50%);
	transition: background-position .3s cubic-bezier(0.19, 1, 0.22, 1) .1s, color .5s ease 0s, background-color .5s ease;
}

button.action-btn:hover{
	color:rgba(255, 255, 255, 1);
	background-color:rgba(28, 190, 131, 1);
	background-position: -100% 100%;
}
.large.ui.buttons > .ui.button:hover {
  box-shadow: 0 14px 13px -12px rgba(153, 153, 153, 0.42), 0 4px 23px 0px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(153, 153, 153, 0.2);
}
</style>
