<template>
  <div>
  <!--title of the auth form-->
    <div v-show="!signUpStatue">
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

    <div v-show="!signUpStatue">
      <span>Sign in using username and password</span>
    </div>

    <br>
    <el-row type="flex" class="row-bg" justify="space-between">
      <el-col :span="16" :offset="3">
        <el-form class="" ref="form" :model="form" label-width="90px">
          <el-form-item label="Username">
            <el-input ></el-input>
          </el-form-item>

          <el-form-item label="Password">
            <el-input ></el-input>
          </el-form-item>

          <el-form-item label="Confirm password">
            <el-input ></el-input>
          </el-form-item>
        </el-form>
      </el-col>
    </el-row>

    <span v-show="!signUpStatue">Not a member?
      <el-button size="mini" v-on:click="onSignUpButtonClick()">Register</el-button>
    </span>
  </div>

</template>
<script>
import AppTitle from './AppTitle'
export default
{

    data () {
      return {
        email: '',
        password: '',
        confirmPassword: '',
        username: '',
        signUpStatue: false,
        // admin:0,
        errorEmail:false,
        errorPasswordMin:false,
        errorConfirmPassword:false,
        errorUsername: false
      }
    },
    computed: {
      title(){
        return this.signUpStatue ? 'Sign up' : 'Sign in';
      }
    },
    methods: {
      //checking
      isEmail()
      {
        var re = /[A-Z0-9._%+-]+@[A-Z0-9.-]+.[A-Z]{2,4}/igm;
        if (this.email == '' || !re.test(this.email))
        {
          this.errorEmail = true;
          // $(".ui.input.email").addClass(" error");
          return false;
        }
        else
        {
          this.errorEmail = false;
          // $(".ui.input.email").removeClass(" error");
          return true;
        }
      },
      passwordLength()
      {
        if(this.password.length<6)
        {
          this.errorPasswordMin = true;
          // $(".ui.input.password").addClass(" error");
          return false;
        }
        else{
          this.errorPasswordMin = false;
          // $(".ui.input.password").removeClass(" error");
          return true;
        }
      },
      isPasswordMatchWithConfirmPassword()
      {
        if (this.password == '' || this.password != this.confirmPassword)
        {
          this.errorConfirmPassword = true;
          // $(".ui.input.confirmPassword").addClass(" error");
          return false;
        }
        else
        {
          this.errorConfirmPassword = false;
          // $(".ui.input.confirmPassword").removeClass(" error");
          return true;
        }
      },
      isUsernameInput()
      {
        if (this.username == '')
        {
          this.errorUsername = true;
          // $(".ui.input.username").addClass(" error");
          return false;
        }
        else
        {
          this.errorUsername = false;
          // $(".ui.input.username").removeClass(" error");
          return true;
        }
      },
      //function
      swapAdminClick()
      {
        this.admin = true;
        this.errorEmail = false;
        this.errorPasswordMin = false;
        // $(".ui.input.email").removeClass(" error");
        // $(".ui.input.password").removeClass(" error");
      },
      swapUserClick()
      {
        this.admin = false;
        this.errorEmail = false;
        this.errorPasswordMin = false;
        // $(".ui.input.email").removeClass(" error");
        // $(".ui.input.password").removeClass(" error");
      },
      onSignUpButtonClick(){
        this.signUpStatue = true;
      },
      onBackButtonClick(){
        this.signUpStatue = false;
      },
      onSubmitButtonClick(){
        return this.signUpStatue ? signUpWithPassword() : signInWithPassword();
      },
      signUpWithPassword(){

      },
      // signInWithPassword(){

      // },
      signInWithProvider(provider){

      }

    },
    components:{
      AppTitle,
    },
    props:['admin']
}

</script>

<style>
  button.ui.positive.button {
    font-size: 18px;
    background: #28d6ac;
    color: #fff;
    width: 45%;
    margin-left: 10px;
  }
  .ui.input
  {
  	 width: 100%;
  }
  .auth-form hr{
    margin-top: 20px;

  }
  .auth-form .social-providers{
    text-align: center;
  }

  .auth-form .social-providers a{
    color: #41b883;
    font-size: 36px;
    padding: 4px;
  }
  .fa-facebook-square {
	  color:#3b5998
  }
  .fa-twitter-square {
	  color:#00aced
  }
  .fa-google-plus-square {
	  color:#dd4b39
  }
  .fa-github-square {
	  color:#000000
  }

  .fa{
    transition: all 0.2s ease-in-out;
  }
  .fa:hover {
    opacity: .7;
  }
  .error
  {
    margin-bottom: 5px;
    font-size:150%;
    color:red;
  }
</style>
