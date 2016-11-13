// import Vue from 'vue'
// import Home from 'src/Home'
// import AppTitle from 'src/components/AppTitle'
// import EventAction from 'src/components/EventAction'
// import TeamSizeControl from 'src/components/TeamSizeControl'
// import root from 'src/root'

// describe('App.vue', () => {
//   it('sets the correct default data', () => {
//     expect(typeof Home.data).equal('function');
//     const defaultData = Home.data();
//     expect(defaultData.eventInput).equal('');
//   });

//   // it('mount correctly', () => {
//   //   //const vm = new Vue(App).$mount();
//   //   //expect(vm).not.null;
//   // });


//   // it('should render correct contents', () => {
//   //   const vm = new Vue({
//   //     el: document.createElement('div'),
//   //     render: (h) => h(App)
//   //   });
//   //   expect(vm.$el.querySelector('.hello h1').textContent).to.equal('Hello Vue!')
//   // })
// });

// describe('AppTitle.vue', () => {

//   it('mount correctly', () => {
//     const vm = new Vue(AppTitle).$mount();
//     expect(vm).not.null;
//     expect(vm.title).equal("Teamform");
//   });
// });

// describe('EventAction.vue', () => {

//   // it('mount correctly', () => {
//   //   const vm = new Vue({
//   //     template:"<div><EventAction></EventAction></div>",
//   //     components:{EventAction},
//   //   }).$mount();
//   //   expect(vm).not.null;
//   // });
// });

// describe('TeamSizeControl.vue', ()=>{
//   it('mount correctly', () => {
//     const vm = new Vue({
//       template:`<div><TeamSizeControl :size="size"></TeamSizeControl></div>`,
//       components:{TeamSizeControl},
//       data(){
//         return {
//           size:0
//         }
//       },
//       methods: {
//         changeSize(s){
//           this.size = s;
//         }
//       }
//     }).$mount();
//     expect(vm).not.null;
//     vm.changeSize(1);
//     expect(vm.size).equal(1);
//   });
// });
