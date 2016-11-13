import Vue from 'vue'
import FullCalendar from 'src/components/WeeklySchedule/FullCalendar';


describe('FullCalendar.vue', () => {

  it('mount correctly', () => {
    const vm = new Vue(FullCalendar).$mount();
    vm.callback('event-created',"asd");
    expect(vm).not.null;
  });
});
