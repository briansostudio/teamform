import Vue from 'vue'
import FullCalendar from 'src/components/WeeklySchedule/FullCalendar';


describe('FullCalendar.vue', () => {

  it('mount correctly', () => {
    const vm = new Vue(FullCalendar).$mount();
    vm.callback('event-created',"asd");
    expect(vm).not.null;
  });

  it('rerender',()=>{
    const vm = new Vue(FullCalendar).$mount();
    vm.events = [
      {start:Date.now(),end:Date.now() + 86400000}
    ];
    expect(vm).not.null;
  })
});
