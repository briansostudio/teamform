<template>
	<div>
    <div class="row" style="margin-bottom: 8px;">
      <div class="ui big icon input">
        <el-autocomplete class="search-input" type="text" placeholder="Enter keyword to find your event"
                         v-model="eventInput"
                         @select="handleSelect"
                         :fetch-suggestions="querySearch"
                         :trigger-on-focus="false"></el-autocomplete>
        <i class="search icon"></i>
      </div>
    </div>
    <div class="row">
      <div>
        <button class="action-btn" @click.prevent="multiplexUserOption">{{buttonTitle}}</button>
      </div>
      <div>
        <el-dialog title="Enter selected event page" :value="isLoginModalPresenting" @input="toggleLoginModal" size="small">
          <el-steps :space="200" :active="currentLoginStep" >
            <el-step title="Step One" description="Choose Your Identity"></el-step>
            <el-step title="Step Two" description="Authenticate"></el-step>
            <el-step title="Step Three" description="Join / View Your Team(s)"></el-step>
          </el-steps>
          <br>
          <Auth v-if="currentLoginStep == 2"></Auth>
          <role-chooser v-else></role-chooser>
          <span slot="footer" class="dialog-footer">
            <el-button type="primary" @click.native="proceedClick">Proceed <i class="fa fa-chevron-circle-right"></i></el-button>
            <el-button @click="toggleLoginModal(false)">Close</el-button>
          </span>
        </el-dialog>
      </div>
    </div>
	</div>
</template>

<script>
import RoleChooser from './RoleChooser'
import Auth from './Auth'
import { mapActions, mapGetters } from 'vuex'

export default {
	data () {
		return {
		  eventInput:'',
			event: {},
			test: false,
			active:0
		}
	},
	computed:{
		buttonTitle(){
			return !this.eventId ? 'Create Event' : 'Discover Your Event'
		},
		...mapGetters(['isLoginModalPresenting', 'currentLoginStep', 'eventList', 'eventId'])
	},
	components: {
		RoleChooser,Auth
	},
  watch:{
	  eventInput(eventName){
      let id = '';
      let list = this.eventList;
      console.log(eventName);
      for(let item of list){
        if(item.value === eventName){
          id = item.id;
          break;
        }
      }
      if(this.eventId !== id){
        this.$store.commit('EVENT_ID_CHANGED', {eventId:id});
      }
      this.$emit("change");
    }
  },
	methods: {
		...mapActions(['toggleLoginModal', 'stepIncrement']),
    querySearch(queryString, cb){
      let regex = new RegExp(queryString,"i");
      let result = this.eventList.filter((item)=>{
        return regex.test(item.value);
      });
      if(result[0] && result[0].value === queryString){
        return cb([]);
      }
      cb(result);
    },
    handleSelect(item){
      this.$store.commit("EVENT_ID_CHANGED",{eventId:item.id});
    },
		multiplexUserOption: function(){
			if(!this.eventId){
				this.createEvent()
			}
			else
			{
				this.$store.dispatch('toggleLoginModal', true)
			}
		},
		createEvent: function(){
			if (this.isInputValid()){
				this.$store.dispatch('createEvent', eventInput)
			}
		},
		isInputValid: function(){
			if (!this.eventInput) {
				this.$emit('invalidate')
					return false
			}
			else{
				return true
			}
		},
    proceedClick(){
		  if(this.currentLoginStep !== 2){
        this.$store.dispatch("stepIncrement");
      }else{
        this.$store.dispatch("loginOrRegister");
      }
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
<style>
  .ui.input .search-input input.el-input__inner{
    border-radius: 500rem !important;
    width: 100%;
    height: 3rem;
    min-width: 480px;
  }
</style>
