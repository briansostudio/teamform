import Vue from 'vue'
import TeamSizeControl from 'src/components/TeamSizeControl'

describe('TeamSizeControl.vue', () => {

  it('mount correctly', () => {
    const vm = new Vue(TeamSizeControl).$mount();
    expect(vm).not.null;
  });
});