import Vue from 'vue'
import CountDown from 'src/components/CountDown'

describe('CountDown.vue', () => {
  it('should check date difference', ()=>{
      const vm = new Vue(CountDown).$mount();
      vm.now = Math.trunc(Date.parse("16 June 2016 00:00:00 GMT") / 1000);
      vm.eventDate = Math.trunc(Date.parse("16 June 2016 03:02:01 GMT") / 1000);
      expect(vm.seconds()).equal(1);
      expect(vm.minutes()).equal(2);
      expect(vm.hours()).equal(3);
      expect(vm.days()).equal(0);
  });

  it('should check date equal', ()=>{
      const vm = new Vue(CountDown).$mount();
      vm.now = Math.trunc(Date.parse("16 June 2016 00:00:00 GMT") / 1000);
      vm.eventDate = Math.trunc(Date.parse("16 June 2016 00:00:00 GMT") / 1000);
      expect(vm.seconds()).equal(0);
      expect(vm.minutes()).equal(0);
      expect(vm.hours()).equal(0);
      expect(vm.days()).equal(0);
  });

});
