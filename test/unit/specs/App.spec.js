import Vue from 'vue'
import VueRouter from 'vue-router';
import {Store} from 'vuex';
import Home from 'src/Home'
import AppTitle from 'src/components/AppTitle'
import EventAction from 'src/components/EventAction'
import Rating from 'src/components/Rating'
import ForkMe from 'src/components/ForkMe'
import TeamList from 'src/components/TeamList'
import Radar from 'src/components/Radar'
import QualityControl from 'src/components/QualityControl'
import TeamSizeControl from 'src/components/TeamSizeControl'
import app from 'src/main'

describe('App.vue', () => {
  it('sets the correct default data', () => {
    expect(typeof Home.data).equal('function');
    const defaultData = Home.data();
    expect(defaultData.eventInput).equal('');
  });

  let appVm;
  it('mount correctly',()=>{
    appVm = app.$mount();
    expect(appVm).not.null;
  });

  it('render route correctly',(done)=>{
    console.log("ROUTE", appVm.$route);
    appVm.$router.push("/");
    setTimeout(()=>{
      expect(app.$route.path).equal("/");
      done();
    }, 1000);
  });
  // it('mount correctly', () => {
  //   //const vm = new Vue(App).$mount();
  //   //expect(vm).not.null;
  // });


  // it('should render correct contents', () => {
  //   const vm = new Vue({
  //     el: document.createElement('div'),
  //     render: (h) => h(App)
  //   });
  //   expect(vm.$el.querySelector('.hello h1').textContent).to.equal('Hello Vue!')
  // })
});

describe('AppTitle.vue', () => {

  it('mount correctly', () => {
    const vm = new Vue(AppTitle).$mount();
    expect(vm).not.null;
    expect(vm.title).equal("Teamform");
  });
});

describe('Other Components', ()=>{
  it('Rating.vue', ()=>{
    const vm = new Vue(Rating).$mount();
    expect(vm).not.null;
    vm.star_over(2);
    expect(vm.value).equal(2);
    vm.star_out();
    expect(vm.value).not.equal(2);
    vm.set(3);
    expect(vm.value).equal(3);
    vm.disabled = "true";
    vm.star_over(9);
    expect(vm.value).equal(3);
    vm.star_out();
    expect(vm.value).equal(3);
    vm.set(9);
    expect(vm.value).equal(3);
  })
  it('ForkMe.vue', ()=>{
    const vm = new Vue(ForkMe).$mount();
    expect(vm).not.null;
  })
  it('Radar.vue', ()=>{
    const vm = new Vue(Radar).$mount();
    expect(vm).not.null;
  })
  it('TeamList.vue', ()=>{
    const router = new VueRouter({
      routes:[{
        path: '/',
        name: 'home',
        component: TeamList
      }],
      mode: 'history'
    });
    const vm = new Vue({
      router:router,
      template:`<div><TeamList ref="tt"></TeamList></div>`,
      components:{TeamList}
    }).$mount();
    expect(vm).not.null;
    let tt = vm.$refs.tt;
    expect(tt).not.null;
    expect(tt.$router).not.null;
    tt.manageTeam(1);
    tt.loadTeamMember(2);
  })
  it('QualityControl.vue', ()=>{
    const vm = new Vue(QualityControl).$mount();
    expect(vm).not.null;
    vm.qualityInput = "123132";
    vm.qualities = [];
    vm.addWantedQuality();
    expect(vm.qualities[0]).equal("123132");
    vm.removeQuality("123132");
    expect(vm.qualities.length).equal(0);
  })
});

describe('EventAction.vue', () => {

  it('mount correctly', () => {
    const vm = new Vue({
      template:"<div><EventAction></EventAction></div>",
      components:{EventAction},
    }).$mount();
    expect(vm).not.null;
  });

  it('functional', ()=>{
    let dispatched1, dispatched2;
    const store = new Store({
      actions:{
        loadEvent(){
          dispatched1 = true;
        },
        createEvent(){
          dispatched2 = true;
        }
      }
    });
    const vm = new Vue({
      store:store,
      template:`<div><EventAction ref="tt"></EventAction></div>`,
      components:{EventAction}
    }).$mount();
    expect(vm).not.null;
    let tt = vm.$refs.tt;
    expect(tt).not.null;
    expect(tt.$store).not.null;

    expect(tt.isInputValid()).equal(false);
    tt.createEvent();
    tt.loadEvent();
    expect(dispatched1).not.equal(true);
    expect(dispatched2).not.equal(true);

    tt.name = "123";
    expect(tt.isInputValid()).equal(true);
    tt.createEvent();
    tt.loadEvent();
    expect(dispatched1).equal(true);
    expect(dispatched2).equal(true);
  })
});

describe('TeamSizeControl.vue', ()=>{
  it('mount correctly', () => {
    const vm = new Vue({
      template:`<div><TeamSizeControl :size="size"></TeamSizeControl></div>`,
      components:{TeamSizeControl},
      data(){
        return {
          size:0
        }
      },
      methods: {
        changeSize(s){
          this.size = s;
        }
      }
    }).$mount();
    expect(vm).not.null;
    vm.changeSize(1);
    expect(vm.size).equal(1);
  });
});
