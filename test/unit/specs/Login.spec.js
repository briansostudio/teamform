import Vue from 'vue'
import Login from 'src/Login'

describe('Login.vue', () => {
  it('sets the correct default data', () => {
    expect(typeof Login.data).equal('function');
    const defaultData = Login.data();
    expect(defaultData.inputUserId).equal('');
    expect(defaultData.inputNickName).equal('');
    expect(defaultData.inputPassword).equal('');
  });

  it('correctly vlidate the input (1)', () => {
    const vm = new Vue(Login).$mount();
    var result;
    //1
    vm.userId = null;
    vm.isUserExists = false;
    vm.inputUserId = "";
    vm.inputNickName = "";
    vm.inputPassword = "";
    result = vm.validateInput();
    expect(result).not.null;
    //2
    vm.userId = null;
    vm.isUserExists = false;
    vm.inputUserId = "Hi";
    vm.inputNickName = "";
    vm.inputPassword = "";
    result = vm.validateInput();
    expect(result).is.null;
  });

  // it('correctly vlidate the input (2)', () => {
  //   const vm = new Vue(Login).$mount();
  //   var result;
  //   //1
  //   vm.userId = "brian";
  //   vm.isUserExists = true;
  //   vm.inputUserId = "Hi";
  //   vm.inputNickName = "";
  //   vm.inputPassword = "";
  //   result = vm.validateInput();
  //   expect(result).not.null;
  //   //2
  //   vm.userId = "brian";
  //   vm.isUserExists = true;
  //   vm.inputUserId = "Hi";
  //   vm.inputNickName = "";
  //   vm.inputPassword = "abcdwf";
  //   result = vm.validateInput();
  //   expect(result).is.null;
  // });

  // it('correctly vlidate the input (3)', () => {
  //   const vm = new Vue(Login).$mount();
  //   var result;
  //   vm.userId = "brian";
  //   vm.isUserExists = false;
  //   vm.inputUserId = "Hi";
  //   vm.inputNickName = "";
  //   vm.inputPassword = "";
  //   result = vm.validateInput();
  //   expect(result).not.null;

  //   vm.userId = "brian";
  //   vm.isUserExists = false;
  //   vm.inputUserId = "Hi";
  //   vm.inputNickName = "abc";
  //   vm.inputPassword = "";
  //   result = vm.validateInput();
  //   expect(result).not.null;

  //   vm.userId = "brian";
  //   vm.isUserExists = false;
  //   vm.inputUserId = "Hi";
  //   vm.inputNickName = "";
  //   vm.inputPassword = "avc";
  //   result = vm.validateInput();
  //   expect(result).not.null;

  //   vm.userId = "brian";
  //   vm.isUserExists = true;
  //   vm.inputUserId = "Hi";
  //   vm.inputNickName = "abdi";
  //   vm.inputPassword = "abcdwf";
  //   result = vm.validateInput();
  //   expect(result).is.null;
  // });


  // it('should render correct contents', () => {
  //   const vm = new Vue({
  //     el: document.createElement('div'),
  //     render: (h) => h(Login)
  //   });
  //   expect(vm.$el.querySelector('.hello h1').textContent).to.equal('Hello Vue!')
  // })
});
