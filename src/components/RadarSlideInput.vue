<template>
    <el-row>
      <div>
        <Slider v-for="(n, index) in viewingUser.radarChartData.labels" :index="index" :criterion="viewingUser.radarChartData.datasets[0].data[index]">
        </Slider>
      </div>
    </el-row>
</template>

<script>
import {mapGetters} from 'vuex'
import Slider from './Slider'

export default ({
  computed: {
    ...mapGetters(['viewingUser'])
  },
  components: {Slider}
})
</script>