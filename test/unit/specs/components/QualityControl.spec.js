import Vue from 'vue'
import QualityControl from 'src/components/QualityControl'

describe('QualityControl.vue', () => {

  it('mount correctly', () => {
    const vm = new Vue(QualityControl).$mount();
    expect(vm).not.null;
  });
});