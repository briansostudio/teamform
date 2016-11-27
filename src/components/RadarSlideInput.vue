<template>
    <el-row>
      <div>
        <Slider v-for="(label, index) in currentEvent.criteria" :label="label" :index="index" :criterion="viewingUser.radarChartData.datasets[0].data[index]">
        </Slider>
      </div>
    </el-row>
</template>

<script>
import {mapGetters} from 'vuex'
import Slider from './Slider'

export default ({
  computed: {
    ...mapGetters(['viewingUser','currentEvent'])
  },
  components: {Slider}
})
</script>
