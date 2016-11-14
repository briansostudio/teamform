<template>
  <form class="auth-form" v-on:submit.prevent="onSubmitButtonClick()">
    <div v-show="!admin">
      <button type="submit" class="ui teal tag label user" v-on:click="swapAdminClick()">User</button>
    </div>
    <div v-show="admin">
      <button type="submit" class="ui red tag label admin" v-on:click="swapUserClick()">admin</button>
    </div>
    <h1>{{title}}</h1>
    <div class="row event-page">
          <AppTitle></AppTitle>
      </div>
    <div class="container">
      <div v-show="!admin" class="ui input email">
      	<input class="email-prompt" type="email" name="email" id="email" placeholder="Email" required v-model.trim="email"  v-on:input="isEmail()">
      </div>
        <span class="error" v-show="errorEmail">* invalid email</span>
    </div>
    <div class="container">
      <div class="ui input password">
      	<input class="password-prompt" type="password" name="password" id="password" placeholder="Password" required v-model.trim="password" v-on:input="passwordLength()">
      </div>
        <span class="error" v-show="errorPasswordMin">* Password is too short</span>
    </div>
    <div v-show="signUpStatue && !admin" class="container">
      <div class="ui input confirmPassword">
      	<input class="confirmpassword-prompt" type="password" name="confirm-password" id="confirm-password" placeholder="Confirm Password" v-model.trim="confirmPassword" v-on:input="isPasswordMatchWithConfirmPassword()">
      </div>
      <span class="error" v-show="errorConfirmPassword">* Not match with password</span>
    </div>
    <div v-show="signUpStatue && !admin" class="container">
      <div class="ui input username">
      	<input class="username-prompt" type="text" name="username" id="username" placeholder="Username" v-model.trim="username" v-on:input="isUsernameInput()">
      </div>
        <span class="error" v-show="errorUsername">* Username cannot be empty</span>
    </div>
    <div v-show="signUpStatue && !admin" class="container">
      <Rating skillName="Speed" value="3"></Rating>
    </div>
    <div v-show="!signUpStatue" class="clearfix btn-group">
      <button class="ui positive button" type="submit">Sign in</button>
      <button class="ui positive button" type="button" v-on:click="onSignUpButtonClick()">Sign up</button>
    </div>
    <div v-show="signUpStatue">
      <button type="submit" class="ui positive button signup-submit">Sign up</button>
      <button type="submit" class="ui positive button signup-submit" v-on:click="onBackButtonClick()">Back</button>
    </div>
    <div v-show="!admin" class="ui horizontal divider">
    Or
    </div>
    <div v-show="!admin" class="social-providers">
      <a href="#" v-on:click.prevent="signInWithProvider('facebook')"><i class="fa fa-facebook-square" aria-hidden="true" style="font-size:48px"></i></a>
      <a href="#" v-on:click.prevent="signInWithProvider('twitter')"><i class="fa fa-twitter-square" aria-hidden="true" style="font-size:48px"></i></a>
      <a href="#" v-on:click.prevent="signInWithProvider('google')"><i class="fa fa-google-plus-square" aria-hidden="true" style="font-size:48px"></i></a>
      <a href="#" v-on:click.prevent="signInWithProvider('github')"><i class="fa fa-github-square" aria-hidden="true" style="font-size:48px"></i></a>
    </div>
  </form>

</template>
<script>
import AppTitle from './AppTitle'
import Rating from './Rating'
export default
{

    data () {
      return {
        email: '',
        password: '',
        confirmPassword: '',
        username: '',
        signUpStatue: false,
        admin:false,
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
        return this.signUpStatue ? this.signUpWithPassword() : signInWithPassword();
      },
      signUpWithPassword(){
        this.$store.dispatch('register',{name:this.username, email:this.email, password:this.password});
      },
      // signInWithPassword(){

      // },
      signInWithProvider(provider){

      }

    },
    components:{
      AppTitle,Rating,
    }
}

</script>

<style>
  .auth-form{
    width: 550px;
    height: 600px;
    max-width: 100%;
    margin: 10vh auto 15px;
    background: #fff;
    border-radius: 2px;
    box-shadow: 0 0px 0px #ccc;
  }
  .container
  {
	  margin: auto;
    width: 100%;
  }

  .ui.teal.tag.label
  {
    margin: 10px;
    font-size:17px
  }
  .ui.red.tag.label
  {
    margin: 10px;
    font-size:16px
  }
  .auth-form h1{
    font-weight: 500;
  }
  .auth-form > div {
    margin-top: 15px;
  }
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
