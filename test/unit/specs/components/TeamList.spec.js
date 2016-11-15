import Vue from 'vue'
import TeamList from 'src/components/TeamList'

describe('TeamList.vue', () => {

  it('mount correctly', () => {
    const vm = new Vue(TeamList).$mount();
    expect(vm).not.null;
  });
});