import eventModule from 'src/store/modules/event.js';
import teamModule from 'src/store/modules/team.js';
import * as types from 'src/store/mutation-types'

describe('Event module', () => {
  let {state, actions, mutations} = eventModule;
  it('display error', ()=>{
    let s = {
      errors:{loginPageErrors:[]}
    };
    mutations.displayError(s, "error: 123");
    expect(s.errors.loginPageErrors[0]).equal("error: 123");
  });
  it('does not throw error', ()=>{
    let committed = 0;
    let commit = ()=>{
      committed++;
    };
    actions.increaseMaximumTeamSize({commit}, 1);
    actions.decreaseMaximumTeamSize({commit}, 1);
    actions.increaseMinimumTeamSize({commit}, 1);
    actions.decreaseMinimumTeamSize({commit}, 1);
  })
  it("server interaction", function(done){
    this.timeout(5000);
    let committed = 0;
    let commit = ()=>{
      committed++;
    };
    actions.createEvent({commit}, "test");
    actions.loadEvent({commit}, "test");
    setTimeout(done, 4000);
  });
});
describe('Event module', () => {
  let {o_state, actions, mutations} = teamModule;
  it('mutate states', ()=>{
    let s = {
      size:0,
      join_request:[]
    };
    mutations[types.ADD_TO_TEAM](s, {request:""});
    mutations[types.INCREASE_TEAMSIZE](s, {size:3});
    expect(s.size).equal(3);
    mutations[types.DECREASE_TEAMSIZE](s, {size:5});
    expect(s.size).equal(5);
    mutations[types.ADD_JOIN_REQUEST](s, {requests:[
      "Hi",
      "I want to join"
    ]});
    expect(s.join_request.length).equal(2);
    mutations[types.ADD_JOIN_REQUEST](s, {requests:[
      "Hi",
      "I want to join"
    ]});
    expect(s.join_request.length).equal(4);
  });
  it('involves proper commits', ()=>{
    let state = Object.assign({},o_state);
    state.join_request = [];
    let committed = 0;
    let commit = (type, payload)=>{
      mutations[type](state, payload)
    };
    actions.approveJoinRequest({commit, state}, 1);

    actions.addJoinRequest({commit, state}, [
      "Hi",
      "I want to join"
    ]);
    expect(state.join_request.length).equal(2);
    actions.addJoinRequest({commit, state}, [
      "Hi",
      "I want to join"
    ]);
    expect(state.join_request.length).equal(4);

    actions.increaseSize({commit, state}, 4);
    expect(state.size).equal(4);

    actions.decreaseSize({commit, state}, 7);
    expect(state.size).equal(7);
  })
});
