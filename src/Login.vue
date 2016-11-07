<template>
    <div class="SignIn">
      <div class="ui centered grid">
        <div class="row event-page">
          <AppTitle></AppTitle>
        </div>
        <div class="row">
          <div class="ui form">

            <div v-if="userId === null" class="ui big icon input">
              <input class="prompt" type="text" v-model="inputUserId" @keypress="onKeyPress" placeholder="Enter User ID">
              <i class="user icon"></i>
            </div>
            <div v-else>
              {{userId}}
              <div v-if="!isUserExists" class="ui big icon input">
                <input class="prompt" type="text" v-model="inputNickName" @keypress="onKeyPress" placeholder="Enter Nick Name">
                <i class="user icon"></i>
              </div>
              <div class="ui big icon input">
                <input class="prompt" type="password" v-model="inputPassword" @keypress="onKeyPress" placeholder="Enter password">
                <i class="user icon"></i>
              </div>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="ui positive button" @click="onSubmit">
            Create or Retrieve Account
          </div>
        </div>
      </div>
    </div>
</template>

<script>

  // this page consist of three different situation
  // 1. Entering User ID
  // 2. Entering Password (For existing user)
  // 3. Entering Nick Name and Password (For new user)
  //
  // To determine the current situation:
  // userId === null -> case 1
  // userId !== null && isUserExists -> case 2
  // userId !== null && !isUserExists -> case 3

  import AppTitle from './components/AppTitle'
    export default {
        data () {
          return {
            inputUserId: "",
            inputNickName: "",
            inputPassword: "",

            userId: null,
            isUserExists: false
          }
        },
        methods: {
          validateInput(){
            if(!this.userId){
              if(!this.inputUserId){
                return "User ID is required";
              }else{
                return null;
              }
            }


            return null;
          },
          onKeyPress(event){
            if (event.which == 13 || event.keyCode == 13) {
              this.onSubmit();
              return false;
            }
          },
          onSubmit(){
            if(this.userId === null){
              // check user existence

              // show enter password
              this.userId = this.inputUserId;

            }else{
              // save user data


            }
          }
        },
      props: [],
      components:{
        AppTitle
      }
    }
</script>

<style>

  html {
    height: 100%;
  }

  .SignIn {

    .event-page {
      margin-top: 15%;
    }

    .ui.search {
      min-width: 50%;
    }

    .ui.big.icon.input{
      min-width: 80%;
    }
  }
</style>
