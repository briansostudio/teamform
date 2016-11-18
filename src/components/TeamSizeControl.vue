<template>
  <div>
	  <div class="row">
      <div class="ui grid">
        <div class="column"> <span>Maximum Team Size</span> <el-input-number v-model="max" :min="min"></el-input-number> </div>
      </div>
    </div>
    <div class="row">
      <div class="ui grid">
        <div class="column"> <span>Minimum Team Size</span> <el-input-number v-model="min" :min="1" :max="max"></el-input-number> </div>
      </div>
    </div>
	</div>
</template>

<script>
  import {mapGetters} from 'vuex';

export default {
  data(){
    return {
      max: 0,
      min: 0
    }
  },
  computed:{
    ...mapGetters({
      _max: 'eventMaxTeamSize',
      _min: 'eventMinTeamSize',
    })
  },
	watch:{
    _max(val){
      console.log(val);
      this.max = val;
    },
    _min(val){
      console.log(val);
      this.min = val;
    },
    max(size){
      this.$store.dispatch('setMaximumTeamSize',{size});
    },
    min(size){
      this.$store.dispatch('setMinimumTeamSize',{size});
    }
  }
}
</script>

<style>

</style>
