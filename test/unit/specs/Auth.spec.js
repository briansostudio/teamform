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
      vm.email = ";123@gmail.com";
      expect(vm.isEmail()).equal(false);
      vm.email = "";
      expect(vm.isEmail()).equal(false);
      vm.email = "clement.gmail.com";
      expect(vm.isEmail()).equal(false);
  });
  it('should check password matching correctly', ()=>{
      const vm = new Vue(Auth).$mount();
      vm.password = ";123@gmail.com";
      vm.confirmPassword = ";123@gmail.com";
      expect(vm.isPasswordMatchWithConfirmPassword()).equal(true);
      vm.password = "abcde";
      vm.confirmPassword = "ABCDE";
      expect(vm.isPasswordMatchWithConfirmPassword()).equal(false);      
  });
});
