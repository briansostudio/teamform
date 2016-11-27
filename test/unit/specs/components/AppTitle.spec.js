import Vue from 'vue'
import AppTitle from 'src/components/AppTitle'

describe('AppTitle.vue', () => {

  it('mount correctly', () => {
    const vm = new Vue(AppTitle).$mount();
    expect(vm).not.null;
  });
});