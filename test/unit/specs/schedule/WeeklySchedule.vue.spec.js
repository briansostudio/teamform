import Vue from 'vue'
import WeeklySchedule from 'src/components/WeeklySchedule/WeeklySchedule';


describe('WeeklySchedule.vue', () => {

  it('mount correctly', () => {
    const vm = new Vue(WeeklySchedule).$mount();
    vm.callback('event-created',"asd");
    expect(vm).not.null;
  });
});
