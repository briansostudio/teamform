<template>
  <div>
  <!--title of the auth form-->
    <div v-show="!isRegister">
      <div>
        <button class="ui google plus labeled icon button">
        <i class="google plus icon"></i>
          Sign in with Google
        </button>
      </div>
      <br>
      <div>
        <button class="ui github labeled icon button">
        <i class="github icon"></i>
          Sign in with Github
        </button>
      </div>
        <div v-show="!admin" class="ui horizontal divider">
        Or
      </div>
    </div>

    <div v-show="!isRegister">
      <span>Sign in using username and password</span>
    </div>

    <br>
    <el-row type="flex" class="row-bg" justify="space-between">
      <el-col :span="16" :offset="3">
        <el-form class="" ref="form" :model="form" label-width="90px">
          <el-form-item label="Email">
            <el-input v-model="form.email"></el-input>
          </el-form-item>

          <transition name="slide-fade">
            <el-form-item v-if="isRegister" label="User name">
              <el-input v-model="form.username"></el-input>
            </el-form-item>
          </transition>

          <el-form-item label="Password">
            <el-input type="password" v-model="form.password"></el-input>
          </el-form-item>

          <transition name="slide-fade">
            <el-form-item v-if="isRegister" label="Confirm password">
              <el-input type="password" v-model="form.confirmPassword"></el-input>
            </el-form-item>
          </transition>
        </el-form>
      </el-col>
    </el-row>

    <span>
      <span>{{isRegister ? "Already have account":"Not a member?"}}</span>
      <el-button size="mini" v-on:click="toggleRegister">{{isRegister ? "login" : "register"}}</el-button>
    </span>
  </div>

</template>
<script>
import {mapGetters, mapActions} from 'vuex';
export default
{
    data () {
      return {
        form:{
          email: '',
          username: '',
          password: '',
          confirmPassword: '',
        }
        // admin:0,
      }
    },
    computed: {
      ...mapGetters(["isRegister"])
    },
    watch:{
      form:{
        handler(val){
          this.$store.dispatch('home/loginFormUpdate',val);
        },
        deep: true
      }
    },
    methods: {
      ...mapActions(["toggleRegister"]),
      onSubmitButtonClick(){
        return this.isRegister ? signUpWithPassword() : signInWithPassword();
      },
      signUpWithPassword(){
        this.$store.dispatch('member/register',{name:this.username, email:this.email, password:this.password});
      },
      signInWithPassword(){
        this.$store.dispatch('member/login', {email:this.email, password:this.password});
      },
      signInWithProvider(provider){

      }

    },
    props:['admin']
}

</script>
