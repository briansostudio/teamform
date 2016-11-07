<template>
  <form class="auth-form" v-on:submit.prevent="signUpStatue ? signUpWithPassword() : signInWithPassword()">
    <div v-show="!admin">
      <button type="submit" class="ui teal tag label user" v-on:click="admin = true">User</button>
    </div>
    <div v-show="admin">
      <button type="submit" class="ui red tag label admin" v-on:click="admin = false">admin</button>
    </div>
    <h1>{{signUpStatue ? 'Sign up' : 'Sign in'}}</h1>
    <div class="row event-page">
          <AppTitle></AppTitle>
      </div>
    <div class="container">
      <div v-show="!admin" class="ui input">
      	<input type="email" name="email" id="email" placeholder="Email" required v-model.trim="email">
      </div>
    </div>
    <div class="container">
      <div class="ui input">
      	<input type="password" name="password" id="password" placeholder="Password" required v-model.trim="password">
      </div>
    </div>
    <div v-show="signUpStatue && !admin" class="container">
      <div class="ui input">
      	<input type="password" name="confirm-password" id="confirm-password" placeholder="Confirm Password" v-model.trim="confirmPassword">
      </div>
    </div>
    <div v-show="signUpStatue && !admin" class="container">
      <div class="ui input">
      	<input type="text" name="username" id="username" placeholder="Username" v-model.trim="username">
      </div>
    </div>
    <div v-show="signUpStatue && !admin" class="container">
      <h3 class="ui left aligned header">Skill 1</h3>
      <Rating></Rating>
    </div>
    <div v-show="!signUpStatue" class="clearfix btn-group">
      <button class="ui positive button" type="submit">Sign in</button>
      <button class="ui positive button" type="button" v-on:click="signUpStatue = true">Sign up</button>
    </div>
    <div v-show="signUpStatue">
      <button type="submit" class="ui positive button signup-submit">Sign up</button>
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
import AppTitle from './components/AppTitle'
import Rating from './components/Rating'
export default 
{

    data () {
      return {
        email: '',
        password: '',
        confirmPassword: '',
        username: '',
        signUpStatue: false,
        admin:false
      }
    },
    methods: {

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
</style>