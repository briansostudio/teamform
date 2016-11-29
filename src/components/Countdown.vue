<template>
    <div>
        <div id="clockdiv">
                <h1 v-if="eventDate-now < 0">Event ended</h1>
                <h1 v-if="eventDate-now > 0">Time remaining:</h1>
        <div class="block">
            <span class="digit">{{ days }}</span>
            <div class="text">Days</div>
        </div>
        <div class="block">
            <span class="digit">{{ hours }}</span>
            <div class="text">Hours</div>
        </div>
        <div class="block">
            <span class="digit">{{ minutes }}</span>
            <div class="text">Minutes</div>
        </div>
        <div class="block">
            <span class="digit">{{ seconds }}</span>
            <div class="text">Seconds</div>
        </div>
    </div>

</template>
<script>
import swal from 'sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';

export default {

    data() {
        return {
            now: Math.trunc((new Date()).getTime() / 1000),
            eventDate: Math.trunc(Date.parse(this.Date) / 1000)
        }
    },
    mounted() {
        var intervalID = window.setInterval(() => {this.now = Math.trunc((new Date()).getTime() / 1000)},1000);
        if(this.seconds == 0 && this.minutes == 0 && this.hours == 0 && this.days == 0)
        {
           swal(
			    'Event Registration Ended',
			    'Deadline: ' + this.Date ,
                'error'
			);
            window.clearInterval(intervalID);
        }
    },
  watch:{
        Date(val){
          this.eventDate = Math.trunc(Date.parse(val) / 1000)
        }
  },
    props:['Date'],
    computed: {
            seconds() {
                if(this.eventDate - this.now > 0)
                {
                    return (this.eventDate - this.now) % 60;
                }
                else
                {
                    return 0;
                }
            },
            minutes() {
                if(this.eventDate - this.now >0)
                    return Math.trunc((this.eventDate - this.now) / 60) % 60;
                else
                    return 0;
            },
            hours() {
                if(this.eventDate - this.now >0)
                   return Math.trunc((this.eventDate - this.now) / 60 / 60) % 24;
                else
                    return 0;
            },
            days() {
                if(this.eventDate - this.now >0)
                {
                    return Math.trunc((this.eventDate - this.now) / 60 / 60 / 24);
                }
                else
                    return 0;
            }
    }

}
</script>

<style>

h1{
  color: #396;
  font-weight: 100;
  font-size: 20px;
  margin: 40px 0px 20px;
}

#clockdiv{
	color: #fff;
	display: inline-block;
	font-weight: 200;
	text-align: center;
	font-size: 16px;
}

#clockdiv > div{
	padding: 15px;
	border-radius: 4px;
	background: #00BF96;
	display: inline-block;
}

#clockdiv div > span{
	padding: 20px;
	border-radius: 3px;
	background: #00816A;
	display: inline-block;
}



</style>
