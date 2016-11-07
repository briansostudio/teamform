<script>
import VueCharts from 'vue-chartjs'
import { Radar } from 'vue-chartjs'

export default Radar.extend({
  mounted () {
    // Overwriting base render method with actual data.

    this.renderChart({
      labels: ["Web", "Android", "iOS", "UI Design", "Server", "Custom 1", "Custom 2"],
      datasets: [
        {
          label: "Andrew",
            backgroundColor: "rgba(179,181,198,0.2)",
            borderColor: "rgba(179,181,198,1)",
            pointBackgroundColor: "rgba(179,181,198,1)",
            pointBorderColor: "#fff",
            pointHoverBackgroundColor: "#fff",
            pointHoverBorderColor: "rgba(179,181,198,1)",
            data: [65, 59, 90, 81, 56, 55, 40]
        }
      ]
    })
  }
})
</script>