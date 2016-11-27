import Vue from 'vue'
import EventDetails from 'src/components/EventDetails'

describe('EventDetails.vue', () => {

  it('mount correctly', () => {
    const vm = new Vue(EventDetails).$mount();
    expect(vm).not.null;
  });
});