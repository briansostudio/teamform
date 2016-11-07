import Vue from 'vue'
import App from 'src/App'
import root from 'src/root'

describe('App.vue', () => {
  it('sets the correct default data', () => {
    expect(typeof App.data).equal('function');
    const defaultData = App.data();
    expect(defaultData.eventInput).equal('');
  });

  it('mount correctly', () => {
    //const vm = new Vue(App).$mount();
    //expect(vm).not.null;
  });


  // it('should render correct contents', () => {
  //   const vm = new Vue({
  //     el: document.createElement('div'),
  //     render: (h) => h(App)
  //   });
  //   expect(vm.$el.querySelector('.hello h1').textContent).to.equal('Hello Vue!')
  // })
});
