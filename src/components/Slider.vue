<template>
    <el-slider v-model="criterion" @change="updateSkill" show-input>
        </el-slider>
</template>

<script>
import {mapActions} from 'vuex'

export default ({
  methods: {
      updateSkill(value) {
            console.log("JJ");
            this.updateCriterion({index:this.index,value:this.criterion})
        },
      ...mapActions(["updateCriterion"])
  },
  props: ["criterion", "index"]
})
</script>