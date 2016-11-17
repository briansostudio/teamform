import Vue from 'vue'
import { Schedule, TimeInterval } from 'src/lib/schedule';
import WeeklySchedule from 'src/components/WeeklySchedule/WeeklySchedule';
import WeeklyScheduleTest from 'src/components/WeeklySchedule/WeeklyScheduleTest';
import Resolve from 'src/lib/schedule/schedule-resolve-helper';
import {Store} from 'vuex';

describe('WeeklySchedule.vue', () => {

  it('mount correctly',()=>{
    const vm = new Vue(WeeklySchedule).$mount();
    expect(vm).not.null;
  });

  it('mount correctly', () => {
    const testVm = new Vue(WeeklyScheduleTest).$mount();
    expect(testVm).not.null;

    const vm = testVm.$refs.weeklySchedule;
    vm.editMode = false;
    vm.editMode = true;
    vm.mergeMode = false;
    let evs = vm.events;
  });

  describe('editMode',()=>{
    it('should respond to edit',()=>{
      const store = new Store({
        state:{},
        actions:{
          scheduleIntervalCreate:()=>{},
          scheduleIntervalMove:()=>{}
        }
      });
      const rootVm = new Vue({
        store: store,
        template:`<div><WeeklyScheduleTest ref="testComponent"></WeeklyScheduleTest></div>`,
        components:{WeeklyScheduleTest}
      }).$mount();
      const testVm = rootVm.$refs.testComponent;
      const vm = testVm.$refs.weeklySchedule;
      vm.editMode = true;
      vm.mergeMode = false;
      vm.currentUserId = ":userId-1";

      expect(vm.callback('event-created',{start:Date.now(),end:Date.now() + 1})).not.equal(false);
      expect(vm.callback('event-selected',{start:Date.now(),end:Date.now() + 1,user_id:":userId-1",interval_id:":intervalId-1"})).not.equal(false);
      expect(vm.callback('event-drop',{start:Date.now(),end:Date.now() + 1,user_id:":userId-1",interval_id:":intervalId-1"})).not.equal(false);
      expect(vm.callback('event-resize',{start:Date.now(),end:Date.now() + 1,user_id:":userId-1",interval_id:":intervalId-1"})).not.equal(false);
    });
    it('should not respond to edit for other users',()=>{
      const testVm = new Vue(WeeklyScheduleTest).$mount();
      const vm = testVm.$refs.weeklySchedule;
      vm.editMode = true;
      vm.mergeMode = false;
      vm.currentUserId = ":userId-1";

      expect(vm.callback('event-selected',{start:Date.now(),end:Date.now() + 1,user_id:":userId-2",interval_id:":intervalId-1"})).equal(false);
      expect(vm.callback('event-drop',{start:Date.now(),end:Date.now() + 1,user_id:":userId-2",interval_id:":intervalId-1"})).equal(false);
      expect(vm.callback('event-resize',{start:Date.now(),end:Date.now() + 1,user_id:":userId-2",interval_id:":intervalId-1"})).equal(false);
    });
  });
  describe('nonEditMode',()=>{
    it('should not respond to edit',()=>{
      const testVm = new Vue(WeeklyScheduleTest).$mount();
      const vm = testVm.$refs.weeklySchedule;
      vm.editMode = false;

      expect(vm.callback('event-created',{start:Date.now(),end:Date.now() + 1})).equal(false);
    })
  });
  describe('mergeMode',()=>{
    it('should return a resolved rendering data',()=>{
      const testVm = new Vue(WeeklyScheduleTest).$mount();
      const vm = testVm.$refs.weeklySchedule;
      vm.mergeMode = true;
      expect(vm.events.length).equal(Resolve(vm.events).length);
    });
    it('should not respond to edit',()=>{
      const testVm = new Vue(WeeklyScheduleTest).$mount();
      const vm = testVm.$refs.weeklySchedule;
      vm.mergeMode = true;

      expect(vm.callback('event-created',{start:Date.now(),end:Date.now() + 1})).equal(false);
    })
  })
});
