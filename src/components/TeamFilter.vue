<template>
    <div class="TeamFilter">
      <div class="row" style="margin-bottom: 8px;">
        <div class="ui big icon input">
          <el-autocomplete class="search-input" type="text" placeholder="Team Name"
                           v-model="eventInput"
                           @select="handleSelect"
                           :fetch-suggestions="querySearch"
                           :trigger-on-focus="false"></el-autocomplete>
          <i class="search icon"></i>
        </div>
      </div>
    </div>
</template>

<script>
    export default {
        data(){
            return {
              eventInput:'',
            }
        },
        computed: {},
        methods: {
          handleSelect(){

          },
          querySearch(q, cb){
            cb([])
            //cb([{value:"suggestion1"}]);
          }
        },
        props: {},
        components: {}
    }
</script>

<style>
    .TeamFilter {

    }
</style>
