import Vue from 'vue'
import EventList from 'src/components/EventList'

describe('EventAction.vue', () => {

  it('mount correctly', () => {
    const vm = new Vue(EventList).$mount();
    expect(vm).not.null;
  });
});