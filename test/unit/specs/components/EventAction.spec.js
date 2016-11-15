import Vue from 'vue'
import EventAction from 'src/components/EventAction'

describe('EventAction.vue', () => {

  it('mount correctly', () => {
    const vm = new Vue(EventAction).$mount();
    expect(vm).not.null;
  });
});