import Vue from 'vue'
import Radar from 'src/components/Radar'

describe('RadarChart', () => {
	let el

  	beforeEach(() => {
    	el = document.createElement('div')
  	})

  	it('should render a canvas', () => {
    	const vm = new Vue({
        	data() {
      			return {
					value6: 0,
					eventInput: '',
					modeSwitch: true,
					radarData: {
						labels: ["Web", "Android", "iOS", "UI Design", "Server", "Custom 1", "Custom 2"],
						datasets: [{
							label: "Andrew",
							backgroundColor: "rgba(179,181,198,0.2)",
							borderColor: "rgba(179,181,198,1)",
							pointBackgroundColor: "rgba(179,181,198,1)",
							pointBorderColor: "#fff",
							pointHoverBackgroundColor: "#fff",
							pointHoverBorderColor: "rgba(179,181,198,1)",
							data: [88, 59, 90, 81, 56, 55, 40]
						}]
					}
				}
      		},
      	template: '<Radar :chartData="radarData"></Radar>',
      	components: { Radar }
    	}).$mount(el)

	    expect(vm.$el.querySelector('#radar-chart')).not.to.be.an('undefined')
    	expect(vm.$el.querySelector('canvas')).not.to.be.an('undefined')
    	expect(vm.$el.querySelector('canvas')).not.to.be.an('null')
    	expect(vm.$el.querySelector('canvas')).to.exist
  	})

  	it('should change id based on prop', () => {
    	const vm = new Vue({
			data() {
				return {
					value6: 0,
					eventInput: '',
					modeSwitch: true,
						radarData: {
							labels: ["Web", "Android", "iOS", "UI Design", "Server", "Custom 1", "Custom 2"],
							datasets: [{
								label: "Andrew",
								backgroundColor: "rgba(179,181,198,0.2)",
								borderColor: "rgba(179,181,198,1)",
								pointBackgroundColor: "rgba(179,181,198,1)",
								pointBorderColor: "#fff",
								pointHoverBackgroundColor: "#fff",
								pointHoverBorderColor: "rgba(179,181,198,1)",
								data: [88, 59, 90, 81, 56, 55, 40]
							}]
						}
				}
			},
			template: '<Radar :chartData="radarData"></Radar>',
			components: { Radar }
    	}).$mount(el)

    	expect(vm.$el.querySelector('#rodarchartprop')).not.to.be.an('undefined')
  	})
})