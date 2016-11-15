import Vue from 'vue'
import ForkMe from 'src/components/ForkMe'

describe('ForkMe.vue', () => {

  it('mount correctly', () => {
    const vm = new Vue(ForkMe).$mount();
    expect(vm).not.null;
  });
});