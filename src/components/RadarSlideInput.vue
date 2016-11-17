<template>
    <el-row>
      <div>
        <el-slider v-model="value6" @change="PorkLegoGuy" show-input>
        </el-slider>
      </div>
    </el-row>
</template>

<script>

export default ({
    data() {
      return {
        value6: 0,
      }
    },
  methods: {
      PorkLegoGuy(value)
        {
        console.log(value)

        app.radarData = {
     		labels: ["Web", "Android", "iOS", "UI Design", "Server", "Custom 1", "Custom 2"],
     		datasets: [{
     			label: "Andrew",
     			backgroundColor: "rgba(179,181,198,0.2)",
     			borderColor: "rgba(179,181,198,1)",
     			pointBackgroundColor: "rgba(179,181,198,1)",
     			pointBorderColor: "#fff",
     			pointHoverBackgroundColor: "#fff",
     			pointHoverBorderColor: "rgba(179,181,198,1)",
     			data: [value, 59, 90, 81, 56, 55, 40]
     		  }]
     	  }
      }
  }
})
</script>