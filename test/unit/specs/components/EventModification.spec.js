import Vue from 'vue'
import EventModificationForm from 'src/components/EventModificationForm'

describe.skip('EventModificationForm.vue', () => {

  it('mount correctly', () => {
    const vm = new Vue(EventModificationForm).$mount();
    expect(vm).not.null;
  });
});
