<template>
  <form class="auth-form" v-on:submit.prevent="signUpStatue ? signUpWithPassword() : signInWithPassword()">
    <h1>{{signUpStatue ? 'Sign up' : 'Sign in'}}</h1>
    <div class="container">
      <div class="ui input">
      	<input type="email" name="email" id="email" placeholder="Email" required v-model.trim="email">
      </div>
    </div>
    <div class="container">
      <div class="ui input">
      	<input type="password" name="password" id="password" required v-model.trim="password">
      </div>
    </div>
    <div v-show="signUpStatue" class="container">
      <div class="ui input">
      	<input type="password" name="confirm-password" id="confirm-password" v-model.trim="confirmPassword">
      </div>
    </div>
    <div v-show="!signUpStatue" class="clearfix btn-group">
      <button class="ui button" type="submit">Sign in</button>
      <button class="ui button" type="button" v-on:click="signUpStatue = true">Sign up</button>
    </div>
    <div v-show="signUpStatue">
      <button type="submit" class="ui button signup-submit">Sign up</button>
    </div>
    <hr>
    <div class="social-providers">
      <a href="#" v-on:click.prevent="signInWithProvider('facebook')"><i class="fa fa-facebook-square" aria-hidden="true" style="font-size:48px"></i></a>
      <a href="#" v-on:click.prevent="signInWithProvider('twitter')"><i class="fa fa-twitter-square" aria-hidden="true" style="font-size:48px"></i></a>
      <a href="#" v-on:click.prevent="signInWithProvider('google')"><i class="fa fa-google-plus-square" aria-hidden="true" style="font-size:48px"></i></a>
      <a href="#" v-on:click.prevent="signInWithProvider('github')"><i class="fa fa-github-square" aria-hidden="true" style="font-size:48px"></i></a>
    </div>
  </form>
</template>
<script>
export default 
{
    data () {
      return {
        email: '',
        password: '',
        confirmPassword: '',
        signUpStatue: false,
      }
    },
    methods: {

    }
}
  
</script>

<style>
  .auth-form{
    width: 500px;
    max-width: 100%;
    margin: 25vh auto 15px;
    background: #fff;
    padding: 20px;
    border-radius: 2px;
    box-shadow: 0 0px 0px #ccc;
  }
  .container
  {
	margin: auto;
    width: 100%;
  }

  .auth-form h1{
    font-weight: 500;
  }
  .auth-form > div {
    margin-top: 15px;
  }
  button.ui.button {
    font-size: 18px;
    background: #41b883;
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
</style>