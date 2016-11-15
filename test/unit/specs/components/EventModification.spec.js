import Vue from 'vue'
import EventModificationForm from 'src/components/EventModificationForm'

describe('EventModificationForm.vue', () => {

  it('mount correctly', () => {
    const vm = new Vue(EventModificationForm).$mount();
    expect(vm).not.null;
  });
});