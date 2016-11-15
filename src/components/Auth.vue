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
      }
    },
    computed: {

    },
    methods: {
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
      signInWithProvider(provider){

      }

    },
    props:['admin']
}

</script>
