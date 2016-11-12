import Vue from 'vue'
import Auth from 'src/Auth'

describe('Auth.vue', () => {
  it('should validae email address', ()=>{
      const vm = new Vue(Auth).$mount();
      vm.email = "hong@gmail.com";
      expect(vm.isEmail()).equal(true);
      vm.email = "r.v@xyz.com";
      expect(vm.isEmail()).equal(true);
      vm.email = "abc@gmail.com";
      expect(vm.isEmail()).equal(true);
  });
  
  it('should reject invalid email address', ()=>{
      const vm = new Vue(Auth).$mount();
      vm.email = ";123@gma";
      expect(vm.isEmail()).equal(false);
      vm.email = "";
      expect(vm.isEmail()).equal(false);
      vm.email = "clement.gmail.com";
      expect(vm.isEmail()).equal(false);
  });

 it('should not be lower than minimum length', ()=>{
      const vm = new Vue(Auth).$mount();
      vm.password = "1234567";
      expect(vm.passwordLength()).equal(true);
      vm.password = "12345";
      expect(vm.passwordLength()).equal(false); 
      vm.password = "";
      expect(vm.passwordLength()).equal(false);      
  });

  it('should check password matching correctly', ()=>{
      const vm = new Vue(Auth).$mount();
      vm.password = "123456";
      vm.confirmPassword = "123456";
      expect(vm.isPasswordMatchWithConfirmPassword()).equal(true);
      vm.password = "abcde";
      vm.confirmPassword = "abcd";
      expect(vm.isPasswordMatchWithConfirmPassword()).equal(false);      
  });

  it('username not empty', ()=>{
      const vm = new Vue(Auth).$mount();
      vm.username = "clement";
      expect(vm.isUsernameInput()).equal(true);
      vm.username = "";
      expect(vm.isUsernameInput()).equal(false);   
      vm.username = "N";
      expect(vm.isUsernameInput()).equal(true);    
  });

  it('should check the title', ()=>{
      const vm = new Vue(Auth).$mount();
      expect(vm.title).equal('Sign in');   
  });

});
