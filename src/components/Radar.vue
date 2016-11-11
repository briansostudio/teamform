<script>
import VueCharts from 'vue-chartjs'
import { Radar, reactiveProp, reactiveData } from 'vue-chartjs'

export default Radar.extend({
  mixins: [reactiveProp],
  props: ["chartData", "options"],
  mounted () {
    this.renderChart(this.chartData, this.options)
  }
})
</script>